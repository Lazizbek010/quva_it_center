import api from '@/plugins/axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    contactList: {},
    mainList: [],
    forCourse: [],
    learnCourse: [],
    moreInfo: [],
    courseProgram: [],
    courseInstruktor: [],
    haveCourse: [],
    costEdu: []
  },
  getters: {
    getContactList: state => state.contactList,
    getMainList: state => state.mainList,
    getForCourse: state => state.forCourse,
    getLearnCourse: state => state.learnCourse,
    getMoreInfo: state => state.moreInfo,
    getCourseProgram: state => state.courseProgram,
    getCourseInstruktor: state => state.courseInstruktor,
    getHaveCourse: state => state.haveCourse,
    getCostEdu: state => state.costEdu
  },
  mutations: {
    SET_CONTACT_LIST(state, data) {
      state.contactList = data
    },
    SET_MAIN_LIST(state, data) {
      state.mainList = data
    },
    SET_FORCOURSE_LIST(state, data){
      state.forCourse = data
    },
    SET_LEARN_COURSE(state, data){
      state.learnCourse = data
    },
    SET_MORE_INFO(state, data){
      state.moreInfo = data
    },
    SET_COURSE_PROGRAM(state, data){
      state.courseProgram = data
    },
    SET_COURSE_INSTRUKTOR(state, data){
      state.courseInstruktor = data
    },
    SET_HAVE_COURSE(state, data){
      state.haveCourse = data
    },
    SET_COST_EDU(state, data){
      state.costEdu = data
    }
   
  },
  actions: {
    async fetchContacts({commit}) {
      try {
        const {data} = await api.get('/contact')
        commit('SET_CONTACT_LIST', data)
      } catch(err) {
        console.error(err, 'bu contact pagedagi xato')
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
    },
    async fetchForCourse({commit}){
      try {
        const {data} = await api.get('/for-course')
        commit('SET_FORCOURSE_LIST', data)
      }catch (err){
        console.error(err, 'for-coursse xatosi')
      }
    },
    async fetchLearnCourse({commit}){
      try{
        const {data} = await api.get('/learn-course')
        commit('SET_LEARN_COURSE', data)
      }catch(err){
        console.log(err, 'Learn-Course hatosi');
      }
    },
    async fetchMoreInfo({commit}){
      try{
        const {data} = await api.get('/more-info')
        commit('SET_MORE_INFO', data)
      }catch(err){
        console.log(err, 'more-info xatosi');
      }
    },
    async fetchCourseProgram({commit}){
      try{
        const {data} = await api.get('/course-program')
        commit('SET_COURSE_PROGRAM', data)
        console.log(data);
      }catch(err){
        console.error(err, 'course-program xatosi');
      }
    },
    async fetchCourseInstruktor({commit}){
      try{
        const {data} = await api.get('/course-instructor')
        commit('SET_COURSE_INSTRUKTOR', data)
      }catch(err){
        console.error(err, 'course-instruktor xatosi');
      }
    },
    async fetchHaveCourse({commit}){
      try{
        const {data} = await api.get('/have-course')
        commit('SET_HAVE_COURSE', data)
      }catch(err){
        console.error(err, 'HAve-Course xatosi');
      }
    },
    async fetchCostEdu({commit}){
      try{
        const {data} = await api.get('/cost-education')
        commit('SET_COST_EDU', data)
      }catch(err){
        console.error(err, 'COST-Course xatosi');
      }
    },
  }, 
  modules: {}
})
