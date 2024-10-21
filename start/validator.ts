import { validator } from '@ioc:Adonis/Core/Validator'
import Business from 'App/Models/Business'
import Product from 'App/Models/Product'
import User from 'App/Models/User'
import { EnumForBusinessModel } from 'Contracts/enum'

validator.rule('doUpCase', (value, _, { mutate }) => {
  if (!value) return
  if (typeof value !== 'string') {
    return
  }
  mutate(value.toUpperCase())
})

validator.rule('doLowerCase', (value, _, { mutate }) => {
  if (!value) return
  if (typeof value !== 'string') {
    return
  }
  mutate(value.toLowerCase())
})

validator.rule('doNameCase', (value, _, { mutate }) => {
  if (!value) return
  if (typeof value !== 'string') {
    return
  }
  mutate(value.toNameCase())
})

validator.rule('doSqlDate', (value, _, { mutate }) => {
  if (!value) return
  if (value?.constructor?.name === 'DateTime') {
    mutate(value.toISODate())
  }
})

//only runs if nullable or nullableAndOptional
validator.rule(
  'emptyToNull',
  (value, _, { mutate }) => {
    if (value === '') {
      mutate(null)
    }
  },
  () => ({ allowUndefineds: true }),
)

// rules for user experiaces

validator.rule(
  'timePeiodForExperiances',
  (value, _, { errorReporter, pointer, arrayExpressionPointer, root }) => {

    if (!value && !root['end_time']) {
      errorReporter.report(
        pointer,
        'timePeiodForExperiances',
        'End time Required , if not working currently in company.',
        arrayExpressionPointer
      )
    }
    if (root['currently_working'] && root['end_time']) {
      errorReporter.report(
        pointer,
        'end_Time',
        'currently_working can not be true if end time is been provided .',
        arrayExpressionPointer
      )
    }
  }
)

validator.rule(
  'uniqueUsername',
  async (value, _, { errorReporter, pointer, arrayExpressionPointer, root }) => {

    let existInUserTable = await User.query().where('username', value).first();
    if (existInUserTable) {
      errorReporter.report(pointer, 'uniqueUsername', 'Username validation failed', arrayExpressionPointer);
      return;
    }

    let existInBusinessTable = await Business.query().where('username', value).first();
    if (existInBusinessTable) {
      errorReporter.report(pointer, 'uniqueUsername', 'Username validation failed', arrayExpressionPointer);
      return;
    }

    let existInProductTable = await Product.query().where('username', value).first();
    if (existInProductTable) {
      errorReporter.report(pointer, 'uniqueUsername', 'Username validation failed', arrayExpressionPointer);
      return;
    }

  },
  () => {
    return {
      async: true
    }
  }
)

// validation rule for #tags

validator.rule('verifyHashTags' , (value : Array<string | number>, [{tag_type}] : Array<{tag_type : 'technology' | 'business_model'}> , { errorReporter, pointer, arrayExpressionPointer, root }) => {

  if(tag_type === 'business_model'){
    for(let model of value){

      if(typeof model !== 'string' && typeof model !== 'number') {
        errorReporter.report(pointer, 'Type Validation failed', 'Business Model either be a string or number', arrayExpressionPointer);
        return
      }
  
      if(typeof model === 'string'){
        let objForModels : Array<string> = Object.values(EnumForBusinessModel)
          if(objForModels.indexOf(model) === -1){  
            errorReporter.report(pointer, 'Invalid Hashtag !!', 'Enered hashtag is not a valid one.', arrayExpressionPointer);   
          }
      }
    }
    return true
  }
})

declare module '@ioc:Adonis/Core/Validator' {
  interface Rules {
    doUpCase(): Rule
    doNameCase(): Rule
    doLowerCase(): Rule
    doSqlDate(): Rule
    emptyToNull(): Rule
    timePeiodForExperiances(): Rule
    uniqueUsername() : Rule
    verifyHashTags(tag_type : 'technology' | 'business_model') : Rule
  }
}
