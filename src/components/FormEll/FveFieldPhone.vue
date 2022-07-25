<script>
import FveFieldText from "@components/FormEll/FveFieldText";

export default {
  name: "FveFieldPhone",
  mixins: [FveFieldText],
  data() {
    return {
      type: "tel",
    };
  },
  methods: {
    validateFunction(str) {
      // eslint-disable-next-line
      const re = /^[0-9+\(\)#\.\s\/ext-]+$/;
      return re.test(str) ? "SUCCESS" : "Проверьте номер введенного телефона";
    },
  },
};
</script>
