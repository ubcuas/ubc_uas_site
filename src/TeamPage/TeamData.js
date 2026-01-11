// TeamData.js
// Uses imported URLs so your bundler (Vite/CRA/etc.) copies + hashes images for production.

import captain from "../assets/teamPortraits/captain.png";
import operationsLead from "../assets/teamPortraits/operationsLead.jpg";

import aircraftSean from "../assets/teamPortraits/aircraftSean.jpg";
import aircraftVasily from "../assets/teamPortraits/aircraftVasily.png";

import payloadJaden from "../assets/teamPortraits/payloadJaden.jpg";
import payloadJason from "../assets/teamPortraits/payloadJason.jpg";

import electricalWayne from "../assets/teamPortraits/electricalWayne.jpg";
import electricalCohen from "../assets/teamPortraits/electricalCohen.jpg";

import softwareMercury from "../assets/teamPortraits/softwareMercury.jpg";
import softwareRam from "../assets/teamPortraits/softwareRam.jpg";

import adminGroup from "../assets/teamPhotos/admin.jpg";
import aircraftGroup from "../assets/teamPhotos/aircraft.jpg";
import payloadGroup from "../assets/teamPhotos/payload.jpg";
import electricalGroup from "../assets/teamPhotos/electrical.jpg";
import softwareGroup from "../assets/teamPhotos/software.jpg";

export const teamData = [
  {
    title: 'Admin Team',
    theme: 'charcoal',
    members: [
      {
        heading: "Our Captain",
        name: "Rylan Stutters",
        img: captain,
        linkedinUrl: "https://www.linkedin.com/in/rylan-stutters-4b1a9a289/",
      },
      {
        heading: "Operations",
        name: "Ethan Frketich",
        img: operationsLead,
        linkedinUrl: "https://www.linkedin.com/in/ethanfrk/",
      },
    ],
    groupImg: adminGroup,
    caption:
      "Admin Team: Vittal Ayer, Vasily Balabin, Aden Chan, Jaden Chan, Jonathan Chin, Ethan Frketich, Diego Islas, Ram Jayakumar, Leon Jiang, Manorama Joshi, Sean Lee, Olivia Lew, Amy Li, Yash Mali, Mercury McIndoe, Logan Neufield, Matthew Pirayesh, Rylan Stutters, Wayne Sudanartha, Ryan Wang, Cohen Weston, Nicholas Yap, Jason Yuan",
  },

  {
    title: 'Aircraft Team',
    subtitle: 'Co-Leads',
    theme: 'teal',
    members: [
      {
        name: "Sean Lee",
        img: aircraftSean,
        linkedinUrl: "https://www.linkedin.com/in/seanhlee411/",
      },
      {
        name: "Vasily Balabin",
        img: aircraftVasily,
        linkedinUrl: "https://www.linkedin.com/in/vasily-balabin-32ab562a1/",
      },
    ],
    groupImg: aircraftGroup,
    caption:
      "Aircraft Team: Vasily Balabin, Rowan Campbell, Grace Dauer, Marek Gryszka, Hyunmyung Lee, Kevin Ma, Arman Mukhi, Matthew Pirayesh, Anshul Raj, Ryan Wang, Nicholas Yap",
  },

  {
    title: 'Payload Team',
    subtitle: 'Co-Leads',
    theme: 'charcoal',
    members: [
      {
        name: "Jaden Chan",
        img: payloadJaden,
        linkedinUrl: "https://www.linkedin.com/in/jaden-chan-748856216/",
      },
      {
        name: "Jason Yuan",
        img: payloadJason,
        linkedinUrl: "https://www.linkedin.com/in/jyuan10/",
      },
    ],
    groupImg: payloadGroup,
    caption:
      "Payload Team: Jaden Chan, Jonathan Chin, Yik Chun Choi, Dwight Dela Torre, Ryan Fan, Daniel Jin, Manorama Joshi, Inaya Merchant, Logan Neufield, Annie Sun, Jason Yuan",
  },

  {
    title: 'Electrical Team',
    subtitle: 'Co-Leads',
    theme: 'teal',
    members: [
      {
        name: "Wayne Sudanartha",
        img: electricalWayne,
        linkedinUrl: "https://www.linkedin.com/in/waynesdn/",
      },
      {
        name: "Cohen Weston",
        img: electricalCohen,
        linkedinUrl: "https://www.linkedin.com/in/cohen-weston/",
      },
    ],
    groupImg: electricalGroup,
    caption:
      "Electrical Team: Ethan Frketich, Kelly He, Ian Lee, Olivia Lew, Amy Li, Wayne Sudanartha, Cohen Weston",
  },

  {
    title: 'Software Team',
    subtitle: 'Co-Leads',
    theme: 'charcoal',
    members: [
      {
        name: "Mercury Mcindoe",
        img: softwareMercury,
        linkedinUrl: "https://www.linkedin.com/in/maplesyruphg06/",
      },
      {
        name: "Ram Jayakumar",
        img: softwareRam,
        linkedinUrl: "https://www.linkedin.com/in/ram-jayakumar-2a096420b/",
      },
    ],
    groupImg: softwareGroup,
    caption:
      "Software Team: Vittal Ayer, Chaitanya Choudhary, Wilfred Chow, Jingyang Cui, Michael Dickinson, Justin Hoang, Diego Islas, Ram Jayakumar, Anant Khanna, JunHyun Kim, Louis Lin, Anthony Lu, Yash Mali, Mercury McIndoe, Aniket Nemade, Minori Poedjokerto, Sankalp Prashanth, Harun Sameer, Athalia Setiawan, Sayyam Singla, Jason Staker, Yash Vasdev, Elsa Zheng",
  },
]
