export enum EventMode  {
    ONLINE = 'online',
    OFFLINE = 'offline',
    BOTH = 'online/offline'
}


export enum EnumForUserType {
    USER = 'user',
    COMPANY = 'company',
    PRODUCT = 'product'
}

export enum AdminRoles {
    SUPER_ADMIN = 'Super-admin',
    ADMIN = 'Admin',
    MANAGER = 'Manager'
}

export enum EnumForTechnologies {
    AI = 'Artificial Intelligence',
    ML = 'Machine Learning',
    IoT = 'Internet of Things',
    BLOCKCHAIN = 'Blockchain',
    AR_VR = 'AR/VR',
    NLP = 'Natural Language Processing',
    CLOD_COMPUTING = 'Cloud Computing',
    BIG_DATA_ANALYTICS = 'Big Data Analytics',
    ROBOTICS = 'Robotics'
}

export enum EnumForBusinessModel  {
    SUBSCRIPTION = 'Subscription',
    ONE_TIME_FREE = 'One-time Fee',
    PAY_PER_USE = 'Pay-per-Use',
    FREEMIUM = 'Freemium',
    LICENSING = 'Licensing',
    DONATION_BASED = 'Donation-based',
    AD_SUPPORTED ='Ad-supported',
    TIERED_PRICING ='Tiered Pricing',
    CUSTOM_PRICING ='Custom Pricing',
    REVENUE_SHARING ='Revenue Sharing',
    MEMBERSHIP = 'Membership',
    FREE='Free',
    E_COMMERCE='E-commerce',
    SAAS='SaaS',
    MARKETPLACE='Marketplace',
    AFFILIATE_MARKETING='Affiliate Marketing',
 }

 export enum EnumForTaregtAudiences {
    B2B = 'B2B',
    B2C = 'B2C',
    B2B2C = 'B2B2C',
    C2C = 'C2C',
    D2C = 'D2C',
    PROFESSIONALS ='Professionals',
    DEVELOPERS = 'Developers',
    FINANCE = 'Finance',
    RETAILERS = 'Retail',
    EDUCATIONAL_INSTITUTIONS = 'Education Sector',
    HEALTHCARE_PROFESSIONALS='Healthcare Professionals',
    GOVERNMENT_AGENCIES = 'Government Agencies',
    NGOs = 'NGOs',
    SMEs = 'SMEs'
 }


export type UserType = EnumForUserType.COMPANY | EnumForUserType.PRODUCT | EnumForUserType.USER