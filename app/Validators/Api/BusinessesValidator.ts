import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules, validator } from '@ioc:Adonis/Core/Validator'

class CommonRules {
  public static commonSchema() {
    return {
      name: schema.string({ trim: true }, [rules.alpha({ allow: ['space'] })]),
      username: schema.string({ trim: true }, [rules.uniqueUsername()]),

      headline: schema.string.nullableAndOptional({ trim: true }),
      about: schema.string.nullableAndOptional({ trim: true }),
      email: schema.string.nullableAndOptional({ trim: true }, [rules.email(), rules.unique({ table: 'businesses', column: 'email' })]),
      speaks_about : schema.array.nullableAndOptional().members(schema.string()),
      // members : schema.number()
    }
  }

  public static schemaStore() {
    return this.commonSchema()
  }

  public static schemaUpdate(id) {
    return {
      basic_business_data : schema.object.optional().members({
        ...this.commonSchema(),

        name: schema.string.optional({ trim: true }, [rules.alpha({ allow: ['space'] })]),
        username: schema.string.optional({ trim: true }, [rules.uniqueUsername()]),
      })
      // investment_data : schema.object.optional().members({
      //   update_business_model : schema.array.optional().members(schema.number()),
      //   remove_business_model : schema.array.optional().members(schema.number()),
      //   updated_firm_type : schema.array.optional().members(schema.number()),
      //   updated_interested_business_type : schema.array.optional().members(schema.number()),
      //   removed_firm_type : schema.array.optional().members(schema.number()),
      //   removed_interested_business_type : schema.array.optional().members(schema.number()) )}
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
