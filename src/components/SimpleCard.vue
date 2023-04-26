<template>
    <div class="card">
        <slot name="card-content"></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SimpleCard'
  }
  </script>
<style>
.card {
  box-shadow: 5px 5px 40px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding: 20px 10px;
  text-align: center;
  width: 450px;
}
</style>
  