// TeamData.js
// Uses imported URLs so your bundler (Vite/CRA/etc.) copies + hashes images for production.

import operationsLead from "../assets/teamPortraits/operationsLead.webp"

import captainJaden from "../assets/teamPortraits/captainJaden.webp"
import captainManorama from "../assets/teamPortraits/captainManorama.webp"
import payloadJonathan from "../assets/teamPortraits/payloadJonathan.webp"

import electricalWayne from "../assets/teamPortraits/electricalWayne.webp"
import electricalCohen from "../assets/teamPortraits/electricalCohen.webp"
import adminRyan from "../assets/teamPortraits/adminRyan.webp"
import aircraftRyanWang from "../assets/teamPortraits/aircraftRyanWang.webp"

import softwareMichael from "../assets/teamPortraits/softwareMichael.webp"
import softwareDavid from "../assets/teamPortraits/softwareDavid.webp"

import adminGroup from "../assets/teamPhotos/admin.webp"
import aircraftGroup from "../assets/teamPhotos/aircraft.webp"
import payloadGroup from "../assets/teamPhotos/payload.webp"
import electricalGroup from "../assets/teamPhotos/electrical.webp"
import softwareGroup from "../assets/teamPhotos/software.webp"

export const teamData = [
  {
    title: "Admin Team",
    theme: "charcoal",
    groups: [
      {
        heading: "Our Captains",
        members: [
          {
            name: "Jaden Chan",
            img: captainJaden,
            linkedinUrl: "https://www.linkedin.com/in/jaden-chan-748856216/",
          },
          {
            name: "Manorama Joshi",
            img: captainManorama,
            linkedinUrl: "https://www.linkedin.com/in/manoramajoshi/",
          },
        ],
      },
    ],
    members: [
      {
        name: "Ethan Frketich",
        heading: "Operations",
        img: operationsLead,
        linkedinUrl: "https://www.linkedin.com/in/ethanfrk/",
      },
      {
        name: "Ryan Vanlerberg-Gargus",
        heading: "Admin Lead",
        img: adminRyan,
        linkedinUrl: "https://www.linkedin.com/in/ryan-vg/",
      },
    ],
    groupImg: adminGroup,
    caption:
      "Admin Team: Cohen Weston, Ethan Frketich, Jaden Chan, Jingyang Cui, Jonathan Chin, Manorama Joshi, Michael Dickinson, Ryan Vanlerberg-Gargus, Ryan Wang, Wayne Sudanartha",
  },

  {
    title: "Payload Team",
    subtitle: "Lead",
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
      "Payload Team: Andrew Dick, Artina Rashidzadeh, Caroline Soffer, Daniel Sunghyun Jin, Dwight Dela Torre, Gina Choi, Haruki Sakamaki, Inaya Merchant, Jonathan Chin, Logan Neufield, Olivia Lopez, Ryan Fan, Ryan Ji",
  },

  {
    title: "Electrical Team",
    subtitle: "Co-Leads",
    theme: "teal",
    members: [
      {
        name: "Cohen Weston",
        img: electricalCohen,
        linkedinUrl: "https://www.linkedin.com/in/cohen-weston/",
      },
      {
        name: "Wayne Sudanartha",
        img: electricalWayne,
        linkedinUrl: "https://www.linkedin.com/in/waynesdn/",
      },
    ],
    groupImg: electricalGroup,
    caption:
      "Electrical Team: Aidan McKay, Annie Sun, Cohen Weston, Ethan Frketich, Ian Lee, Issac Liu, Kelly He, Max Ovdiyenko, Wayne Sudanartha",
  },

  {
    title: "Aircraft Team",
    subtitle: "Lead",
    theme: "teal",
    members: [
      {
        name: "Ryan Wang",
        img: aircraftRyanWang,
        linkedinUrl: "https://www.linkedin.com/in/ryan-wang-510716345/",
      },
    ],
    groupImg: aircraftGroup,
    caption:
      "Aircraft Team: Alisha Jamal, Hugo Knitter, Lauren Luksay, Marek Gryszka, Marnu Kritzinger, Reynard Peetosutan, Rowan Campbell, Ryan Wang, Rylan Stutters, Vasily Balabin, Zaheed Bhaiji",
  },

  {
    title: "Software Team",
    subtitle: "Co-Leads",
    theme: "charcoal",
    members: [
      {
        img: softwareDavid,
        name: "Jingyang Cui",
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
      "Software Team: Anant Khanna, Anthony Lu, Apoorva Devarakonda, Athalia Setiawan, Brian Tian, Eric Chen, Gurnek Sandhu, Jason Staker, Jingyang Cui, Lana Nakai, Louis Dod, Michael Dickinson, Nicholas Huang, Nitish Joson Terance Joe Heston, Ryan Park, Sankalp Prashanth, Sayyam Singla, Vikram Dutt, Vittal Ayer, Wilfred Chow, Yash Vasdev",
  },
]
