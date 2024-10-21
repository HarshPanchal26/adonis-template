import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    await User.createMany([
      {
        firstName: 'Harsh',
        lastName : 'Panchal',
        username: 'harsh.panchal',
        email: 'harsh@gmail.com',
        password: 'qwerty',
        countryCode: '+91',
        mobileNumber: '8980995245',
        headline: 'Developer | Founder',
      },
      {
        firstName: 'Gaurav',
        lastName : 'Sharma',
        username: 'g.sharma',
        email: 'er.gauravds@gmail.com',
        password: 'qwerty',
        countryCode: '+91',
        mobileNumber: '3380995245',
        headline: 'CTO at Divam | Founder at Go Avido',
      },
    ])
  }
}
