import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/views/MainView'
import PortfolioView from '@/views/PortfolioView'
import SkillsOfferView from '@/views/SkillsOfferView'
import ContactMeView from '@/views/ContactMeView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView
    },{
      path: '/portfolio',
      name: 'PortfolioView',
      component: PortfolioView
    },{
      path: '/skills-offer',
      name: 'SkillsOfferView',
      component: SkillsOfferView
    },{
      path: '/contact-me',
      name: 'ContactMeView',
      component: ContactMeView
    },
  ]
})
