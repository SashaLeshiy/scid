<template>
  <div class="scid-card">
    <img :src="require(`../../assets/cards/${src}`)" :alt="alt" class="scid-card__img"/>
    <h2 class="scid-card__title">
      {{ title }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'ScidCard',

  props: {
    src: String,
    title: String,
    alt: String,
  },
};
</script>

<style lang="scss" scoped>
.scid-card {
  padding: 10px;
  margin-bottom: 12px;
  max-width: 383px;
  background: #FFFFFF;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.06);
  border-radius: 20px;

  @media screen and (min-width: 768px){
    padding: 18px;
  }

  @media screen and (min-width: 1024px){
    padding: 24px;
  }

  &__img {
    width: 100%;
    border-radius: 8px;
  }

  &__img:hover {
    opacity: 0.7;
  }

  &__title {
    color: #000000;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }

  &__title:hover {
    color: #00A76B;
    cursor: pointer;
  }
}
</style>
