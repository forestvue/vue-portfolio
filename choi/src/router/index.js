import Vue from 'vue'
import Router from 'vue-router'

import Portfolio from '../views/Portfolio'
import Skills from '../views/Skills'
import Main from '../common/Main'
import Contact from '../views/Contact'
import BeatlesCode from '../views/PortfolioComponent/BeatlesCode'
import AlpaWeb from '../views/PortfolioComponent/AlpaWeb'
import BoostcourseAce2th from '../views/PortfolioComponent/BoostcourseAce2th'
import CodeIgniterWebService from '../views/PortfolioComponent/CodeIgniterWebService'
import Hy3dSmartDistribution from '../views/PortfolioComponent/Hy3dSmartDistribution'
import HycubeWebSerivce from '../views/PortfolioComponent/HycubeWebSerivce'
import NamYangMinusZ from '../views/PortfolioComponent/NamYangMinusZ'
import Basic from '../views/PortfolioComponent/Basic'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/portfolio',
      component: Portfolio,
      children: [
        {
          path: '',
          name: 'Basic',
          component: Basic
        },
        {
          path: 'Alpa-web',
          name: 'Alpa-web',
          component: AlpaWeb
        },
        {
          path: 'BeatlesCode',
          name: 'BeatlesCode',
          component: BeatlesCode
        },
        {
          path: 'Boostcourse-ace-2th',
          name: 'Boostcourse-ace-2th',
          component: BoostcourseAce2th
        },
        {
          path: 'CodeIgniter-web-service',
          name: 'CodeIgniter-web-service',
          component: CodeIgniterWebService
        },
        {
          path: 'hy3d-smart-distribution',
          name: 'hy3d-smart-distribution',
          component: Hy3dSmartDistribution
        },
        {
          path: 'hycube-web-service',
          name: 'hycube-web-service',
          component: HycubeWebSerivce
        },
        {
          path: 'namyang-minus-z',
          name: 'namyang-minus-z',
          component: NamYangMinusZ
        }
      ]
    },
    {
      path: '/skills',
      name: 'Skills',
      component: Skills
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
