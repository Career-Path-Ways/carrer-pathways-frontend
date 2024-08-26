import { requireNativeComponent } from 'react-native';

const jobListings = [
    {
      jobTitle: 'Chartered Accountant',
      companyLogo: require('./assets/images/ecobank_transnational_icon.jpeg.png'),
      companyName: 'Ecobank Ghana PLC',
      site: 'On-Site',
      location: 'Lapaz, Accra',
      amount: 'GH¢ 5,500 - GH¢ 8,000',
      duration: 'Full-time'
    },
    {
      jobTitle: 'Software Developer',
      companyLogo: require('./assets/images/gcbbankcomgh_logo.png.png'),
      companyName: 'TechFirm Inc.',
      site: 'Remote',
      location: 'Kumasi, Ashanti Region',
      amount: 'GH¢ 4,000 - GH¢ 7,000',
      duration: 'Full-time'
    },
    {
      jobTitle: 'Marketing Manager',
      companyLogo: require('./assets/images/cbg_logo.png.png'),
      companyName: 'MarketGuru Ltd.',
      site: 'Hybrid',
      location: 'East Legon, Accra',
      amount: 'GH¢ 6,000 - GH¢ 9,000',
      duration: 'Full-time'
    },
    {
      jobTitle: 'Human Resources Officer',
      companyLogo: require('./assets/images/ecobank_transnational_icon.jpeg.png'),
      companyName: 'HR Solutions',
      site: 'On-Site',
      location: 'Takoradi, Western Region',
      amount: 'GH¢ 3,500 - GH¢ 5,000',
      duration: 'Full-time'
    },
    {
      jobTitle: 'Graphic Designer',
      companyLogo: require('./assets/images/ecobank_transnational_icon.jpeg.png'),
      companyName: 'CreativeWorks Agency',
      site: 'Remote',
      location: 'Tema, Greater Accra',
      amount: 'GH¢ 2,500 - GH¢ 4,000',
      duration: 'Full-time'
    },
    {
      jobTitle: 'Financial Analyst',
      companyLogo: require('./assets/images/gcbbankcomgh_logo.png.png'),
      companyName: 'FinanceGroup Ltd.',
      site: 'On-Site',
      location: 'Osu, Accra',
      amount: 'GH¢ 5,000 - GH¢ 7,500',
      duration: 'Full-time'
    },
    {
      jobTitle: 'Customer Service Representative',
      companyLogo: require('./assets/images/cbg_logo.png.png'),
      companyName: 'SupportHub Co.',
      site: 'Hybrid',
      location: 'Cape Coast, Central Region',
      amount: 'GH¢ 2,000 - GH¢ 3,500',
      duration: 'Full-time'
    },
    {
      jobTitle: 'Project Manager',
      companyLogo: require('./assets/images/gcbbankcomgh_logo.png.png'),
      companyName: 'ProjectMasters Ltd.',
      site: 'On-Site',
      location: 'Tamale, Northern Region',
      amount: 'GH¢ 6,500 - GH¢ 10,000',
      duration: 'Full-time'
    },
    {
      jobTitle: 'Administrative Assistant',
      companyLogo: require('./assets/images/ecobank_transnational_icon.jpeg.png'),
      companyName: 'AdminPros LLC',
      site: 'On-Site',
      location: 'Sunyani, Bono Region',
      amount: 'GH¢ 2,200 - GH¢ 3,000',
      duration: 'Full-time'
    },
    {
      jobTitle: 'Sales Executive',
      companyLogo: require('./assets/images/cbg_logo.png.png'),
      companyName: 'SalesTeam Global',
      site: 'Hybrid',
      location: 'Ho, Volta Region',
      amount: 'GH¢ 3,000 - GH¢ 4,500',
      duration: 'Full-time'
    }
  ];
  
 export default jobListings 