import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import InvestorType from 'App/Models/InvestorType'

export default class extends BaseSeeder {

    public async run() {
        // Write your database queries inside the run method
        await InvestorType.createMany(
            [
                {investor: 'Angel Investor' , value : 'Angel Investor' },
                {investor: 'Venture Capitalist (VC)' , value : 'Venture Capitalist' },
                {investor: 'Privet Investor' , value : 'Privet Investor' },
                {investor: 'High Net Worth Individual (HNWI)' , value : 'High Net Worth Individual' },
                {investor: 'Family Office Representative' , value : 'Family Office Representative' },
                {investor: 'Crowdfunding Backer' , value : 'Crowdfunding Backer' },
                {investor: 'Angel Syndicate Member' , value : 'Angel Syndicate Member'},
                {investor: 'Startup Enthusiast' , value : 'Startup Enthusiast' },
                {investor: 'Retired Entrepreneur' , value : 'Retired Entrepreneur' },
                {investor: 'Financial Advisor' , value : 'Financial Advisor'},
            ]
        )
    }
}
