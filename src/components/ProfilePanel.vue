<template>
<div class="profile-panel">
    <div class="pp-header">
        <div :style="{'background-color': user.color}" class="pp-link-avatar">{{Array.from(user.firstname)[0]}}</div>
        <p class="pp-name">
            {{ user.firstname }} {{ user.lastname }}
        </p>
        <p class="pp-poste">
            {{ user.job }}
        </p>
    </div>
    <div class="pp-content">
        <div class="pp-c-field">
            <div>
                <img src="@/assets/fi_at-sign.svg" alt="">
                <p class="pp-c-f-title">Email</p>
            </div>
            <p>{{ user.email }}</p>
        </div>
        <div class="pp-c-field">
            <div>
                <img src="@/assets/fi_phone.svg" alt="">
                <p class="pp-c-f-title">Numéro</p>
            </div>
            <p>{{ user.phoneNumber.replace(/(\d{2})(?=\d)/g, "$1 ") }}</p>
        </div>
        <div class="pp-c-field">
            <div>
                <img src="@/assets/fi_sunset.svg" alt="">
                <p class="pp-c-f-title">Horraire</p>
            </div>
            <p>{{ user.startTime + " | "+ user.endTime }}</p>
        </div>
        <div class="pp-c-field">
            <div>
                <img height="20" src="@/assets/fi_users.svg" alt="">
                <p class="pp-c-f-title">Equipe</p>
            </div>
            <div v-for="role in user.roles" v-bind:key="role.id" class="pp-c-f-team">
               <p> {{ role.name }}</p>
            </div>
        </div>
    </div>
</div>
</template>
  
  <script>
  export default {
    name: 'ProfilePanel',
    props: {
        user: Object
    }
  };
  </script>
<style>
.pp-c-field>div:first-of-type {
    display: flex;
    flex-direction: row;
    min-width: 85px;
    align-items: center;
}
.pp-c-f-team {
    background-color: #EFEFEF;
    padding: 1px 2px;
    font-size: 13px;
    border-radius: 4px;
    margin: 2px;
}
.pp-content {
    margin: 10px 0 0 20px;
}
.pp-c-f-title {
    color: #535353;
    margin-left: 4px;
}
.pp-c-field {
    display: flex;
    flex-direction: row;
    font-size: 15px;
    margin-top: 5px;
}
.pp-poste {
    font-weight: 500;
    font-size: 15px;
    color: #535353;
    text-align: center;
}
.pp-header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.pp-name {
    font-size: 18px;
    font-weight: 600;
}
.pp-link-avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 35px;
    font-size: 20px;
    font-weight: 600;
    color: white;
    border-radius: 40px;
    margin-right: 10px;
}
</style>
  