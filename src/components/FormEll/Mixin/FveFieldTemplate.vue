<template>
  <label :class="['fve-field', $parent.elementClass]">
    <slot />
    <div class="fve-field__error">
      {{ $parent.error }}
    </div>
    <div v-if="$parent.placeholder" class="fve-field__placeholder">
      {{ $parent.placeholder }}
      <span class="fve-field__require">*</span>
    </div>
    <div v-if="$parent.describe" class="fve-field__describe">
      {{ $parent.describe }}
    </div>
  </label>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.fve-field {
  position: relative;
  display: block;
  padding-bottom: 0;
  &__placeholder {
    display: none;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 42px;
    padding: 0 18px;
    color: $text-color--muted;
    cursor: text;
    user-select: none;
    @include respond(screen-md) {
      height: 52px;
      padding: 0 24px;
    }
  }
  &__require {
    display: none;
    margin-left: 2px;
    color: $color-error;
  }
  &__describe {
    margin-top: 6px;
    font-size: 10px;
    color: $text-color--muted;
    @include respond(screen-md) {
      font-size: 12px;
    }
  }
  &__error {
    position: absolute;
    top: 42px;
    left: 0;
    margin-top: 2px;
    padding: 6px 10px;
    font-size: 11px;
    color: $color-error;
    background-color: $color-disabled;
    box-shadow: 0 2px 6px 1px rgba($color: $text-color--muted, $alpha: 0.25);
    visibility: hidden;
    opacity: 0;
    z-index: 10;
    @include respond(screen-md) {
      top: 52px;
    }
    &:before {
      content: "";
      position: absolute;
      left: 10px;
      bottom: 100%;
      border: 6px solid transparent;
      border-bottom: 8px solid $color-disabled;
    }
  }
  :deep(input),
  :deep(textarea) {
    width: 100%;
    padding: 13px 18px;
    border: 1px solid #dde3e8;
    background-color: #ffffff;
    border-radius: 3px;
    @include respond(screen-md) {
      padding: 15px 24px;
    }
    &:focus {
      outline: 1px solid $color-main;
    }
  }
  :deep(input) {
    height: 42px;
    @include respond(screen-md) {
      height: 52px;
    }
  }
  :deep(textarea) {
    height: 60px;
    resize: none;
    @include respond(screen-md) {
      height: 100px;
    }
  }
  &.has-error {
    :deep(input),
    :deep(textarea) {
      border: 1px solid $color-error;
      &:focus + .fve-field__error {
        visibility: visible;
        opacity: 1;
      }
    }
  }
  &.is-require {
    .fve-field__require {
      display: block;
    }
  }
  &.shown-placeholder {
    .fve-field__placeholder {
      display: flex;
    }
  }
}
</style>
