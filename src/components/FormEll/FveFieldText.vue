<template>
  <fve-field-template>
    <input
      :type="type"
      :name="name"
      :value="modelValue"
      :required="required"
      :readonly="readonly"
      :disabled="disabled"
      autocomplete="off"
      @input="inputField"
      @change="inputField"
      @keypress.enter="$emit('keypress-enter')"
    />
  </fve-field-template>
</template>

<script>
import FveFieldMixin from "@components/FormEll/Mixin/FveFieldMixin";

export default {
  name: "FveFieldText",
  mixins: [FveFieldMixin],
  props: {
    modelValue: {
      type: [String, Number],
      default: "",
    },
  },
  data() {
    return {
      type: "text",
    };
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
      if (str.length < 2 || str.length > 100) {
        return "Поле должно содержать от 2 до 100 символов";
      }
      return "SUCCESS";
    },
  },
};
</script>
