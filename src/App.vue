<template>
  <LeftMenu />
  <div class="app-container">
    <router-view/>
  </div>
  <RightPanel />
</template>

<script>
import LeftMenu from './components/LeftMenu.vue';
import RightPanel from './components/RightPanel.vue';

export default {
    name: "App",
    mounted() {
        if (!this.$store.state.data.isLoaded) {
            this.$store.dispatch("data/initializeValue");
        }
        if (this.$store.state.auth.user && !this.$store.state.dataSocket.connected) {
          this.$store.dispatch("dataSocket/connect");
        }
    },
    components: { LeftMenu, RightPanel }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600&family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600&display=swap');

textarea:focus, input:focus {
  outline: none;
}
.app-container {
  width: calc(100vw - 528px);
}

body {
  font-family: 'Red Hat Display', sans-serif;
  background: white;
  margin: 0;
}
input[type="text"]:focus {outline:none;}

input[type="submit"], button, textarea {
  border: none;
  font-family: 'Red Hat Display', sans-serif;
}
p {
  margin: 3px;
}

#app {
  display: flex;
}

.btn {
  border: none;
  border-radius: 10px;
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 33px;
  color: #FFFFFF;
  background: black;
  padding: 8px;
  transition-duration: 250ms;
  margin-top: 20px;
}

.btn:hover {
  transform: scale(1.02);
  cursor: pointer;
}
</style>
