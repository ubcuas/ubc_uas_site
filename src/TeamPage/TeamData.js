const imageUrl = (path) => new URL(path, import.meta.url).href

export const teamData = [
  {
    title: 'Admin Team',
    theme: 'charcoal',
    members: [
      {
        heading: 'Our Captain',
        name: 'Rylan Stutters',
        img: imageUrl('../assets/teamPortraits/captain.png'),
        linkedinUrl: 'https://www.linkedin.com/in/rylan-stutters-4b1a9a289/',
      },
      {
        heading: 'Operations',
        name: 'Ethan Frketich',
        img: imageUrl('../assets/teamPortraits/operationsLead.jpg'),
        linkedinUrl: 'https://www.linkedin.com/in/ethanfrk/',
      },
    ],
    groupImg: imageUrl('../assets/teamPhotos/admin.jpg'),
    caption:
      'Admin Team: Vittal Ayer, Vasily Balabin, Aden Chan, Jaden Chan, Jonathan Chin, Ethan Frketich, Diego Islas, Ram Jayakumar, Leon Jiang, Manorama Joshi, Sean Lee, Olivia Lew, Amy Li, Yash Mali, Mercury McIndoe, Logan Neufield, Matthew Pirayesh, Rylan Stutters, Wayne Sudanartha, Ryan Wang, Cohen Weston, Nicholas Yap, Jason Yuan',
  },

  {
    title: 'Aircraft Team',
    subtitle: 'Co-Leads',
    theme: 'teal',
    members: [
      {
        name: 'Sean Lee',
        img: imageUrl('../assets/teamPortraits/aircraftSean.jpg'),
        linkedinUrl: 'https://www.linkedin.com/in/seanhlee411/',
      },
      {
        name: 'Vasily Balabin',
        img: imageUrl('../assets/teamPortraits/aircraftVasily.png'),
        linkedinUrl: 'https://www.linkedin.com/in/vasily-balabin-32ab562a1/',
      },
    ],
    groupImg: imageUrl('../assets/teamPhotos/aircraft.jpg'),
    caption:
      'Aircraft Team: Vasily Balabin, Rowan Campbell, Grace Dauer, Marek Gryszka, Hyunmyung Lee, Kevin Ma, Arman Mukhi, Matthew Pirayesh, Anshul Raj, Ryan Wang, Nicholas Yap',
  },
  {
    title: 'Payload Team',
    subtitle: 'Co-Leads',
    theme: 'charcoal',
    members: [
      {
        name: 'Jaden Chan',
        img: imageUrl('../assets/teamPortraits/payloadJaden.jpg'),
        linkedinUrl: 'https://www.linkedin.com/in/jaden-chan-748856216/',
      },
      {
        name: 'Jason Yuan',
        img: imageUrl('../assets/teamPortraits/payloadJason.jpg'),
        linkedinUrl: 'https://www.linkedin.com/in/jyuan10/',
      },
    ],
    groupImg: imageUrl('../assets/teamPhotos/payload.jpg'),
    caption:
      'Payload Team: Jaden Chan, Jonathan Chin, Yik Chun Choi, Dwight Dela Torre, Ryan Fan, Daniel Jin, Manorama Joshi, Inaya Merchant, Logan Neufield, Annie Sun, Jason Yuan',
  },
  {
    title: 'Electrical Team',
    subtitle: 'Co-Leads',
    theme: 'teal',
    members: [
      {
        name: 'Wayne Sudanartha',
        img: imageUrl('../assets/teamPortraits/electricalWayne.jpg'),
        linkedinUrl: 'https://www.linkedin.com/in/waynesdn/',
      },
      {
        name: 'Cohen Weston',
        img: imageUrl('../assets/teamPortraits/electricalCohen.jpg'),
        linkedinUrl: 'https://www.linkedin.com/in/cohen-weston/',
      },
    ],
    groupImg: imageUrl('../assets/teamPhotos/electrical.jpg'),
    caption:
      'Electrical Team: Ethan Frketich, Kelly He, Ian Lee, Olivia Lew, Amy Li, Wayne Sudanartha, Cohen Weston',
  },
  {
    title: 'Software Team',
    subtitle: 'Co-Leads',
    theme: 'charcoal',
    members: [
      {
        name: 'Mercury Mcindoe',
        img: imageUrl('../assets/teamPortraits/softwareMercury.jpg'),
        linkedinUrl: 'https://www.linkedin.com/in/maplesyruphg06/',
      },
      {
        name: 'Ram Jayakumar',
        img: imageUrl('../assets/teamPortraits/softwareRam.jpg'),
        linkedinUrl: 'https://www.linkedin.com/in/ram-jayakumar-2a096420b/',
      },
    ],
    groupImg: imageUrl('../assets/teamPhotos/software.jpg'),
    caption:
      'Software Team: Vittal Ayer, Chaitanya Choudhary, Wilfred Chow, Jingyang Cui, Michael Dickinson, Justin Hoang, Diego Islas, Ram Jayakumar, Anant Khanna, JunHyun Kim, Louis Lin, Anthony Lu, Yash Mali, Mercury McIndoe, Aniket Nemade, Minori Poedjokerto, Sankalp Prashanth, Harun Sameer, Athalia Setiawan, Sayyam Singla, Jason Staker, Yash Vasdev, Elsa Zheng',
  },
]
  
