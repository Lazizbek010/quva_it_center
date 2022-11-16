import api from '@/plugins/axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    contactList: {},
    mainList: [],
  },
  getters: {
    getContactList: state => state.contactList,
    getMainList: state => state.mainList
  },
  mutations: {
    setContactList(state, data) {
      state.contactList = data
    },
    SET_MAIN_LIST(state, data) {
      state.mainList = data
    }
  },
  actions: {
    async fetchContacts({commit}) {
      try {
        const {data} = await api.get('/contact')
        commit('setContactList', data)
      } catch(err) {
        console.error(err, 'bu contact pidagi xato')
      }

      // api.get('/contact').then(contactData => {
      //   commit('setContactList', contactData)
      // })
    },
    async fetchMainList({commit}) {
      try {
        const {data} = await api.get('/main')
        commit('SET_MAIN_LIST', data)
      }catch(err){
        console.error(err, 'mainlistni xatosi');
      }
    } 
  },
  modules: {
  }
})
