import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import FirmType from 'App/Models/FirmType'

export default class extends BaseSeeder {

    public async run() {
        // Write your database queries inside the run method
        await FirmType.createMany(
            [
                {firm: 'Venture Capital Firm' , value : 'Venture Capital Firm'},
                {firm: 'Private Equity Firm' , value : 'Private Equity Firm' },
                {firm: 'Corporate Venture Capital (CVC)' , value : 'Corporate Venture Capital'},
                {firm: 'Angel Investment Network' , value : 'Angel Investment Network' },
                {firm: 'Family Office' , value : 'Family Office'},
                {firm: 'Hedge Fund' , value : 'Hedge Fund'},
                {firm: 'Investment Bank' , value : 'Investment Bank'},
                {firm: 'Accelerator/Incubator' , value : 'Accelerator/Incubator'},
                {firm: 'Pension Fund' , value : 'Pension Fund'},
                {firm: 'Sovereign Wealth Fund' , value : 'Sovereign Wealth Fund'},
            ]
        )
    }
}
