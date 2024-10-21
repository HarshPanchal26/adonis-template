import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Industry from 'App/Models/Industry'

export default class extends BaseSeeder {

    public async run() {
        // Write your database queries inside the run method
        await Industry.createMany(
            [
                { industry: 'Technology', value: 'Technology'},
                { industry: 'Healthcare', value: 'Healthcare'},
                { industry: 'Finance', value: 'Finance'},
                { industry: 'Retail', value: 'Retail'},
                { industry: 'Licensing', value: 'Licensing'},
                { industry: 'Manufacturing', value: 'Manufacturing'},
                { industry: 'Energy', value: 'Energy'},
                { industry: 'Education', value: 'Education'},
                { industry: 'Media and Entertainment', value: 'Media and Entertainment'},
                { industry: 'Real Estate', value: 'Real Estate'},
                { industry: 'Transportation and Logistics', value: 'Transportation and Logistics'},
                { industry: 'Hospitality and Tourism', value: 'Hospitality and Tourism'},
                { industry: 'Professional Services', value: 'Professional Services'},
                { industry: 'Construction and Engineering', value: 'Construction and Engineering'},
                { industry: 'Telecommunications', value: 'Telecommunications'},
                { industry: 'Agriculture and Food', value: 'Agriculture and Food'},
                { industry: 'Nonprofit and Social Services', value: 'Nonprofit and Social Services'},
            ]
        )
    }
}
