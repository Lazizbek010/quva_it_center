<template>
    <section class="bg-contact" id="register">
        <div class="container">
          <h2 class="footer__titles">Hoziroq kursga yoziling!</h2>
          <form action="#" class="form" data-aos="zoom-in"
           data-aos-delay="300">
            <div class="form__shape1">
              <img src="@/assets/img/formshape1.png" alt="">
            </div>
            <div class="form__shape2">
              <img src="@/assets/img/formshape2.png" alt="">
            </div>
            <label for="name">Ismingiz</label>
            <div class="input-form">
              <img src="images/user.svg" alt="">
              <input type="text" id="name" name="name" placeholder="Ismingiz" autocomplete="off">
            </div>
            <label for="email">E-mail manzil</label>
            <div class="input-form">
              <img src="images/mail.svg" alt="">
              <input type="email" id="email" name="email" placeholder="E-mail manzil" autocomplete="off">
            </div>
            <label for="tel">Telefon raqami</label>
            <div class="input-form">
              <img src="images/tel.svg" alt="">
              <input type="tel" id="tel" name="tel" placeholder="+998" value="+998" autocomplete="off">
            </div>
            <button type="submit" class="form-btn">Kursga yozilish</button>
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