<template>
  <div class="scid-navigation">
    <div
      v-for="item in menu"
      :key="item.id"
      class="scid-navigation__menu"
    >
      <router-link
        :to="item.route"
        class="scid-navigation__menu-text"
        active-class="scid-navigation__menu-text--active"
        v-slot="{ isActive }"
      >
        <span v-if="item.icon">
          <img src="@/assets/icon-star.png" alt="" class="scid-navigation__icon"/>
        </span>
        <button
          type="button"
          class="scid-navigation__button"
          :class="[isActive && 'scid-navigation__button-active']"
        >
          {{ item.name }}
        </button>
      </router-link>
    </div>
    <div class="scid-navigation__menu-mobile">
        <button
          type="button"
          class="scid-navigation__menu-mobile--button"
          @click="toggleModal"
        >&#9776;</button>
      </div>
  </div>
</template>

<script>
import MENU from '@/constants/menu';

export default {
  name: 'ScidNavigation',

  data() {
    return {
      menu: MENU,
    };
  },

  methods: {
    toggleModal() {
      this.$emit('toggle-modal');
    },
  },

};

</script>

<style lang="scss" scoped>
.scid-navigation {
  @media screen and (min-width: 768px){
    display: flex;
  }

  &__button {
    padding: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    text-transform: uppercase;
    color: #0E0E0F;
    background: none;
    border: none;
  }

  &__button:hover {
    color: #00A76B;
    cursor: pointer;
  }

  &__button-active {
    color: #00A76B;
  }

  &__icon {
    width: 12px;
    margin-right: 3px;
  }

  &__menu {
    display: none;

    @media screen and (min-width: 768px){
      display: inherit;
      margin-right: 20px;
    }
    @media screen and (min-width: 1024px){
      margin-right: 48px;
    }
  }

  &__menu-mobile {

    @media screen and (min-width: 768px){
      display: none;
    }
  }

  &__menu-mobile--button {
    width: 40px;
    height: 40px;
    color: #00A76B;
    background: none;
    border: 1px solid #00A76B;
    border-radius: 50%;
  }

}

</style>
