import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules, validator } from '@ioc:Adonis/Core/Validator'
import AuthValidator from 'App/Validators/Api/AuthValidator'


class CommonRules {
  public static commonSchema() {
    return {

      about: schema.string.nullableAndOptional({ trim: true }),
      streets: schema.string.nullableAndOptional({ trim: true }),
      city: schema.string.nullableAndOptional({ trim: true }),
      state: schema.string.nullableAndOptional({ trim: true }),
      country: schema.string.nullableAndOptional({ trim: true }),
      portfolio: schema.string.nullableAndOptional({ trim: true }),
      // additionalLinks: schema.array.optional().members(schema.string()),
      // openForInvestments: schema.boolean.optional(),
      // interestedInvestmentType: schema.array.optional().members(schema.string()),
      // lookigForFunds: schema.boolean.optional(),
      // requiresInvestmentType: schema.array.optional().members(schema.string()),
      // dob: schema.string.optional({ trim: true }),
    }
  }

  public static schemaStore() {
    return this.commonSchema()
  }

  public static schemaUpdate(id) {
    return {
      updated_user_data : schema.object.optional().members({
        ...AuthValidator.CommonRules.schemaUpdate(id)
      }),
      updated_profile_data : schema.object.optional().members({
        about: schema.string.nullableAndOptional({ trim: true }),
        streets: schema.string.nullableAndOptional({ trim: true }),
        city: schema.string.nullableAndOptional({ trim: true }),
        state: schema.string.nullableAndOptional({ trim: true }),
        country: schema.string.nullableAndOptional({ trim: true }),
        portfolio_link: schema.string.nullableAndOptional({ trim: true }),
        // open_for_investments: schema.boolean.optional(),
        dob: schema.string.optional({ trim: true }),
      }),
      update_investor_type : schema.array.optional().members(schema.number()),
      updated_interested_industry_type : schema.array.optional().members(schema.number()),
      removed_investor_type : schema.array.optional().members(schema.number()),
      removed_interested_industry_type : schema.array.optional().members(schema.number())

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
