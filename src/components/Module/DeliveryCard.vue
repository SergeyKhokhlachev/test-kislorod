<template>
  <div class="delivery-card">
    <div class="delivery-card__box">
      <div class="delivery-card__main">{{ name }}</div>
      <div class="delivery-card__sub">{{ text }}</div>
    </div>
    <div class="delivery-card__box">
      <div class="delivery-card__main">{{ coast }}</div>
      <div class="delivery-card__sub">{{ date }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeliveryCard",
  props: {
    id: [String, Number],
    type: String,
    name: String,
    text: String,
    date: String,
    coast: String,
  },
};
</script>

<style lang="scss" scoped>
.delivery-card {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid #dde3e8;
  border-radius: 3px;
  background-color: #ffffff;
  transition: all 0.2s ease-in-out;
  @include hover-supported() {
    background-color: $color-disabled;
    cursor: pointer;
  }
  @include respond(screen-md) {
    padding: 18px 24px;
  }
  &__box {
    &:last-child {
      text-align: right;
    }
  }
  &__main {
    margin-bottom: 8px;
    font-size: 14px;
    @include respond(screen-md) {
      font-size: 16px;
    }
  }
  &__sub {
    color: $text-color--muted;
    font-size: 11px;
    @include respond(screen-md) {
      font-size: 13px;
    }
  }
  &.active {
    border-color: $color-main;
  }
}
</style>
