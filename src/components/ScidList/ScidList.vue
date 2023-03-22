<template>
  <div class="scid-list">
    <h3 class="scid-list__title">
      {{ dataTitle }}
    </h3>
    <ul class="scid-list__list">
      <li
        v-for="item in data"
        :key="item.id"
        :class="[item.icon ? 'scid-list__elem' : ' scid-list__elem scid-list__elem-margin']"
      >
      <span v-if="item.icon" class="scid-list__elem-icon">
        <img :src="require(`../../assets/contacts/${item.icon}`)" alt=""/>
      </span>
      <a
        v-if="item.link"
        :href="item.link"
        class="scid-list__link"
      >{{ item.text }}</a>
      <span v-else>{{ item.text }}</span>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ScidList',

  props: {
    data: {},
    dataTitle: String,
  },
};
</script>

<style lang="scss" scoped>
.scid-list {
  display: flex;
  flex-direction: column;
  color: #ffffff;

  @media screen and (min-width: 768px){
    &:nth-child(4) {
      margin-left: 36px;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    margin: 0;
    min-width: 200px;
    max-width: 230px;
    list-style-type: none;
  }

  &__title {
    align-self: center;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;

    @media screen and (min-width: 768px){
      align-self: start;
    }

    @media screen and (min-width: 1280px){
      font-size: 20px;
      line-height: 30px;
    }
  }

  &__elem {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 22px;
  }

  &__elem-margin {
    margin-bottom: 11px;
  }

  &__elem:last-child {
    margin-bottom: 0;
  }

  &__elem-icon {
    margin-right: 8px;
  }

  &__link {
    color: #ffffff;
    text-decoration: none;
  }

  &__link:hover {
    opacity: 0.7;
  }
}
</style>
