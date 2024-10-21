import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import DevelopmentStages from 'App/Models/DevelopmentStages'

export default class extends BaseSeeder {

    public async run() {
        // Write your database queries inside the run method
        await DevelopmentStages.createMany(
            [
                { stage: 'Concept/Planning', value: 'Planning' }, 
                { stage: 'Prototype/Proof of Concept', value: 'Prototype' }, 
                { stage: 'Alpha/Beta Testing', value: 'Testing' }, 
                { stage: 'Early Access', value: 'Early Access' }, 
                { stage: 'Pre-launch', value: 'Pre-launch' }, 
                { stage: 'Launched', value: 'Launched' },
                { stage: 'Active Development', value: 'Active Development' },
                { stage: 'Mature/Stable', value: 'Stable' },
                { stage: 'Legacy/End-of-life', value: 'Legacy' },
            ]
        )
    }
}
