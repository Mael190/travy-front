<template>
    <div class="home">
    </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      content: "",
    };
  },
  mounted() {
    console.log('oui')
    this.$store.dispatch("data/initializeValue");
  },
};
</script>
<style>
.home {
  width: 44%;
}
</style>