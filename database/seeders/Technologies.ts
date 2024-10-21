import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Technology from 'App/Models/Technology'

export default class extends BaseSeeder {

    public async run() {
        // Write your database queries inside the run method
        await Technology.createMany(
            [
                {technology: 'Artificial Intelligence (AI)' , value : 'Artificial Intelligence'},
                {technology: 'Machine Learning (ML)' , value : 'Machine Learning'},
                {technology: 'Internet of Things (IoT)' , value : 'Internet of Things'},
                {technology: 'Blockchain' , value : 'Blockchain'},
                {technology: 'Augmented / Virtual Reality (AR/VR)' , value : 'AR/VR'},
                {technology: 'Natural Language Processing (NLP)' , value : 'Natural Language Processing'},
                {technology: 'Cloud Computing' , value : 'Cloud Computing'},
                {technology: 'Big Data Analytics' , value : 'Big Data Analytics'},
                {technology: 'Robotics' , value : 'Robotics'},
            ]
        )
    }
}
