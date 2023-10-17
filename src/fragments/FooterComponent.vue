<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__top">
        <img src="@/assets/image/footer-logo.svg" alt="" />
        <div class="footer__top-sales-block">
          <div class="sales-block__left">
            <img class="sales-block__left-img" src="mail-icon.svg" alt="" />
            <p>Подпишись на рассылку и получи <span>-10%</span> скидку</p>
          </div>
          <div class="sales-block__right">
            <img src="@/assets/image/next-icon-white.svg" alt="" />
          </div>
        </div>
      </div>
      <div class="footer-middle">
        <div class="footer-middle__left-block">
          <p>Доступ к ранним релизам в приложении</p>
          <div class="left-block__link-item">
            <div class="left-block__market">
              <img src="@/assets/image/app-store-logo.svg" alt="" />
              <img src="@/assets/image/android-icon.svg" alt="" />
            </div>
            <img src="@/assets/image/QR-icon.svg" alt="" />
          </div>
        </div>
        <div class="footer-middle__middle-block">
          <p class="middle-block__title">Контакты</p>
          <ul class="middle-block__contacts">
            <li class="middle-block__tel">
              <a href="tel:88005117468">8 (800) 511-74-68</a>
              <p>Бесплатная горячая линия Ежедневно с 9 до 21</p>
            </li>
            <li class="middle-block__mail">
              <p>Контактный Email</p>
              <a href="mailto:info@brd.ru">info@brd.ru</a>
            </li>
          </ul>
        </div>
        <div class="footer-middle__right-block">
          <div class="right-block__help">
            <p>Помощь</p>
            <ul class="right-block__item">
              <li class="right-block__link">
                <a href="">Доставка</a>
              </li>
              <li class="right-block__link">
                <a href="">Оплата</a>
              </li>
              <li class="right-block__link">
                <a href="">Возврат</a>
              </li>
              <li class="right-block__link">
                <a href="">Отзывы (2290)</a>
              </li>
              <li class="right-block__link">
                <a href="">Акции и скидки</a>
              </li>
            </ul>
          </div>
          <div class="right-block__company">
            <p>Компания</p>
            <ul class="right-block__item">
              <li class="right-block__link">
                <a href="">Контакты</a>
              </li>
              <li class="right-block__link">
                <a href="">О boardriders</a>
              </li>
              <li class="right-block__link">
                <a href="">Вакансии</a>
              </li>
              <li class="right-block__link">
                <a href="">Публичная оферта</a>
              </li>
            </ul>
          </div>
          <div class="right-block__help">
            <p>Boardriders Inc.</p>
            <ul class="right-block__item">
              <li class="right-block__link">
                <a href="">Франчайзинг</a>
              </li>
              <li class="right-block__link">
                <a href="">Quiksilver</a>
              </li>
              <li class="right-block__link">
                <a href="">Roxy</a>
              </li>
              <li class="right-block__link">
                <a href="">DC Shoes</a>
              </li>
              <li class="right-block__link">
                <a href="">Boardriders Club</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <ul class="footer-bottom__social-link">
          <li>
            <a href=""><img src="@/assets/image/twitter.svg" /></a>
          </li>
          <li>
            <a href=""><img src="@/assets/image/facebook.svg" /></a>
          </li>
          <li>
            <a href=""><img src="@/assets/image/twitch.svg" /></a>
          </li>
          <li>
            <a href=""><img src="@/assets/image/youtube.svg" /></a>
          </li>
          <li>
            <a href=""><img src="@/assets/image/instagram.svg" /></a>
          </li>
        </ul>
        <p>© 2020 Brd.ru. Все права защищены</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.container {
  max-width: 1380px;
  padding: 0 10px;
  margin: 0 auto;
}
.footer {
  color: #fff;
  background-image: url(@/assets/image/footer-bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.footer__top {
  display: flex;
  justify-content: space-between;
  padding: 180px 0 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
.footer__top-sales-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 11px 26px;
  flex-basis: 667px;
}
.sales-block__left {
  display: flex;
}
.sales-block__left-img {
  width: 20px;
  margin-right: 15px;
}
.sales-block__left span {
  color: #eb5757;
}
.footer-middle {
  padding-top: 34px;
  display: flex;
  justify-content: space-between;
}
.left-block__market {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-right: 29px;
}
.left-block__link-item {
  padding-top: 31px;
  display: flex;
}
.footer-middle__middle-block {
  display: flex;
  flex-direction: column;
}
.middle-block__title {
  font-size: 16px;
  margin-bottom: 31px;
}
.middle-block__contacts {
  margin-left: 50px;
}
.middle-block__mail p {
  font-size: 18px;
  margin-bottom: 10px;
}
.middle-block__tel a {
  font-size: 18px;
}
.middle-block__tel p {
  color: #bdbdbd;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.7;
  margin-bottom: 18px;
  max-width: 168px;
  margin-top: 10px;
}
.middle-block__mail a {
  color: #bdbdbd;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.7;
}
.middle-block__mail,
.middle-block__tel {
  position: relative;
}
.middle-block__tel::before {
  content: "";
  background-image: url(@/assets/image/phone-icon.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: -50px;
  top: -5px;
  right: 0;
  width: 23px;
  height: 23px;
}
.middle-block__mail::before {
  content: "";
  background-image: url(@/assets/image/mail-icon.svg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
  left: -50px;
  top: -5px;
  right: 0;
  width: 25px;
  height: 20px;
}
.footer-middle__right-block {
  display: flex;
  gap: 130px;
}
.footer-middle__right-block p {
  margin-bottom: 25px;
}
.right-block__item {
  color: #bdbdbd;
  font-size: 12px;
}
.right-block__link {
  margin-bottom: 20px;
}
.footer-bottom {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding: 30px 0 50px;
}
.footer-bottom p {
  color: #bdbdbd;
  font-size: 12px;
}
.footer-bottom__social-link {
  display: flex;
  gap: 20px;
}
</style>
