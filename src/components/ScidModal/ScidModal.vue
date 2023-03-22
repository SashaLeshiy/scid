<template>
  <div class="scid-modal">
    <div class="scid-modal__header">
      <button
        type="button"
        class="scid-modal__close"
        @click="toggleModal"
      >&#215;</button>
    </div>
    <div class="scid-modal__menu">
      <router-link
        to="/"
        class="scid-modal__link-text"
        active-class="scid-modal__link-text--active"
        v-slot="{ isActive }"
      >
      <button
          type="button"
          class="scid-modal__button"
          :class="[isActive && 'scid-modal__button-active']"
          @click="toggleModal"
        >
          главная
        </button>
      </router-link>
      <div
      v-for="item in menu"
      :key="item.id"
      class="scid-modal__link"
    >
      <router-link
        :to="item.route"
        class="scid-modal__link-text"
        active-class="scid-modal__link-text--active"
        v-slot="{ isActive }"
      >
        <button
          type="button"
          class="scid-modal__button"
          :class="[isActive && 'scid-modal__button-active']"
          @click="toggleModal"
        >
          {{ item.name }}
        </button>
      </router-link>
    </div>
  </div>
  </div>

</template>

<script>
import MENU from '@/constants/menu';

export default {

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
.scid-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  color: #0E0E0F;
  background-color: #ffffff;
  transition: all .5s ease-in-out;

  &__header {
    text-align: center;
  }

  &__close {
    width: 30px;
    height: 30px;
    border: 0;
    font-size: 40px;
    color: #0E0E0F;
    background: 0;
    border-radius: 5px;
  }

  &__menu {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }

  &__button {
    margin-bottom: 20px;
    background: none;
    font-size: 24px;
    line-height: 28px;
    text-transform: uppercase;
    border: none;

    &-active {
      color: #00A76B;
    }
  }

  &__link-text--active {
    color: #00A76B;
  }
}

</style>
