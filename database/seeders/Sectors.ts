import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import SectorType from 'App/Models/SectorType'

export default class extends BaseSeeder {

    public async run() {
        // Write your database queries inside the run method
        await SectorType.createMany(
            [
                // Tecgnology
                {
                    sector: "Software Development",
                    value: "Software Development",
                    industry_id: 1
                },
                {
                    sector: "Hardware Manufacturing",
                    value: "Hardware Manufacturing",
                    industry_id: 1
                },
                {
                    sector: "Information Technology Services",
                    value: "Information Technology Services",
                    industry_id: 1
                },
                {
                    sector: "Internet and E-commerce",
                    value: "Internet and E-commerce",
                    industry_id: 1
                },
                {
                    sector: "Fintech",
                    value: "Fintech",
                    industry_id: 1
                },
                // Healthcare
                {
                    sector: "Pharmaceuticals",
                    value: "Pharmaceuticals",
                    industry_id: 2
                },
                {
                    sector: "Biotechnology",
                    value: "Biotechnology",
                    industry_id: 2

                },
                {
                    sector: "Health Services",
                    value: "Health Services",
                    industry_id: 2

                },
                {
                    sector: "Medical Devices and Equipment",
                    value: "Medical Devices and Equipment",
                    industry_id: 2

                },

                // Finance

                {
                    sector: "Banking",
                    value: "Banking",
                    industry_id: 3
                },
                {
                    sector: "Investment Management",
                    value: "Investment Management",
                    industry_id: 3

                },
                {
                    sector: "Insurance",
                    value: "Insurance",
                    industry_id: 3

                },
                {
                    sector: "Financial Technology (FinTech)",
                    value: "Financial Technology (FinTech)",
                    industry_id: 3

                },

                // Retail

                {
                    sector: "E-commerce",
                    value: "E-commerce",
                    industry_id: 4

                },
                {
                    sector: "Brick-and-mortar Retail",
                    value: "Brick-and-mortar Retail",
                    industry_id: 4

                },
                {
                    sector: "Consumer Goods",
                    value: "Consumer Goods",
                    industry_id: 4
                },

                // Licencing

                {
                    sector: "Entertainment and Media",
                    value: "Entertainment and Media",
                    industry_id: 5

                },
                {
                    sector: "Consumer Products",
                    value: "Consumer Products",
                    industry_id: 5

                },
                {
                    sector: "Technology and Software",
                    value: "Technology and Software",
                    industry_id: 5
                },
                {
                    sector: "Fashion and Apparel",
                    value: "Fashion and Apparel",
                    industry_id: 5
                },
                {
                    sector: "Food Licensing",
                    value: "Food Licensing",
                    industry_id: 5
                },
                {
                    sector: "Sports and Recreation",
                    value: "Sports and Recreation",
                    industry_id: 5
                },
                {
                    sector: "Health and Wellness",
                    value: "Health and Wellness",
                    industry_id: 5
                },
                {
                    sector: "Education and Publishing",
                    value: "Education and Publishing",
                    industry_id: 5
                },
                {
                    sector: "Corporate Branding and Partnerships",
                    value: "Corporate Branding and Partnerships",
                    industry_id: 5
                },

                // Manufacturing

                {
                    sector: "Automotive",
                    value: "Automotive",
                    industry_id: 6

                },
                {
                    sector: "Aerospace and Defense",
                    value: "Aerospace and Defense",
                    industry_id: 6

                },
                {
                    sector: "Electronics",
                    value: "Electronics",
                    industry_id: 6

                },
                {
                    sector: "Consumer Products",
                    value: "Consumer Products",
                    industry_id: 6

                },

                // Energy

                {
                    sector: "Oil and Gas",
                    value: "Oil and Gas",
                    industry_id: 7

                },
                {
                    sector: "Renewable Energy",
                    value: "Renewable Energy",
                    industry_id: 7

                },
                {
                    sector: "Utilities",
                    value: "Utilities",
                    industry_id: 7

                },

                //Education 

                {
                    sector: "Schools and Universities",
                    value: "Schools and Universities",
                    industry_id: 8

                },
                {
                    sector: "EdTech (Educational Technology)",
                    value: "EdTech (Educational Technology)",
                    industry_id: 8

                },
                {
                    sector: "Training and Development",
                    value: "Training and Development",
                    industry_id: 8

                },

                // Medaia 

                {
                    sector: "Broadcasting",
                    value: "Broadcasting",
                    industry_id: 9
                },
                {
                    sector: "Film and Television",
                    value: "Film and Television",
                    industry_id: 9
                },
                {
                    sector: "Gaming",
                    value: "Gaming",
                    industry_id: 9
                },
                {
                    sector: "Digital Media",
                    value: "Digital Media",
                    industry_id: 9
                },

                //Raal Estate 

                {
                    sector: "Residential",
                    value: "Residential",
                    industry_id: 10
                },
                {
                    sector: "Commercial",
                    value: "Commercial",
                    industry_id: 10

                },
                {
                    sector: "Property Management",
                    value: "Property Management",
                    industry_id: 10

                },
                {
                    sector: "Real Estate Development",
                    value: "Real Estate Development",
                    industry_id: 10

                },

                // Transportation and Logistics

                {
                    sector: "Airlines",
                    value: "Airlines",
                    industry_id: 11
                },
                {
                    sector: "Shipping and Freight",
                    value: "Shipping and Freight",
                    industry_id: 11

                },
                {
                    sector: "Logistics and Supply Chain Management",
                    value: "Logistics and Supply Chain Management",
                    industry_id: 11

                },

                // Hospitality and Tourism

                {
                    sector: "Hotels and Resorts",
                    value: "Hotels and Resorts",
                    industry_id: 12

                },
                {
                    sector: "Travel Agencies",
                    value: "Travel Agencies",
                    industry_id: 12

                },
                {
                    sector: "Restaurants and Food Services",
                    value: "Restaurants and Food Services",
                    industry_id: 12

                },


                // Professional Services

                {
                    sector: "Consulting",
                    value: "Consulting",
                    industry_id: 13

                },
                {
                    sector: "Legal Services",
                    value: "Legal Services",
                    industry_id: 13

                },
                {
                    sector: "Accounting and Auditing",
                    value: "Accounting and Auditing",
                    industry_id: 13

                },
                {
                    sector: "Marketing and Advertising",
                    value: "Marketing and Advertising",
                    industry_id: 13

                },


                // Construction and Engineering

                {
                    sector: "Civil Engineering",
                    value: "Civil Engineering",
                    industry_id: 14

                },
                {
                    sector: "Construction Services",
                    value: "Construction Services",
                    industry_id: 14

                },
                {
                    sector: "Architecture",
                    value: "Architecture",
                    industry_id: 14

                },
                {
                    sector: "Infrastructure Development",
                    value: "Infrastructure Development",
                    industry_id: 14

                },


                // Telecommunications

                {
                    sector: "Telecommunications Equipment",
                    value: "Telecommunications Equipment",
                    industry_id: 15

                },
                {
                    sector: "Wireless communication",
                    value: "Wireless communication",
                    industry_id: 15

                },
                {
                    sector: "Internet service providers",
                    value: "Internet service providers",
                    industry_id: 15

                },

                // Agriculture and Food


                {
                    sector: "Farming and agriculture",
                    value: "Farming and agriculture",
                    industry_id: 16

                },
                {
                    sector: "Food processing",
                    value: "Food processing",
                    industry_id: 16

                },
                {
                    sector: "Food distribution and retail",
                    value: "Food distribution and retail",
                    industry_id: 16

                },

                // Nonprofit and Social Services


                {
                    sector: "Charitable organizations",
                    value: "Charitable organizations",
                    industry_id: 17
                },
                {
                    sector: "Social advocacy groups",
                    value: "Social advocacy groups",
                    industry_id: 17

                },
                {
                    sector: "Humanitarian aid",
                    value: "Humanitarian aid",
                    industry_id: 17
                },









            ]
        )
    }
}
