<template>
    <div class="bg-prices">
        <div class="container">
          <div class="prices">
            <div class="price" v-if="getMoreInfo /*&& getMoreInfo.length*/">
              {{getMoreInfo}}
              <div class="price__info" 
              v-for="(data, i) in getMoreInfo" :key="i">
                <h3>{{data.title}}</h3>
                <p>
                 {{data.description}}
                </p>
              </div>
            </div>
            <!-- BG IMAGE QOYISH ??? -->

            <!-- <div class="price">
              <div class="price__info">
                <h3>Сколько стоит курс?</h3>
                <p>
                  Стоимость полного курса с материалами и доступом в общий чат 5
                  000 грн
                </p>
              </div>
            </div>
            <div class="price">
              <div class="price__info">
                <h3>Трудоустройство</h3>
                <p>20% студентов получат работу в агенстве</p>
              </div>
            </div> -->
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        name: 'Pricecomponent',
        props: {
          getMoreInfo: [],
        },
    }
</script>

<style lang="scss" scoped>

</style>