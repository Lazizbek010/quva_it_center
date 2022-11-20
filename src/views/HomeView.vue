<template>
  <div class="home">
    <header class="header">
      <!--  Hero Section -->
      <HeroSection :getMainList="getMainList"/>
      <!--  About Section-->
      <AboutSection :getForCourse="getForCourse"/>
    </header>
    <main>
      <!-- Info Section -->
      <InfoSection :getLearnCourse="getLearnCourse"/>
      <!-- Course-Prices Section-->
      <PricesSection :getMoreInfo="getMoreInfo"/>
      <!-- Services Section -->
      <ServiceSection :getCourseProgram="getCourseProgram"/>
      <!-- Course instructor Section -->
      <InstructorSection :getCourseInstruktor="getCourseInstruktor"/>
    </main>
    <footer class="site-footer">
      <!-- Course Section -->
      <CourseSection :getHaveCourse="getHaveCourse"/> 
      <!-- Education Section -->
      <EduPriceSection :getCostEdu="getCostEdu"/>
      <!-- Contact Section -->
      <ContactSection />
    </footer>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroComponent.vue'
import AboutSection from '@/components/AboutComponent.vue'
import InfoSection from '@/components/InfoComponent.vue'
import PricesSection from '@/components/PricesComponent.vue'
import ServiceSection from '@/components/ServiceComponent.vue'
import InstructorSection from '@/components/InstructorComponent.vue'
import CourseSection from '@/components/CourseComponent.vue'
import EduPriceSection from '@/components/EducationPriseComponent.vue'
import ContactSection from '@/components/ContactComponent.vue'

import { mapActions, mapGetters} from 'vuex'

export default {
  name: "HomeView",
  components: {
    HeroSection,
    AboutSection,
    InfoSection,
    PricesSection,
    ServiceSection,
    InstructorSection,
    CourseSection,
    EduPriceSection,
    ContactSection
  },
  methods: {
    ...mapActions(['fetchMainList', 'fetchForCourse', 'fetchLearnCourse', 'fetchMoreInfo', "fetchCourseProgram",'fetchCourseInstruktor','fetchHaveCourse','fetchCostEdu'])
  },
  mounted(){
    this.fetchMainList()
    this.fetchForCourse()
    this.fetchLearnCourse()
    this.fetchMoreInfo()
    this.fetchCourseProgram() /* Olinmadi */
    this.fetchCourseInstruktor() /* Olinmadi */
    this.fetchHaveCourse() /* Olinmadi */
    this.fetchCostEdu() /* Olinmadi */
  },
  computed: {
    ...mapGetters(['getMainList', 'getForCourse','getLearnCourse', 'getMoreInfo', "getCourseProgram",'getCourseInstruktor','getHaveCourse','getCostEdu'])
  }
};
</script>
