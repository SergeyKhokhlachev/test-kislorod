<template>
  <div class="product-vue">
    <div class="product-vue__previw">
      <img :src="image" class="product-vue__img" alt="photo" />
    </div>
    <div class="product-vue__content">
      <h4 class="product-vue__name">{{ name }}</h4>
      <span class="product-vue__price">{{ priceFormat }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductVue",
  props: {
    id: [String, Number],
    name: String,
    image: String,
    price: Number,
  },
  computed: {
    priceFormat() {
      return `${this.price
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")} руб.`;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-vue {
  display: flex;
  &__previw {
    width: 77px;
    height: 77px;
    margin-right: 22px;
    background-color: #ffffff;
    @include respond(screen-md) {
      width: 92px;
      height: 92px;
      margin-right: 28px;
    }
    @include respond(screen-lg) {
      width: 87px;
      height: 87px;
    }
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &__content {
    width: 100%;
    padding: 2px 24px 6px 0;
    @include respond(screen-md) {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    @include respond(screen-lg) {
      display: block;
    }
  }
  &__name {
    margin-bottom: 15px;
    color: $text-color--muted;
    font-size: 13px;
    @include respond(screen-md) {
      margin-bottom: 0;
      font-size: 16px;
    }
    @include respond(screen-lg) {
      margin-bottom: 18px;
    }
  }
  &__price {
    font-size: 13px;
    @include respond(screen-md) {
      wfont-size: 14px;
    }
  }
}
</style>
