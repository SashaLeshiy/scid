<template>
  <section
    v-if="!isMobileOpen"
    class="scid-header"
  >
   <router-link to="/">
    <img
      src="@/assets/logo.png"
      alt="логотип"
      class="scid-header__logo"
    />
   </router-link>
    <div class="scid-header__right">
      <scid-navigation @toggle-modal="toggleModal"></scid-navigation>
        <ScidButton
          type="button"
        >
          <router-link
            to="/call"
            class="scid-header__link"
          >Заказать звонок</router-link>
        </ScidButton>
    </div>
  </section>
    <Teleport to="body">
      <scid-modal
      v-if="isModalOpen"
      @toggle-modal="toggleModal"
      ></scid-modal>
    </Teleport>
</template>
<script>
import ScidNavigation from '@/components/ScidNavigation/ScidNavigation.vue';
import ScidModal from '@/components/ScidModal/ScidModal.vue';
import ScidButton from '@/components/ScidButton/ScidButton.vue';

export default {
  name: 'ScidHeader',

  components: {
    ScidNavigation,
    ScidModal,
    ScidButton,
  },

  data() {
    return {
      isModalOpen: false,
    };
  },

  methods: {
    toggleModal() {
      this.isModalOpen = !this.isModalOpen;
    },
  },

};
</script>

<style lang="scss" scoped>
.scid-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  margin-bottom: 24px;
  width: 100%;
  box-sizing: border-box;
  background: #FFFFFF;
  box-shadow: 0px 4px 21px rgba(0, 0, 0, 0.07);

  @media screen and (min-width: 768px){
      padding: 24px;
    }

  &__right {
    display: flex;
    flex-direction: row-reverse;

    @media screen and (min-width: 768px){
      flex-direction: row;
      align-items: center;
    }
  }

  &__link {
    color: #00A76B;
    text-decoration: none;
  }
}

</style>
