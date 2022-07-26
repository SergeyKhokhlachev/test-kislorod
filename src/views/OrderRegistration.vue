<template>
  <div class="container">
    <h1 class="page-title">Оформление заказа</h1>
    <div class="page-box">
      <main class="page-box__main">
        <order-form ref="form" />
      </main>
      <div class="page-box__slot">
        <div class="page-box__flex">
          <h3 class="sub-title">Товары</h3>
          <span
            :class="['link', { active: productsShown }]"
            @click="productsShown = !productsShown"
          >
            {{ shownLink }}
            <img svg-inline src="@img/icons/angle.svg" alt="icon" />
          </span>
        </div>
        <transition name="fade">
          <div v-show="productsShown" class="product-tabs">
            <product-card
              v-for="product in products"
              v-bind="product"
              @increase="productQuantity"
              @reduce="productQuantity"
              @remove="productRemove"
              :key="product.id"
            />
          </div>
        </transition>
      </div>
      <aside class="page-box__assaide">
        <shopping-cart />
      </aside>
    </div>
    <fve-checkbox id="checkbox" v-model="checkbox">
      <label for="checkbox" class="ch-label">Я согласен на обработку </label>
      <a href="/" class="link">персональных данных</a>
    </fve-checkbox>
    <button
      type="button"
      class="btn btn--prime btn--lg"
      :disabled="!checkbox"
      @click.prevent="submit"
    >
      Оформить заказ
    </button>
  </div>
</template>

<script>
import OrderForm from "@components/Form/OrderForm";
import ShoppingCart from "@components/Module/ShoppingCart";
import ProductCard from "@components/Module/ProductCard";
import FveCheckbox from "@components/FormEll/FveCheckbox";

export default {
  name: "OrderRegistration",
  components: {
    OrderForm,
    ShoppingCart,
    ProductCard,
    FveCheckbox,
  },
  data() {
    return {
      productsShown: true,
      checkbox: true,
      products: [
        {
          id: 1,
          name: "Рюкзак Xiaomi Blade, серый",
          image: {
            base: [
              require("@img/temp/product-1.png"),
              require("@img/temp/product-1@2x.png"),
            ],
            webp: [
              require("@img/temp/product-1.webp"),
              require("@img/temp/product-1@2x.webp"),
            ],
          },
          color: "Серый",
          article: "123456789",
          quantity: 2,
          priceNew: 2900,
          priceOld: 4700,
        },
        {
          id: 2,
          name: "Ботинки для беговых лыж Marax M-350 Active серебро",
          image: {
            base: [
              require("@img/temp/product-2.png"),
              require("@img/temp/product-2@2x.png"),
            ],
            webp: [
              require("@img/temp/product-2.webp"),
              require("@img/temp/product-2@2x.webp"),
            ],
          },
          color: "Серебро",
          article: "123456789",
          quantity: 1,
          priceNew: 1620,
          priceOld: 1950,
        },
      ],
    };
  },
  computed: {
    shownLink() {
      return this.productsShown ? "Свернуть" : "Развернуть";
    },
  },
  methods: {
    submit() {
      this.$refs.form.submit();
    },
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
  margin-bottom: 45px;
  @include respond(screen-md) {
    margin-bottom: 60px;
  }
  @include respond(screen-lg) {
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: auto 430px;
    grid-template-rows: repeat(2, auto);
    gap: 0 30px;
    margin-bottom: 40px;
  }
  @include respond(screen-xl) {
    grid-template-columns: auto 460px;
    gap: 0 128px;
  }
  &__slot {
    @include respond(screen-lg) {
      grid-column: span 2;
      grid-row: 2 / 2;
      max-width: 754px;
    }
  }
  &__flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
    @include respond(screen-md) {
      justify-content: flex-start;
      margin-bottom: 30px;
    }
    .sub-title {
      margin-bottom: 0;
      margin-right: 40px;
      @include respond(screen-lg) {
        margin-right: 46px;
      }
    }
    .link {
      svg {
        margin-left: 8px;
        fill: $color-main;
        transform: rotateX(180deg);
      }
      &.active {
        svg {
          transform: rotateX(0);
        }
      }
    }
  }
}

.product-tabs {
  margin-bottom: 60px;
  @include respond(screen-lg) {
    margin-bottom: 0;
  }
}
.product-card {
  margin-bottom: 14px;
  @include respond(screen-md) {
    margin-top: -1px;
    margin-bottom: 0;
  }
}

.btn {
  width: 100%;
  @include respond(screen-lg) {
    width: 100%;
    max-width: 250px;
  }
}

.fve-checkbox {
  margin-bottom: 26px;
  @include respond(screen-md) {
    margin-bottom: 40px;
  }
  @include respond(screen-lg) {
    margin-bottom: 80px;
  }
  .link {
    font-size: 13px;
  }
}

.ch-label {
  @include hover-supported() {
    cursor: pointer;
  }
}

.fade-enter-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
