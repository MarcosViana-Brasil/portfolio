
import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
import { MdDeveloperMode } from 'react-icons/md'
import { SiJava, SiJavascript, SiReact, SiNodeDotJs, SiDart, SiFigma, SiAdobephotoshop, SiAdobeillustrator } from 'react-icons/si'
import { FiDatabase } from 'react-icons/fi'

import { IService, ISkill } from './type'


export const services:IService[] =[
  {
    title: 'Q&A Automation Developer',
    about: 'I can build a scalable test codes using <b>Java</b> and <b>Javascript</b>',
    Icon: AiOutlineApi
  },
  {
    title: 'Frontend Developer',
    about: 'I can build a beautiful and scalable SPA using <b>HTML</b>, <b>CSS</b> and <b>React.js</b>',
    Icon: RiComputerLine
  },
  {
    title: 'Backend Developer',
    about: 'handle database, server, api using <b>Express </b> & other popular frameworks',
    Icon: FaServer
  },
  {
    title: 'API Developer',
    about: 'I can develop robust REST API using <b>Java</b> & <b>Node API</b>',
    Icon: FaServer
  },
  {
    title: 'Mobile Developer',
    about: 'I can build a beautiful and Mobile App in <b>React Native</b> and <b>Flutter</b>',
    Icon: MdDeveloperMode
  },  
  {
    title: 'UI/UX Designer',
    about: 'stunning user interface designer using <b>Figma</b>',
    Icon: MdDeveloperMode
  },
]

export const languages:ISkill[] = [
  {
    name: 'Java',
    level: '75%',
    Icon: SiJava
  },
  {
    name: 'Javascript',
    level: '80%',
    Icon: SiJavascript
  },
  {
    name: 'Dart',
    level: '50%',
    Icon: SiDart
  },
  {
    name: 'PLSQL',
    level: '70%',
    Icon: FiDatabase
  },
]

export const tools:ISkill[] = [
  {
    name: 'Photoshop',
    level: '55%',
    Icon: SiAdobephotoshop
  },  
  {
    name: 'Illustrator',
    level: '40%',
    Icon: SiAdobeillustrator
  },
  {
    name: 'Figma',
    level: '50%',
    Icon: SiFigma
  },
]
