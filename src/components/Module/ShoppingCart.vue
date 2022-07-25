<template>
  <div class="shopping-cart">
    <h3 class="sub-title">Ваша корзина</h3>
    <div class="shopping-cart__promo">
      <fve-field-text placeholder="Введите промо-код" v-model="code" />
      <button type="button" class="btn btn--outline btn--sm">Применить</button>
    </div>
    <div class="shopping-cart__hr"></div>
    <div class="shopping-cart__scroll">
      <perfect-scrollbar>
        <product-vue
          v-for="product in products"
          v-bind="product"
          :key="product.id"
        />
      </perfect-scrollbar>
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
import FveFieldText from "@components/FormEll/FveFieldText";

export default {
  name: "ShoppingCart",
  components: {
    ProductVue,
    FveFieldText,
  },
  props: {},
  data() {
    return {
      code: "",
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
        {
          id: 3,
          image: require("@img/temp/product-1.png"),
          name: "Рюкзак Xiaomi Blade, серый",
          price: 1450,
        },
        {
          id: 4,
          image: require("@img/temp/product-3.png"),
          name: "Часы CASIO W-800,  водонепроницаемые",
          price: 3600,
        },
        {
          id: 5,
          image: require("@img/temp/product-1.png"),
          name: "Рюкзак Xiaomi Blade, серый",
          price: 1450,
        },
        {
          id: 6,
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
  padding: 24px 24px 32px;
  background-color: #f8fafb;
  @include respond(screen-md) {
    padding: 30px 50px 40px;
  }
  @include respond(screen-lg) {
    padding: 62px 48px 44px;
  }
  .sub-title {
    margin-bottom: 24px;
    @include respond(screen-md) {
      margin-bottom: 30px;
    }
    @include respond(screen-lg) {
      margin-bottom: 42px;
    }
  }
  .product-vue {
    margin-bottom: 20px;
  }
  &__hr {
    height: 1px;
    background-color: #e4eaee;
  }
  &__promo {
    margin-bottom: 20px;
    @include respond(screen-md) {
      display: flex;
      margin-bottom: 30px;
    }
    @include respond(screen-lg) {
      margin-bottom: 24px;
    }
    .btn {
      width: 100%;
      margin-top: 10px;
      @include respond(screen-md) {
        width: auto;
        margin-top: 0;
        margin-left: 40px;
      }
      @include respond(screen-lg) {
        width: auto;
        margin-left: 20px;
      }
    }
  }
  &__scroll {
    margin: 20px 0;
    @include respond(screen-lg) {
      margin: 34px 0;
    }
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
    padding-top: 18px;
    font-size: 16px;
    font-weight: 500;
    @include respond(screen-md) {
      padding-top: 20px;
    }
    @include respond(screen-lg) {
      padding-top: 24px;
    }
  }
}

:deep(.fve-field) {
  width: 100%;
  input {
    height: 36px;
    padding: 10px 16px;
    font-size: 12px;
  }
  .fve-field__placeholder {
    height: 36px;
    padding: 0 16px;
    font-size: 12px;
  }
}

:deep(.ps) {
  height: 262px;
  @include respond(screen-lg) {
    height: 304px;
  }
}
</style>
