import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import TargetAudience from 'App/Models/TargetAudience'

export default class extends BaseSeeder {

    public async run() {
        // Write your database queries inside the run method
        await TargetAudience.createMany(
            [
                { audience: 'Business to Businesses(B2B)', value: 'B2B' },
                { audience: 'Business to Consumers(B2C)', value: 'B2C' }, 
                { audience: 'Business to Business to Consumer(B2B2C)', value: 'B2B2C' }, 
                { audience: 'Consumer to Consumer (C2C)', value: 'C2C' }, 
                { audience: 'Direct to Consumer (D2C)', value: 'D2C' }, 
                { audience: 'Professionals', value: 'Professionals' }, 
                { audience: 'Developers', value: 'Developers' },
                { audience: 'Finance', value: 'Finance' },
                { audience: 'Retailers and E-commerce', value: 'Retail' },
                { audience: 'Educational Institutions and Students', value: 'Education Sector' },
                { audience: 'Healthcare Professionals', value: 'Healthcare Professionals' },
                { audience: 'Government Agencies', value: 'Government Agencies' },
                { audience: 'Nonprofit Organizations (NGOs)', value: 'Nonprofit Organizations' },
                { audience: 'Creative Professionals', value: 'Creative Professionals' },
                { audience: 'Small and Medium Enterprises (SMEs)', value: 'Small and Medium Enterprises' },
            ]
        )
    }
}
