<template>
  <div class="home">
    <header class="header">
      <!--  Hero Section -->
      <HeroSection />
      <!--  About Section-->
      <AboutSection />
    </header>
    <main>
      <!-- Info Section -->
      <InfoSection />
      <!-- Course-Prices Section-->
      <PricesSection />
      <!-- Services Section -->
      <ServiceSection />
      <!-- Course instructor Section -->
      <InstructorSection />
    </main>
    <footer class="site-footer">
      <!-- Course Section -->
      <CourseSection /> 
      <!-- Education Section -->
      <EduPriceSection />
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
};
</script>
