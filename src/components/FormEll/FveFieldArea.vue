<template>
  <fve-field-template>
    <textarea
      :name="name"
      :describe="describe"
      :value="modelValue"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      autocomplete="off"
      @input="inputField"
      @change="inputField"
      @keypress.enter="$emit('keypress-enter')"
    ></textarea>
  </fve-field-template>
</template>

<script>
import FveFieldMixin from "@components/FormEll/Mixin/FveFieldMixin";

export default {
  name: "FveFieldArea",
  mixins: [FveFieldMixin],
  props: {
    modelValue: {
      type: String,
      default: "",
    },
  },
  methods: {
    prepareValue($event) {
      return $event.target.value;
    },
    isEmpty(value) {
      return value === "";
    },
    // eslint-disable-next-line
    validateFunction(str) {
      return "SUCCESS";
    },
  },
};
</script>
