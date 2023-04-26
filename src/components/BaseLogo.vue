<template>
    <div class="logo">
        <img src="@/assets/logo.svg" alt="Travy">
        <p>Travy</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BaseLogo',
    props: {
      msg: String
    }
  }
  </script>
<style>
.logo {
    font-weight: 700;
    font-size: 50px;
    display: flex;
    flex-direction: row;
}
</style>
  