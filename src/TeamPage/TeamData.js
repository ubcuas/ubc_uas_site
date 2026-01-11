// TeamData.js
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
    title: "Admin Team",
    theme: "charcoal",
    members: [
      { heading: "Our Captain", name: "Rylan Stutters", img: captain, linkedinUrl: "https://www.linkedin.com/in/rylan-stutters-4b1a9a289/" },
      { heading: "Operations", name: "Ethan Frketich", img: operationsLead, linkedinUrl: "https://www.linkedin.com/in/ethanfrk/" },
    ],
    groupImg: adminGroup,
    caption: "Admin Team: ...",
  },
  {
    title: "Aircraft Team",
    subtitle: "Co-Leads",
    theme: "teal",
    members: [
      { name: "Sean Lee", img: aircraftSean, linkedinUrl: "https://www.linkedin.com/in/seanhlee411/" },
      { name: "Vasily Balabin", img: aircraftVasily, linkedinUrl: "https://www.linkedin.com/in/vasily-balabin-32ab562a1/" },
    ],
    groupImg: aircraftGroup,
    caption: "Aircraft Team: ...",
  },
  {
    title: "Payload Team",
    subtitle: "Co-Leads",
    theme: "charcoal",
    members: [
      { name: "Jaden Chan", img: payloadJaden, linkedinUrl: "https://www.linkedin.com/in/jaden-chan-748856216/" },
      { name: "Jason Yuan", img: payloadJason, linkedinUrl: "https://www.linkedin.com/in/jyuan10/" },
    ],
    groupImg: payloadGroup,
    caption: "Payload Team: ...",
  },
  {
    title: "Electrical Team",
    subtitle: "Co-Leads",
    theme: "teal",
    members: [
      { name: "Wayne Sudanartha", img: electricalWayne, linkedinUrl: "https://www.linkedin.com/in/waynesdn/" },
      { name: "Cohen Weston", img: electricalCohen, linkedinUrl: "https://www.linkedin.com/in/cohen-weston/" },
    ],
    groupImg: electricalGroup,
    caption: "Electrical Team: ...",
  },
  {
    title: "Software Team",
    subtitle: "Co-Leads",
    theme: "charcoal",
    members: [
      { name: "Mercury Mcindoe", img: softwareMercury, linkedinUrl: "https://www.linkedin.com/in/maplesyruphg06/" },
      { name: "Ram Jayakumar", img: softwareRam, linkedinUrl: "https://www.linkedin.com/in/ram-jayakumar-2a096420b/" },
    ],
    groupImg: softwareGroup,
    caption: "Software Team: ...",
  },
];
