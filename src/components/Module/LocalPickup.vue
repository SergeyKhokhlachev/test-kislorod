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
  padding: 24px 24px 26px;
  border: 1px solid #dde3e8;
  border-radius: 3px;
  &__address {
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 500;
  }
  &__date {
    margin-bottom: 14px;
    color: $text-color--muted;
    font-size: 13px;
  }
  &__working {
    margin-bottom: 22px;
    font-size: 12px;
    span {
      color: $text-color--muted;
    }
  }
  &__btn {
    display: flex;
    .btn {
      margin-right: 24px;
      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>
