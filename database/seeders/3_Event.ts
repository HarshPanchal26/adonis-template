import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Event from 'App/Models/Event'
import { EventMode } from 'Contracts/enum'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method

    await Event.createMany(
      [
        {
          userId : 1,
          name: 'Next step is GoAvido',
          startTime: '2024-02-26T15:30',
          endTime: '2024-02-26T17:30',
          timeZone: '(GMT+05:30) Indian Standard Time - Mumbai, New Delhi',
          desc: 'Discription is here.',
          category: 'Seminars/Conferences',
          mode: EventMode.OFFLINE,
    
          country: 'India',
          state: 'Gujarat',
          address: '256,Shree vardhan society,Parvat gam,Surat',
          website: 'https://goavido.com',
          broadcastLink: 'https://goavido.com',
          hasRegisteredSpeakers : false,
          isEventHostedByCompany : false,
          hasUnregisteredSpeakers : true,
          unregisteredSpeakers : [{"bio": "CEO of Rath ", "name": "Panchal Harsh "}]
          
        },
        {
          userId : 2,
          name: 'The Investment Game',
          startTime: '2024-02-29T01:00',
          endTime: '2024-02-29T03:00',
          timeZone: '(GMT+05:30) Indian Standard Time - Mumbai, New Delhi',
          desc: 'Discription is here.',
          category: 'Seminars/Conferences',
          mode: EventMode.OFFLINE,
    
          country: 'India',
          state: 'Gujarat',
          address: '256,Shree vardhan society,Parvat gam,Surat',
          website: 'https://goavido.com',
          broadcastLink: 'https://goavido.com',
          hasRegisteredSpeakers : false,
          isEventHostedByCompany : false,
          hasUnregisteredSpeakers : true,
          unregisteredSpeakers : [{"bio": "CEO of Divam ", "name": "Gaurav Sharma "}]
        }
      ]
    )
  }
}
