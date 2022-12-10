<template>
  <div class="home">
    <header class="header">
      <!--  Hero Section -->
      <HeroSection :getMainList="getMainList"/>
      <!--  About Section-->
      <AboutSection :getForCourse="getForCourse"/>
      <!-- Process Section -->
      <ProcessSection />
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
    <transition name="fade">
    <div class="toTop" v-if="scY > 300" @click="toTop">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
    </div>
  </transition>
  </div>
</template>

<script>
import HeroSection from '@/components/HeroComponent.vue'
import AboutSection from '@/components/AboutComponent.vue'
import ProcessSection from '@/components/ProcessComponent.vue'
import InfoSection from '@/components/InfoComponent.vue'
import PricesSection from '@/components/PricesComponent.vue'
import ServiceSection from '@/components/ServiceComponent.vue'
import InstructorSection from '@/components/InstructorComponent.vue'
import CourseSection from '@/components/CourseComponent.vue'
import EduPriceSection from '@/components/EducationPriseComponent.vue'
import ContactSection from '@/components/ContactComponent.vue'

import { mapActions, mapGetters} from 'vuex'
import AOS from "aos";

export default {
  name: "HomeView",
   data() {
      return {
        scTimer: 0,
        scY: 0,
        showActive: false,
        stickyNav: false,
      }
    },
  components: {
    HeroSection,
    AboutSection,
    ProcessSection,
    InfoSection,
    PricesSection,
    ServiceSection,
    InstructorSection,
    CourseSection,
    EduPriceSection,
    ContactSection
  },
  methods: {
    handleScroll: function () {
        if (this.scTimer) return;
        this.scTimer = setTimeout(() => {
          this.scY = window.scrollY;
          this.showActive = true
          clearTimeout(this.scTimer);
          this.scTimer = 0;
        }, 100);
      },
      toTop: function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      },
    ...mapActions(['fetchMainList', 'fetchForCourse', 'fetchLearnCourse', 'fetchMoreInfo', "fetchCourseProgram",'fetchCourseInstruktor','fetchHaveCourse','fetchCostEdu'])
  },
  mounted(){
    this.fetchMainList()
    this.fetchForCourse()
    this.fetchLearnCourse()
    this.fetchMoreInfo()
    this.fetchCourseProgram() 
    this.fetchCourseInstruktor() 
    this.fetchHaveCourse() 
    this.fetchCostEdu() 
    AOS.init()
    window.addEventListener('scroll', this.handleScroll);
  },
  computed: {
    ...mapGetters(['getMainList', 'getForCourse','getLearnCourse', 'getMoreInfo', "getCourseProgram",'getCourseInstruktor','getHaveCourse','getCostEdu'])
  }
};
</script>


<style>
.fade-enter-active, .fade-leave-active{
  transition: 0.5s ease;
}
.fade-enter-from, .fade-leave-to{
  opacity: 0;
  transform: translateY(-1000px);
}

</style>
