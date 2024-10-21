import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import BusinessModel from 'App/Models/BusinessModel'

export default class extends BaseSeeder {

    public async run() {
        // Write your database queries inside the run method
        await BusinessModel.createMany(
            [
                { model: 'Subscription', value: 'Subscription'},
                { model: 'One-time Fee', value: 'One-time Fee'},
                { model: 'Freemium (Free with Premium Features)', value: 'Freemium '},
                { model: 'Pay-per-Use', value: 'Pay-per-Use'},
                { model: 'Licensing', value: 'Licensing'},
                { model: 'Donation-based/Crowdfunding', value: 'Crowdfunding'},
                { model: 'Ad-supported', value: 'Ad-supported'},
                { model: 'Tiered Pricing', value: 'Tiered Pricing'},
                { model: 'Custom Pricing', value: 'Custom Pricing'},
                { model: 'Revenue Sharing', value: 'Revenue Sharing'},
                { model: 'Free/None', value: 'Free/None'},
                { model: 'E-commerce', value: 'E-commerce'},
                { model: 'Hardware Sales', value: 'Hardware Sales'},
                { model: 'Membership', value: 'Membership'},
            ]
        )
    }
}
