<template>
  <div class="container">
  <Logo />
  <SimpleCard >
    <template v-slot:card-content>
      <h1>Connexion</h1>
      <form class="form" @submit="handleLogin">
        <div class="input_wrap">
          <input v-model="email" type="text" required />
          <label>Adresse mail</label>
        </div>
        <div class="input_wrap">
          <input v-model="password" type="password" required />
          <label>Mot de passe</label>
        </div>
        <input class="btn black" type="submit">
      </form>
    </template>
  </SimpleCard>
  </div>
</template>

<script>
import Logo from '../components/BaseLogo.vue';
import SimpleCard from '../components/SimpleCard.vue';

export default {
  name: 'LoginView',
  data() {
    return {
      email: '',
      password: '',
      loading: false
    }
  },
  methods: {
    handleLogin() {
      this.loading = true
      const user = { email: this.email, password: this.password };

      this.$store.dispatch("auth/login", user)
      .then(() => {
        this.$store.dispatch("data/initializeValue");
        this.$router.push("/home");
        },
      () => {
        this.loading = false;
        }
      );
    }
  },
  components: {
    Logo,
    SimpleCard
  }
}
</script>
<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  display: flex;
  flex-direction: column;
  width: 80%;
}

input[type="text"], input[type="password"] {
  color: #000000;
  font-size: 20px;
  padding-left: 5px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #B6B3B3; 
  font-weight: 400;
  width: 100%;
  
}
input:focus + label, input:valid + label{
  font-size: 12px;
  color: #B6B3B3;
  top: -14px;
  left: 6px;
  padding: 0px 5px 0px 5px;
}
input:focus, button:focus-visible {
  outline: none;
}

.input_wrap {
  width:auto;
  height:auto;
  position:relative;
  margin: 22px 0;
  font-size: 20px;
}

.input_wrap label {
  font-size:20px;
  color: #938E8E;
  padding: 14px 6px;
  position: absolute;
  top: -18px;
  left: 0;
  transition:0.2s ease all; 
  -moz-transition:0.2s ease all; 
  -webkit-transition:0.2s ease all;
  pointer-events: none;

}
</style>