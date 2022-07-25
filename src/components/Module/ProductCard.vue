<template>
  <div class="product-card">
    <div class="product-card__previw">
      <img :src="image" class="product-card__img" alt="photo" />
    </div>
    <div class="product-card__body">
      <div class="product-card__content">
        <router-link to="/" class="product-card__name">
          {{ name }}
        </router-link>
        <ul class="product-info">
          <li class="product-info__ell">
            Артикул: <span>{{ article }}</span>
          </li>
          <li class="product-info__ell">
            Цвет: <span>{{ color }}</span>
          </li>
        </ul>
      </div>
      <div class="product-card__control">
        <div class="product-price">
          <span class="product-price__main">{{ priceNewFormat }}</span>
          <span class="product-price__sub">{{ priceOldFormat }}</span>
        </div>
        <div class="product-count">
          <button
            type="button"
            class="product-count__btn"
            @click="reduce"
            :disabled="single"
          >
            <img svg-inline src="@img/icons/minus.svg" alt="-" />
          </button>
          <input
            type="text"
            class="product-count__field"
            :value="quantity"
            readonly
          />
          <span v-if="!single" class="product-count__single">
            {{ priceSingleFormat }}
          </span>
          <button type="button" class="product-count__btn" @click="increase">
            <img svg-inline src="@img/icons/plus.svg" alt="+" />
          </button>
        </div>
        <button type="button" class="product-card__remove" @click="remove">
          <img svg-inline src="@img/icons/close.svg" alt="x" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    id: [String, Number],
    name: String,
    image: String,
    color: String,
    article: String,
    quantity: {
      type: Number,
      default: 1,
    },
    priceNew: {
      type: Number,
      default: 0,
    },
    priceOld: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    single() {
      return this.quantity <= 1;
    },
    priceNewFormat() {
      return `${this.priceFormat(this.priceNew * this.quantity)} руб.`;
    },
    priceOldFormat() {
      return `${this.priceFormat(this.priceOld * this.quantity)} руб.`;
    },
    priceSingleFormat() {
      return `${this.priceFormat(this.priceNew)} руб./шт.`;
    },
  },
  methods: {
    priceFormat(num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
    increase() {
      this.$emit("increase", this.id, this.quantity + 1);
    },
    reduce() {
      this.$emit("reduce", this.id, this.quantity - 1);
    },
    remove() {
      this.$emit("remove", this.id);
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  position: relative;
  display: flex;
  padding: 10px 10px 34px;
  border: 1px solid #dde3e8;
  border-radius: 3px;
  @include respond(screen-md) {
    position: static;
    padding: 21px 22px 23px;
  }
  &__body {
    @include respond(screen-md) {
      display: flex;
      width: 100%;
    }
  }
  &__previw {
    flex-shrink: 0;
    width: 73px;
    height: 73px;
    margin-right: 12px;
    @include respond(screen-md) {
      width: 92px;
      height: 92px;
      margin-right: 22px;
    }
  }
  &__img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  &__content {
    width: 100%;
    padding-right: 50px;
    @include respond(screen-md) {
      padding-right: 0;
    }
  }
  &__name {
    display: inline-block;
    max-width: 250px;
    margin-top: 4px;
    margin-bottom: 8px;
    font-size: 13px;
    @include respond(screen-md) {
      margin-top: 0;
      margin-bottom: 10px;
      font-size: 16px;
    }
  }
  &__control {
    @include respond(screen-sm) {
      display: flex;
      align-items: center;
      flex-shrink: 0;
    }
    @include respond(screen-md) {
      justify-content: flex-end;
    }
    .product-count {
      @include respond(screen-sm) {
        margin-left: 40px;
      }
      @include respond(screen-md) {
        margin-right: 60px;
      }
    }
  }
  &__remove {
    position: absolute;
    top: 18px;
    right: 18px;
    padding: 4px;
    border: none;
    background-color: inherit;
    @include respond(screen-md) {
      position: static;
    }
    &:active,
    &:focus {
      outline: none;
    }
    svg {
      fill: $text-color;
      transition: fill 0.2s ease-in-out;
    }
    @include hover-supported() {
      cursor: pointer;
      svg {
        fill: $color-error;
      }
    }
    &:active {
      svg {
        fill: $color-error;
      }
    }
  }
}

.product-info {
  margin-bottom: 16px;
  @include respond(screen-md) {
    margin-bottom: 0;
  }
  &__ell {
    margin-bottom: 6px;
    color: $text-color--muted;
    font-size: 12px;
    @include respond(screen-md) {
      font-size: 13px;
    }
    span {
      color: $text-color;
    }
  }
}

.product-price {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  @include respond(screen-sm) {
    margin-bottom: 0;
  }
  &__main {
    font-size: 16px;
  }
  &__sub {
    color: $text-color--muted;
    font-size: 13px;
    text-decoration: line-through;
  }
}

.product-count {
  position: relative;
  display: flex;
  width: 110px;
  margin-bottom: 16px;
  border: 1px solid #dde3e8;
  border-radius: 3px;
  @include respond(screen-md) {
    width: auto;
  }
  &__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background-color: #f8fafb;
    border: none;
    transition: background-color 0.2s ease-in-out;
    svg {
      transition: opacity 0.2s ease-in-out;
    }
    &:active,
    &:focus {
      outline: none;
    }
    @include hover-supported() {
      background-color: #ededed;
      cursor: pointer;
    }
    &:active {
      background-color: #d6d6d6;
    }
    &[disabled] {
      background-color: $color-disabled;
      cursor: default;
      svg {
        opacity: 0.2;
      }
    }
  }
  &__field {
    width: 38px;
    height: 35px;
    font-size: 14px;
    text-align: center;
    border: none;
    border-left: 1px solid #dde3e8;
    border-right: 1px solid #dde3e8;
    &:active,
    &:focus {
      outline: none;
    }
  }
  &__single {
    position: absolute;
    left: 0;
    top: 100%;
    display: inline-block;
    width: 100%;
    margin-top: 4px;
    color: $text-color--muted;
    font-size: 12px;
    text-align: center;
  }
}
</style>
