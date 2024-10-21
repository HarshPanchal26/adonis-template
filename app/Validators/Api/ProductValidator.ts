import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules, validator } from '@ioc:Adonis/Core/Validator'
import { EnumForBusinessModel, EnumForTaregtAudiences, EnumForTechnologies } from 'Contracts/enum'

class CommonRules {
  public static commonSchema() {
    return { 
      product_data : schema.object().members({
        name: schema.string({ trim: true }),
        username: schema.string({ trim: true }, [rules.uniqueUsername()]),
        headline: schema.string({ trim: true }),
        industry: schema.string({ trim: true }),
        categories: schema.string({ trim: true }),
        about: schema.string({ trim: true }),
        development_stage: schema.string({ trim: true }),
        launch_date: schema.string.optional({ trim: true }),
        is_business_models_selected : schema.boolean(),
        is_target_audience_selected : schema.boolean(),
        is_technology_selected : schema.boolean(),
      }),
      // technology : schema.array.optional().members(schema.enum(Object.values(EnumForTechnologies))),
      // business_model: schema.array.optional().members(schema.enum(Object.values(EnumForBusinessModel))),
      // target_audience: schema.array.optional().members(schema.enum(Object.values(EnumForTaregtAudiences))),

      technology : schema.array().members(schema.number()),
      business_model: schema.array().members(schema.number()),
      target_audience: schema.array().members(schema.number()),
    }
  }

  public static schemaStore() {
    return this.commonSchema()
  }

  public static schemaUpdate(id) {
    return {
      product_data : schema.object.optional().members({
        name: schema.string.optional({ trim: true }),
        username: schema.string.optional({ trim: true }, [rules.uniqueUsername()]),
        headline: schema.string.optional({ trim: true }),
        industry: schema.string.optional({ trim: true }),
        categories: schema.string.optional({ trim: true }),
        about: schema.string.optional({ trim: true }),
        development_stage: schema.string.optional({ trim: true }),
        launch_date: schema.string.optional({ trim: true }),
        is_business_models_selected : schema.boolean.optional(),
        is_target_audience_selected : schema.boolean.optional(),
        is_technology_selected : schema.boolean.optional(),
      }),
      technology : schema.array.optional().members(schema.number()),
      business_model: schema.array.optional().members(schema.number()),
      target_audience: schema.array.optional().members(schema.number()),

      remove_technology : schema.array.optional().members(schema.number()),
      remove_business_model: schema.array.optional().members(schema.number()),
      remove_target_audience: schema.array.optional().members(schema.number()),
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
