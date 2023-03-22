<template>
  <div
    ref="slider"
    class="keen-slider scid-carousel__slider"
  >
    <div
      v-for="(slide, idx) in slides"
      :key="idx"
      class="keen-slider__slide scid-carousel__slide"
    >
      <div
        class="scid-carousel__text"
      >
        {{ slide.text }}
        <span class="scid-carousel__text-selected">
          {{ slide.selected }}
        </span>
      </div>
    </div>
  </div>
  <div v-if="slider" class="dots">
    <button
      v-for="(_slide, idx) in dotHelper"
      @click="slider.moveToIdx(idx)"
      :class="{ dot: true, active: current === idx }"
      :key="idx"
    >&#8226;</button>
  </div>
</template>

<script>
import SLIDER from '@/constants/slider';
import KeenSlider from 'keen-slider';
import 'keen-slider/keen-slider.min.css';

export default {
  name: 'ScidCarousel',

  data() {
    return {
      slides: SLIDER,
      loaded: [true],
      slider: null,
      current: 1,
    };
  },

  computed: {
    dotHelper() {
      return this.slider ? [...Array(this.slider.track.details.slides.length).keys()] : [];
    },
  },

  mounted() {
    this.slider = new KeenSlider(this.$refs.slider, {
      initial: this.current,
      slideChanged: (s) => {
        this.current = s.track.details.rel;
      },
    });
  },
  beforeUnmount() {
    if (this.slider) this.slider.destroy();
  },
};
</script>

<style lang="scss" scoped>
[class^="number-slide"],
[class*=" number-slide"] {
  background: grey;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 50px;
  color: #fff;
  font-weight: 500;
  height: 300px;
  max-height: 100vh;
}

.dots {
  display: flex;
  padding: 15px 0;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px){
    padding: 20px 0 15px;
  }

  @media screen and (min-width: 1024px){
    padding: 24px 0 15px;
  }
}
.dot {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 9px;
  padding: 5px;
  width: 10px;
  height: 10px;
  color: #E2E3E5;
  font-size: 40px;
  background: none;
  border: none;
  border-radius: 50%;
  cursor: pointer;
}
.dot:focus {
  outline: none;
}
.dot.active {
  padding: 11px;
  background: none;
  color: #00A76B;
  border: 1px solid #00A76B;
}

.scid-carousel{
  &__slider {
    .keen-slider__slide {
      height: 280px;

      @media screen and (min-width: 768px){
        height: 480px;
      }

      @media screen and (min-width: 1024px){
        height: 580px;
      }

      @media screen and (min-width: 1440px){
        height: 672px;
      }
    }
  }

  &__text {
    position: absolute;
    margin-left: 40px;
    max-width: 200px;
    font-size: 20px;
    line-height: 26px;
    color: #0E0E0F;

    @media screen and (min-width: 768px){
      max-width: 424px;
      font-weight: 600;
      font-size: 42px;
      line-height: 50px;
    }

    @media screen and (min-width: 1024px){
      margin-left: 60px;
      max-width: 596px;
      font-weight: 600;
      font-size: 56px;
      line-height: 62px;
    }

    @media screen and (min-width: 1024px){
      margin-left: 72px;
      max-width: 700px;
      font-weight: 600;
      font-size: 64px;
      line-height: 87px;
    }
  }

  &__text-selected {
    color: #00A76B;
  }

  &__slide {
    display: flex;
    align-items: center;
    background-image: url('@/assets/slider-photo.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position-x: center;
  }
}
</style>
