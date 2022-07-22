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
      return `${this.price} руб.`;
    },
  },
};
</script>

<style lang="scss" scoped>
.product-vue {
  display: flex;
  &__previw {
    width: 87px;
    height: 87px;
    margin-right: 28px;
    background-color: #ffffff;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 6px 0;
  }
  &__name {
    margin-bottom: 10px;
    color: $text-color--muted;
    font-size: 16px;
  }
  &__price {
    font-size: 14px;
  }
}
</style>
