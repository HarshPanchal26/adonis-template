import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules, validator } from '@ioc:Adonis/Core/Validator'

class CommonRules {
  public static commonSchema() {
    return {
      investor : schema.string({ trim: true }, [rules.unique({ table: 'investor_types', column: 'investor' })]),
      value : schema.string({ trim: true }, [rules.unique({ table: 'investor_types', column: 'value' })]),
    }
  }

  public static schemaStore() {
    return this.commonSchema()
  }

  public static schemaUpdate(id) {
    return {
      ...this.commonSchema(),
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
