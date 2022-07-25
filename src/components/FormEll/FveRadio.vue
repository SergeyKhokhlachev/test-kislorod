<template>
  <label class="fve-radio">
    <div class="fve-radio__box">
      <input
        v-show="false"
        type="radio"
        :name="name"
        :value="value"
        :checked="modelValue === value"
        :required="required"
        :readonly="readonly"
        :disabled="disabled"
        @change="update"
      />
      <div class="fve-radio__vue"></div>
    </div>
    <div class="fve-radio__slot">
      <slot />
    </div>
  </label>
</template>

<script>
export default {
  name: "FveRadio",
  props: {
    name: { type: String, default: "" },
    value: { type: String, default: "" },
    modelValue: { type: String, default: "" },
    readonly: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
  },
  methods: {
    update($event) {
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.fve-radio {
  display: flex;
  @include hover-supported() {
    cursor: pointer;
  }
  &__box {
    margin-right: 11px;
  }
  &__vue {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -3px;
    width: 24px;
    height: 24px;
    border: 1px solid $color-main;
    border-radius: 50%;
    &:before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: $color-main;
      opacity: 0;
    }
  }
  input:checked + .fve-radio__vue {
    &:before {
      opacity: 1;
    }
  }
}
</style>
