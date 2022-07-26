<template>
  <div class="fve-checkbox">
    <label class="fve-checkbox__box">
      <input
        v-show="false"
        type="checkbox"
        :id="id"
        :name="name"
        :checked="modelValue"
        :required="required"
        :readonly="readonly"
        :disabled="disabled"
        @change="update"
      />
      <div class="fve-checkbox__vue">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11"
          height="9"
          viewBox="0 0 11 9"
        >
          <path
            d="M4,9.3a.65.65,0,0,1-.5-.23l-3.37-4a.65.65,0,1,1,1-.84L4,7.64,10.15.24a.65.65,0,0,1,1,.83l-6.63,8A.8.8,0,0,1,4,9.3Z"
          />
        </svg>
      </div>
    </label>
    <div class="fve-checkbox__slot">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "FveCheckbox",
  props: {
    id: { type: [String, Number], default: "" },
    name: { type: String, default: "" },
    modelValue: { type: Boolean, default: false },
    readonly: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    required: { type: Boolean, default: false },
  },
  methods: {
    update($event) {
      this.$emit("update:modelValue", $event.target.checked);
    },
  },
};
</script>

<style lang="scss" scoped>
.fve-checkbox {
  display: flex;
  &__box {
    margin-right: 14px;
  }
  &__vue {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -4px;
    width: 24px;
    height: 24px;
    border: 1px solid $color-main;
    border-radius: 3px;
    @include hover-supported() {
      cursor: pointer;
    }
    svg {
      fill: #ffffff;
    }
  }
  &__slot {
    color: $text-color--muted;
    font-size: 13px;
  }
  input:checked + .fve-checkbox__vue {
    background-color: $color-main;
  }
}
</style>
