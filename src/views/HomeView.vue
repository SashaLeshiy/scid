<template>
  <div class="scid-home">
    <scid-carousel></scid-carousel>
    <scid-cards></scid-cards>
  </div>
</template>

<script>
import ScidCarousel from '@/components/ScidCarousel/ScidCarousel.vue';
import ScidCards from '@/components/ScidCards/ScidCards.vue';

export default {
  name: 'HomeView',
  components: {
    ScidCarousel,
    ScidCards,
  },
};
</script>
