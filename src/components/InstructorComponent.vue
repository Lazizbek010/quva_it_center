<template>
    <div class="bg-instructor">
        <div class="container">
          <h2 class="instructor__title">Преподаватель курса</h2>
          <div class="instructor__info" v-if="getCourseInstruktor">
            <div class="instructor__info__text">
              <h4>{{getCourseInstruktor.name}}</h4>
              <div class="instructor__info__line"></div>
              <h6>{{getCourseInstruktor.position}}</h6>
              <h5>{{getCourseInstruktor.level_info}}</h5>
              <p class="instructor__info__stars">
                <span>*</span>
                <span>*</span>
                <span>*</span>
              </p>
              <p class="instructor__info__contects">
                {{getCourseInstruktor.description}}
                <!-- <span>Team Lead</span> в американском агенстве
                интернет-маркетинга <span>“Cash Offer Option”</span> <br />
                Входит в <span>ТОП-50</span> специалистов по Контекстной рекламе
                в СНГ (по рейтингу платформы <span>Freelancehunt)</span> -->
              </p>
            </div>
            <div class="instructor__info__img">
              <img src="images/instructor-img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>