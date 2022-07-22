<template>
  <div class="container">
    <h1 class="page-title">Оформление заказа</h1>
    <div class="page-box">
      <main class="page-box__main">
        <order-form />
      </main>
      <div class="page-box__slot">
        <h3 class="sub-title">Товары</h3>
        <product-card />
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
    return {};
  },
};
</script>

<style lang="scss" scoped>
.page-box {
  margin-bottom: 40px;
  @include respond(screen-lg) {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: auto 300px;
    grid-template-rows: repeat(2, 1fr);
    gap: 30px;
  }
  &__slot {
    @include respond(screen-lg) {
      grid-column: span 2;
      grid-row: 2 / 2;
    }
  }
}
</style>
