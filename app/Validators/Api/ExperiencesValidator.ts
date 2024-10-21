import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules, validator } from '@ioc:Adonis/Core/Validator'

class CommonRules {
  public static commonSchema() {
    return {
        job_title : schema.string({ trim: true }),
        employment_type : schema.string({ trim: true }),
        start_time : schema.string({ trim: true }),
        currently_working : schema.boolean([rules.timePeiodForExperiances()]), 
        is_business_registered : schema.boolean(), 
        
        business_id : schema.number.nullableAndOptional([ rules.unsigned()]),
        end_time : schema.string.nullableAndOptional({ trim: true }),
        business_name : schema.string.nullableAndOptional({ trim: true }, [rules.alpha({ allow: ['space'] }), rules.regex(/[a-zA-Z0-9\s?/]+/)]),
        location : schema.string.nullableAndOptional({ trim: true }, [rules.alpha({ allow: ['space'] }), rules.regex(/[a-zA-Z0-9\s?/]+/)]),
      }

    }
    
  public static schemaStore() {
    return this.commonSchema()
  }

  public static schemaUpdate(id) {
    return {
      ...this.commonSchema(),
      job_title : schema.string.optional({ trim: true }),
      employment_type : schema.string.optional({ trim: true }),
      start_time : schema.string.optional({ trim: true }),
      currently_working : schema.boolean.optional(), 
      is_business_registered : schema.boolean.optional(), 
    }
  }

  public static commonMessages() {
    return {}
  }

  public static messagesStore() {
    return this.commonMessages()
  }

  public static messagesUpdate() {
    return this.commonMessages()
  }
}

class Store {
  constructor(protected ctx: HttpContextContract) { }

  public schema = schema.create(CommonRules.schemaStore())

  public reporter = validator.reporters.api

  public messages = CommonRules.messagesStore()
}


class Update {
  constructor(protected ctx: HttpContextContract) { }

  public refs = schema.refs({
    id: this.ctx.params.id
  })

  public schema = schema.create(CommonRules.schemaUpdate(this.refs.id))

  public reporter = validator.reporters.api

  public messages = CommonRules.messagesUpdate()
}

export default { CommonRules, Store, Update }
