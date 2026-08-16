// TeamData.js
// Uses imported URLs so your bundler (Vite/CRA/etc.) copies + hashes images for production.

import operationsLead from "../assets/teamPortraits/operationsLead.webp"

import captainJaden from "../assets/teamPortraits/captainJaden.webp"
import captainManorama from "../assets/teamPortraits/captainManorama.webp"
import payloadJonathan from "../assets/teamPortraits/payloadJonathan.webp"

import electricalWayne from "../assets/teamPortraits/electricalWayne.webp"
import electricalCohen from "../assets/teamPortraits/electricalCohen.webp"

import softwareMichael from "../assets/teamPortraits/softwareMichael.webp"

import adminGroup from "../assets/teamPhotos/admin.webp"
import aircraftGroup from "../assets/teamPhotos/aircraft.webp"
import payloadGroup from "../assets/teamPhotos/payload.webp"
import electricalGroup from "../assets/teamPhotos/electrical.webp"
import softwareGroup from "../assets/teamPhotos/software.webp"

export const teamData = [
  {
    title: "Admin Team",
    theme: "charcoal",
    members: [
      {
        heading: "Our Captain",
        name: "Jaden Chan",
        img: captainJaden,
        linkedinUrl: "https://www.linkedin.com/in/jaden-chan-748856216/",
      },
      {
        heading: "Our Captain",
        name: "Manorama Joshi",
        img: captainManorama,
        linkedinUrl: "https://www.linkedin.com/in/manoramajoshi/",
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
    title: "Aircraft Team",
    subtitle: "Co-Leads",
    theme: "teal",
    members: [
      {
        name: "Ryan Wang",
        linkedinUrl: "https://www.linkedin.com/in/ryan-wang-510716345/",
      },
    ],
    groupImg: aircraftGroup,
    caption:
      "Aircraft Team: Rylan Stutters, Rowan Campbell, Marnu Kritzinger, Marek Gryszka, Reynard Peetosutan, Zaheed Bhaiji , Vasily Balabin, Ryan Wang",
  },

  {
    title: "Payload Team",
    subtitle: "Co-Leads",
    theme: "charcoal",
    members: [
      {
        name: "Jonathan Chin",
        img: payloadJonathan,
        linkedinUrl: "https://www.linkedin.com/in/jonathankfchin-o7/",
      },
    ],
    groupImg: payloadGroup,
    caption:
      "Payload Team: Gina Choi, Dwight Dela Torre, Ryan Fan, Haruki Sakamaki, Inaya Merchant, Daniel Sunghyun Jin, Logan Neufield, Caroline Soffer, Jonathan Chin",
  },

  {
    title: "Electrical Team",
    subtitle: "Co-Leads",
    theme: "teal",
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
      "Electrical Team: Ethan Frketich, Issac Liu, Max Ovdiyenko, Ian Lee, Kelly He, Aidan McKay, Annie Sun, Wayne Sudanartha, Cohen Weston",
  },

  {
    title: "Software Team",
    subtitle: "Co-Leads",
    theme: "charcoal",
    members: [
      {
        name: "David Cui",
        linkedinUrl: "https://www.linkedin.com/in/jingyang-cui-b92040250/",
      },
      {
        name: "Michael Dickinson",
        img: softwareMichael,
        linkedinUrl: "https://www.linkedin.com/in/michael-r-dickinson/",
      },
    ],
    groupImg: softwareGroup,
    caption:
      "Software Team: Vittal Ayer, Yash Vasdev, Wilfred Chow, Anthony Lu, Anant Khanna, Athalia Setiawan, Sankalp Prashanth, Jason Staker, Sayyam Singla, David Cui, Michael Dickinson",
  },
]
