import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FundingRound from 'App/Models/FundingRound'

export default class extends BaseSeeder {

    public async run() {
        // Write your database queries inside the run method
        await FundingRound.createMany(
            [
                {round: 'Pre-seed Funding' , value : 'Pre-seed' },
                {round: 'Seed Funding' , value : 'Seed' },
                {round: 'Series A' , value : 'Series A' },
                {round: 'Series B' , value : 'Series B' },
                {round: 'Series C' , value : 'Series C' },
                {round: 'Beyond Series C' , value : 'Beyond Series C' },
                {round: 'Bridge Rounds/Safe Notes' , value : 'Bridge Rounds'},
                {round: 'IPO' , value : 'IPO' },
            ]
        )
    }
}
