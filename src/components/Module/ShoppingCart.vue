<template>
  <div class="shopping-cart">
    <h3 class="sub-title">Ваша корзина</h3>
    <div class="shopping-cart__promo">
      <button type="button" class="btn btn--outline btn--sm">Применить</button>
    </div>
    <div class="shopping-cart__hr"></div>
    <div class="shopping-cart__scroll">
      <product-vue
        v-for="product in products"
        v-bind="product"
        :key="product.id"
      />
    </div>
    <div class="shopping-cart__hr"></div>
    <ul class="shopping-cart__list">
      <li class="shopping-cart__ell">
        <span>Сумма заказа:</span>
        <span>5 050 руб.</span>
      </li>
      <li class="shopping-cart__ell">
        <span>Доставка:</span>
        <span>Бесплатно</span>
      </li>
      <li class="shopping-cart__ell">
        <span>Бонусы для начисления:</span>
        <span>168 Б</span>
      </li>
    </ul>
    <div class="shopping-cart__hr"></div>
    <div class="shopping-cart__result">
      <span>Итого</span>
      <span>5 050 руб.</span>
    </div>
  </div>
</template>

<script>
import ProductVue from "@components/Module/ProductVue";

export default {
  name: "ShoppingCart",
  components: {
    ProductVue,
  },
  props: {},
  data() {
    return {
      products: [
        {
          id: 1,
          image: require("@img/temp/product-1.png"),
          name: "Рюкзак Xiaomi Blade, серый",
          price: 1450,
        },
        {
          id: 2,
          image: require("@img/temp/product-3.png"),
          name: "Часы CASIO W-800,  водонепроницаемые",
          price: 3600,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.shopping-cart {
  padding: 62px 48px 44px;
  background-color: #f8fafb;
  .sub-title {
    margin-bottom: 42px;
  }
  .product-vue {
    margin-bottom: 20px;
  }
  &__hr {
    height: 1px;
    background-color: #e4eaee;
  }
  &__promo {
    display: flex;
    margin-bottom: 24px;
  }
  &__scroll {
    margin: 34px 0;
  }
  &__list {
    padding: 18px 0 10px;
  }
  &__ell {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    color: $text-color--muted;
    font-size: 14px;
  }
  &__result {
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
    font-size: 16px;
    font-weight: 500;
  }
}
</style>
