<script>
import FveFieldText from "@components/FormEll/FveFieldText";

export default {
  name: "FveFieldShort",
  mixins: [FveFieldText],
  data() {
    return {
      type: "text",
    };
  },
  methods: {
    // eslint-disable-next-line
    validateFunction(str) {
      return "SUCCESS";
    },
  },
};
</script>
