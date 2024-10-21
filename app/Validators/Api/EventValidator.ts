import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules, validator } from '@ioc:Adonis/Core/Validator'
import { EventMode } from 'Contracts/enum'

class CommonRules {
  public static commonSchema() {
    return {
      event_data : schema.object().members({
        name: schema.string({ trim: true }),
        start_time: schema.string({ trim: true }),
        end_time: schema.string({ trim: true }),
        time_zone: schema.string({ trim: true }),
        desc: schema.string({ trim: true }),
        category: schema.string({ trim: true }),
        is_event_hosted_by_company : schema.boolean(),
        has_unregistered_speakers : schema.boolean(),
        has_registered_speakers  : schema.boolean(),

        mode: schema.enum(Object.values(EventMode)),
        country: schema.string.nullableAndOptional({ trim: true }),
        state: schema.string.nullableAndOptional({ trim: true }),
        address: schema.string.nullableAndOptional({ trim: true }),
        website: schema.string.nullableAndOptional({ trim: true } , [rules.regex(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)]),
        broadcast_link: schema.string.nullableAndOptional({ trim: true }),
        unregistered_speakers : schema.array.nullableAndOptional().members(schema.object().members({
          name: schema.string(),
          bio: schema.string()
        })),
        business_id : schema.number.nullableAndOptional(),
        hashtag: schema.array.nullableAndOptional().members(schema.string()),
      }),
      registered_speakers : schema.array.optional().members(schema.number())
    }
  }

  public static schemaForEventCreation(): any {
    return this.commonSchema()
  }

  public static schemaUpdate(id: any): any {
    return {
      updated_event_data : schema.object().members({
        name: schema.string.optional({ trim: true }),
        start_time: schema.string.optional({ trim: true }),
        end_time: schema.string.optional({ trim: true }),
        time_zone: schema.string.optional({ trim: true }),
        desc: schema.string.optional({ trim: true }),
        category: schema.string.optional({ trim: true }),
        is_event_hosted_by_company : schema.boolean.optional(),
        has_unregistered_speakers : schema.boolean.optional(),
        has_registered_speakers  : schema.boolean.optional(),
        mode: schema.enum.optional(Object.values(EventMode)),
        country: schema.string.nullableAndOptional({ trim: true }),
        state: schema.string.nullableAndOptional({ trim: true }),
        address: schema.string.nullableAndOptional({ trim: true }),
        website: schema.string.nullableAndOptional({ trim: true } , [rules.regex(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/)]),
        broadcast_link: schema.string.nullableAndOptional({ trim: true }),
        business_id : schema.number.nullableAndOptional(),
        hashtag: schema.array.nullableAndOptional().members(schema.string()),  
        unregistered_speakers : schema.array.nullableAndOptional().members(schema.object().members({
          name: schema.string(),
          bio: schema.string()
        })),
      }),
      updated_registered_speakers : schema.array.optional().members(schema.number()),
      deleted_registered_speakers : schema.array.optional().members(schema.number())

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

  public schema = schema.create(CommonRules.schemaForEventCreation())

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
