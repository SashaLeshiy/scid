<template>
  <section class="scid-cards">
    <h1 class="scid-cards__title">
      Наши услуги
    </h1>
    <div class="scid-cards__cards">
      <scid-card
        v-for="card in enterCards"
        :key="card.id"
        :src="card.img"
        :title="card.title"
      ></scid-card>
    </div>
    <scid-button
      v-if="!isAllServices"
      type="button"
      class="scid-cards__button"
      @click="allServices"
    >
      Все услуги
    </scid-button>
  </section>
</template>

<script>
import CARDS from '@/constants/cards';
import ScidCard from '../ScidCard/ScidCard.vue';
import ScidButton from '../ScidButton/ScidButton.vue';

export default {
  name: 'ScidCards',

  components: {
    ScidCard,
    ScidButton,
  },

  data() {
    return {
      cards: CARDS,
      enterCards: [],
      isAllServices: false,
    };
  },

  mounted() {
    this.enterCards = this.cards.slice(0, 6);
  },

  methods: {
    allServices() {
      this.enterCards = this.cards;
      this.isAllServices = true;
      return this.enterCards;
    },
  },
};
</script>

<style lang="scss" scoped>
.scid-cards {
  display: flex;
  flex-direction: column;
  padding: 0 12px;

  @media screen and (min-width: 768px){
    padding: 0 22px;
  }

  @media screen and (min-width: 1024px){
    padding: 0 40px;
  }

  @media screen and (min-width: 1280px){
    padding: 0 60px;
  }

  @media screen and (min-width: 1440px){
    padding: 0 80px;
  }

  &__title {
    @media screen and (min-width: 1024px){
      font-weight: 600;
      font-size: 40px;
      line-height: 56px;
    }
  }

  &__cards {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 12px;

    @media screen and (min-width: 768px){
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-items: center;
      grid-column-gap: 12px;
      padding-bottom: 20px;
    }

    @media screen and (min-width: 1024px){
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      justify-items: center;
      grid-column-gap: 12px;
    }
  }

  &__button {
    align-self: center;
  }
}
</style>
