<!-- eslint-disable vuejs-accessibility/anchor-has-content -->
<!-- eslint-disable vuejs-accessibility/form-control-has-label -->
<template>
  <section class="scid-footer">
    <div class="scid-footer__block" >
    </div>
    <ScidList
      :data="forContacts"
      dataTitle="Для связи"
    ></ScidList>
    <ScidList
      :data="companyData"
      dataTitle="Компания"
    ></ScidList>
    <ScidList
      :data="documents"
      dataTitle="Документы"
    ></ScidList>
    <div class="scid-footer__subscribe">
      <h3 class="scid-footer__subscribe-title">Будьте в курсе</h3>
      <div class="scid-footer__subscribe-form">
        <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
        <input
          type="email"
          placeholder="E-mail"
          v-model="value"
          class="scid-footer__subscribe-input"
        />
        <button type="button" class="scid-footer__subscribe-input--send">
          <img src="@/assets/send.png" alt=""/>
        </button>
      </div>
      <div class="scid-footer__subscribe-icons">
        <a
          href="https://insta.com"
          class="scid-footer__link"
          target="_blank"
        >
          <img src="@/assets/socila/insta.png" alt="" class="scid-footer__subscribe-icons--elem"/>
        </a>
        <a
          href="https://vk.com"
          class="scid-footer__link"
          target="_blank"
        >
          <img src="@/assets/socila/vk.png" alt="" class="scid-footer__subscribe-icons--elem"/>
        </a>
        <a
          href="https://facebook.com"
          class="scid-footer__link"
          target="_blank"
        >
          <img
            src="@/assets/socila/facebook.png"
            alt=""
            class="scid-footer__subscribe-icons--elem"
          />
        </a>
      </div>
    </div>
    <div class="scid-footer__copyright">
      Copyright © 2022 SCID
    </div>
  </section>
</template>

<script>
import FOR_CONTACTS from '@/constants/forContacts';
import COMPANY from '@/constants/company';
import DOCUMENTS from '@/constants/documents';
import ScidList from '../ScidList/ScidList.vue';

export default {
  name: 'ScidFooter',

  components: {
    ScidList,
  },

  data() {
    return {
      forContacts: FOR_CONTACTS,
      companyData: COMPANY,
      documents: DOCUMENTS,
    };
  },
};
</script>

<style lang="scss" scoped>
.scid-footer {
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  padding: 20px;
  background: #00A76B;

  @media screen and (min-width: 480px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 26px;
    justify-items: center;
  }

  @media screen and (min-width: 768px){
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 32px;
  }

  @media screen and (min-width: 1024px){
    grid-template-columns: max-content 1fr 1fr 1fr;
    grid-gap: 48px;
    padding: 60px 80px 6px;
    margin-top: 44px;
  }

  @media screen and (min-width: 1280px){
    grid-template-columns: max-content 1fr 1fr 1fr max-content;
    grid-gap: 34px;
    margin-top: 64px;
  }

  &__block {
    align-self: center;
    width: 108px;
    height: 154px;
    background-color: #009B63;
    border-radius: 16px;
  }

  &__subscribe {
    @media screen and (min-width: 480px){
      grid-column: span 2;
    }

    @media screen and (min-width: 1024px){
      grid-column: span 4;
    }

    @media screen and (min-width: 1280px){
      grid-column: auto;
    }
  }

  &__subscribe-title {
    color: #ffffff;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    text-align: center;

    @media screen and (min-width: 1280px){
      font-size: 20px;
      line-height: 30px;
    }
  }

  &__subscribe-form {
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 255px;
    margin: 0 auto;
  }

  &__subscribe-input {
    align-self: center;
    padding-left: 12px;
    box-sizing: border-box;
    width: 255px;
    height: 40px;
    color: #ffffff;
    background: #4bb68c;
    border: none;
    border-radius: 8px;
  }

  &__subscribe-input::placeholder {
    color: #ffffff;
    font-size: 14px;
    line-height: 24px;
  }

  &__subscribe-input--send {
    position: absolute;
    top: 12px;
    right: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    color: #ffffff;
    background: none;
    border: none;
    cursor: pointer;
  }

  &__subscribe-icons {
    display: flex;
    justify-content: center;
    margin-top: 30px;

    @media screen and (min-width: 1280px){
      justify-content: start;
      margin-top: 46px;
    }
  }

  &__subscribe-icons--elem {
    margin-right: 12px;
  }

  &__subscribe-icons--elem:last-child {
    margin-right: 0px;
  }

  &__link {
    margin-right: 16px;
  }

  &__link:hover {
    opacity: 0.7;
  }

  &__link:last-of-type {
    margin-right: 0;
  }

  &__copyright {
    grid-column: span 2;
    margin-top: 50px;
    margin-bottom: 20px;
    color:#ffffff;
    text-align: center;

    @media screen and (min-width: 768px){
      grid-column: span 3;
    }

    @media screen and (min-width: 1024px){
      grid-column: span 4;
    }

    @media screen and (min-width: 1280px){
      grid-column: span 5;
    }
  }
}
</style>
