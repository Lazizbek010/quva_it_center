<template>
    <section class="bg-contact">
        <div class="container">
          <h2 class="footer__titles">Запишитесь на курс сейчас</h2>
          <form action="#" class="form" data-aos="zoom-in"
           data-aos-delay="300">
            <div class="form__shape1">
              <img src="@/assets/img/formshape1.png" alt="">
            </div>
            <div class="form__shape2">
              <img src="@/assets/img/formshape2.png" alt="">
            </div>
            <label for="name">Ваше имя</label>
            <div class="input-form">
              <img src="images/user.svg" alt="">
              <input type="text" id="name" name="name" placeholder="Ваше имя">
            </div>
            <label for="email">Ваше e-mail</label>
            <div class="input-form">
              <img src="images/mail.svg" alt="">
              <input type="email" id="email" name="email" placeholder="Ваше e-mail">
            </div>
            <label for="tel">Ваш телефон</label>
            <div class="input-form">
              <img src="images/tel.svg" alt="">
              <input type="tel" id="tel" name="tel" placeholder="+380">
            </div>
            <button type="submit" class="form-btn">Записаться на курс</button>
          </form>
        </div>
      </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>