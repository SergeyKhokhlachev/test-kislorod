<template>
  <div class="local-pickup">
    <div class="local-pickup__address">{{ address }}</div>
    <div class="local-pickup__date">{{ date }}</div>
    <div class="local-pickup__working">
      Режим работы: <span>{{ working }}</span>
    </div>
    <div class="local-pickup__btn">
      <button type="button" class="btn btn--outline btn--sm">Подробнее</button>
      <button type="button" class="btn btn--outline btn--sm">
        Выбрать другой
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocalPickup",
  props: {
    address: String,
    date: String,
    working: String,
  },
};
</script>

<style lang="scss" scoped>
.local-pickup {
  padding: 20px 24px 26px;
  border: 1px solid #dde3e8;
  border-radius: 3px;
  @include respond(screen-md) {
    padding: 24px 24px 26px;
  }
  &__address {
    margin-bottom: 8px;
    font-size: 14px;
    font-weight: 500;
    @include respond(screen-md) {
      margin-bottom: 4px;
      font-size: 16px;
    }
  }
  &__date {
    margin-bottom: 12px;
    color: $text-color--muted;
    font-size: 11px;
    @include respond(screen-md) {
      margin-bottom: 14px;
      font-size: 13px;
    }
  }
  &__working {
    margin-bottom: 16px;
    font-size: 11px;
    @include respond(screen-md) {
      margin-bottom: 22px;
      font-size: 12px;
    }
    span {
      color: $text-color--muted;
    }
  }
  &__btn {
    @include respond(screen-md) {
      display: flex;
    }
    .btn {
      width: 100%;
      margin-bottom: 10px;
      @include respond(screen-md) {
        width: auto;
        margin-bottom: 0;
        margin-right: 24px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
  }
}
</style>
