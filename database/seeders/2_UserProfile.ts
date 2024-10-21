import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import UserProfile from 'App/Models/UserProfile'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await UserProfile.createMany(
      [
        {
          userId : 1,
          about: 'A Developer',
          streets: '',
          city: 'Surat',
          state: 'Gujarat',
          country: 'India',
          portfolio_link: '',
          openForInvestments: false,          
        },
        {
          userId : 2,
          about: 'A CTO | Founder',
          streets: '',
          city: 'Jaipur',
          state: 'Rajasthan',
          country: 'India',
          portfolio_link: '',
          openForInvestments: true,
        }
      ]
    )
  }
}
