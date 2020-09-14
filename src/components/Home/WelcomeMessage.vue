<template>
  <div>
    <h3>{{ name }}, {{ $t('homeTitle') }}</h3>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
};
</script>
