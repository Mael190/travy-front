<template>
    <nav class="right-menu">
        <ProfilePanel v-if="getUser" :user="getUser" />
    </nav>
  </template>
  
  <script>
  import ProfilePanel from '@/components/ProfilePanel.vue';

  export default {
    name: 'RightPanel',
    components: {
      ProfilePanel
    },
    data() {
      return {
        user: {"id":"9b3252cb-5b27-4825-94c3-1ad77dc421fd","permission":"admin","firstname":"Romiche","lastname":"Cahier","email":"romiche.cahier@gmail.com","job":"Développeur Junior","avatar":null,"color":"#DDC960","phoneNumber":"0782457343","startTime":"9:00","endTime":"17:00","roles":[{"id":"9d795618-7a6d-4897-9706-665500ba5717","name":"Comex"}]}
      }
    },
    computed:{
      getUser() {
        return this.$store.state.data.userSelected
      }
    }
  }
  </script>
<style>
.right-menu {
    padding: 20px 0px;
    background-color: #FCFBFC;
    border-left: #DFDFDF 1px solid;
    height: calc(100vh - 40px);
    width: 350px;
}

</style>
  