<template>
  <div class="container">
    <h1 class="page-title">Оформление заказа</h1>
    <div class="page-box">
      <main class="page-box__main">
        <order-form />
      </main>
      <div class="page-box__slot">
        <h3 class="sub-title">Товары</h3>
        <product-card
          v-for="product in products"
          v-bind="product"
          @increase="productQuantity"
          @reduce="productQuantity"
          @remove="productRemove"
          :key="product.id"
        />
      </div>
      <aside class="page-box__assaide">
        <shopping-cart />
      </aside>
    </div>
    <button type="button" class="btn btn--prime btn--lg">Оформить заказ</button>
  </div>
</template>

<script>
import OrderForm from "@components/Form/OrderForm";
import ShoppingCart from "@components/Module/ShoppingCart";
import ProductCard from "@components/Module/ProductCard";

export default {
  name: "OrderRegistration",
  components: {
    OrderForm,
    ShoppingCart,
    ProductCard,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Рюкзак Xiaomi Blade, серый",
          image: require("@img/temp/product-1.png"),
          color: "Серый",
          article: "123456789",
          quantity: 2,
          priceNew: 2900,
          priceOld: 4700,
        },
        {
          id: 2,
          name: "Ботинки для беговых лыж Marax M-350 Active серебро",
          image: require("@img/temp/product-2.png"),
          color: "Серебро",
          article: "123456789",
          quantity: 1,
          priceNew: 1620,
          priceOld: 1950,
        },
      ],
    };
  },
  methods: {
    productQuantity(id, num) {
      const product = this.products.find((item) => item.id === id);
      product.quantity = num;
    },
    productRemove(id) {
      const index = this.products.findIndex((item) => item.id === id);
      this.products.splice(index, 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.page-box {
  margin-bottom: 40px;
  @include respond(screen-lg) {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: auto 460px;
    grid-template-rows: repeat(2, 1fr);
    gap: 30px;
  }
  &__slot {
    @include respond(screen-lg) {
      grid-column: span 2;
      grid-row: 2 / 2;
      max-width: 754px;
    }
  }
}

.product-card {
  margin-top: -1px;
}
</style>
