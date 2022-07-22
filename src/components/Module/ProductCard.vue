<template>
  <div class="product-card">
    <div class="product-card__previw">
      <img
        src="@img/temp/product-1.png"
        class="product-card__img"
        alt="photo"
      />
    </div>
    <div class="product-card__content">
      <router-link to="/" class="product-card__name">
        Ботинки для беговых лыж Marax M-350 Active серебро
      </router-link>
      <ul class="product-info">
        <li class="product-info__ell">Артикул: <span>123456789</span></li>
        <li class="product-info__ell">Цвет: <span>Серебро</span></li>
      </ul>
    </div>
    <div class="product-card__control">
      <div class="product-price">
        <sapn class="product-price__main">2 900 руб.</sapn>
        <span class="product-price__sub">4 700 руб.</span>
      </div>
      <div class="product-count">
        <div class="product-count__btn">
          <img svg-inline src="@img/icons/minus.svg" alt="-" />
        </div>
        <input type="text" class="product-count__field" readonly />
        <div class="product-count__btn">
          <img svg-inline src="@img/icons/plus.svg" alt="+" />
        </div>
      </div>
      <button type="button" class="product-card__remove">
        <img svg-inline src="@img/icons/close.svg" alt="x" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  padding: 21px 22px 23px;
  border: 1px solid #dde3e8;
  border-radius: 3px;
  &__previw {
    flex-shrink: 0;
    width: 92px;
    height: 92px;
    margin-right: 22px;
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &__content {
    width: 100%;
  }
  &__name {
  }
  &__control {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-shrink: 0;
  }
  &__remove {
  }
}
</style>
