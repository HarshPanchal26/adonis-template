import Hash from '@ioc:Adonis/Core/Hash'
import { column, beforeSave, hasMany, HasMany, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Base from 'App/Models/Base'

export default class User extends Base {
  @column()
  public firstName: string

  @column()
  public lastName: string

  @column()
  public imageUrl: string | null

  @column()
  public email: string

  @column()
  public username: string

  @column()
  public gender: 'Male' | 'Female'

  @column()
  public stage: 'Conceive' | 'Parent' | 'other'

  @column()
  public headline: string | null

  @column({ serializeAs: null })
  public password: string

  @column()
  public countryCode: string

  @column()
  public mobileNumber: string

  @column({ serializeAs: null })
  public isEmailVerify: boolean

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
