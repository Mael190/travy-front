<template>
    <nav class="left-menu">
        <div class="lf-profile">
            <div class="lfp-avatar">E</div>
            <div class="lfp-name">Enzo Grosrec</div>
        </div>
        <div class="lf-organisations">
            <DropDown :options="companies" :defaultOption="0"/>
        </div>
        <div class="lf-links">
            <router-link to="/agenda" class="lf-link" :exact-active-class="'active'">
                <img src="@/assets/fi_calendar.svg" alt="">
                Agenda
            </router-link>
            <router-link to="/search" class="lf-link" :exact-active-class="'active'">
                <img src="@/assets/fi_search.svg" alt="">
                Rechercher
            </router-link>
            <router-link to="/todo" class="lf-link" :exact-active-class="'active'">
                <img src="@/assets/fi_edit.svg" alt="">
                Todo
            </router-link>
            <router-link to="/settings" class="lf-link" :exact-active-class="'active'">
                <img src="@/assets/fi_calendar.svg" alt="">
                Paramètres
            </router-link>
        </div>
        <div class="lf-chan">
            <div class="lfc-title">Groupes de discussion</div>
            <div v-for="channel in discussionsChannel" v-bind:key="channel.id" class="lfc-link">
                <router-link :to="{ name: 'channel', params: {id: channel.id}}" class="lf-link" :exact-active-class="'active'">
                    <div :style="{'background-color': channel.color}" class="lf-link-avatar">{{Array.from(channel.name)[0]}}</div>
                    {{channel.name}}
                </router-link>
            </div>
        </div>
        <div class="lf-chan">
            <div class="lfc-title">Messages directs</div>
            <div v-for="channel in usersChannel" v-bind:key="channel.id" class="lfc-link">
                <router-link :to="{ name: 'message', params: {id: channel.id}}" class="lf-link" :exact-active-class="'active'">
                    <div :style="{'background-color': channel.user.color}" class="lf-link-user-avatar">{{Array.from(channel.user.firstname)[0]}}</div>
                    {{channel.user.firstname}} {{channel.user.lastname}}
                </router-link>
            </div>
        </div>
       <ul></ul>
    </nav>
  </template>
  
  <script>
  import DropDown from '@/components/DropDown.vue';
  export default {
    name: 'LeftMenu',
    data() {
        return {
            companies: [{id: 1, name: 'Devard'}, {id:2, name: 'Epsi'}]
        }
    },
    computed: {
        isAuth () {  return true },
        discussionsChannel () {
            return this.$store.state.data.channels
        },
        usersChannel () {
            const privates = this.$store.state.data.messages.privates;
            if (privates) {
                return privates.map(channel => {
                    const channelCopy = {...channel};
                    const userCopy = {...this.$store.state.data.users.find(user => user.id === channel.id)};
                    channelCopy.user = userCopy;
                    return channelCopy;
                });
            } else {
                return [];
            }
        }
    },
    components: {
        DropDown
    },
  }
  </script>
<style>
.lf-chan > .lfc-link > .active:hover {
    background: #e1e0e5
}
.lf-chan > .lfc-link > .active {
    background: #ecebef
}
.left-menu > .lf-links > .active:hover {
    background: #e1e0e5
}
.left-menu > .lf-links > .active {
    background: #ecebef
}
.lf-chan {
    border-top: #DFDFDF 1px solid;
}
.lf-link-user-avatar {
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    color: white;
    text-align: center;
    font-size: 15px;
    margin-right: 15px;
}
.lf-link-avatar {
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    color: white;
    text-align: center;
    font-size: 15px;
    margin-right: 15px;
}
.lfc-title {
    font-weight: 500;
    font-size: 12px;
    color: #686769;
    margin-bottom: 5px;
}
.lf-links img {
    margin-right: 15px;
}
.lf-link {
    display: flex;
    flex-direction: row;
    font-weight: 400;
    font-size: 17px;
    line-height: 25px;
    text-decoration: none;
    color: black;
    padding: 5px 10px;
    border-radius: 5px;
    margin: 2px;
    align-items: center;
}
.lf-link:hover {
    background: #F1F0F3;
}

.lf-links {
    display: flex;
    flex-direction: column;
    padding-bottom: 5px;
    padding-top: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
}

.lf-organisations {
    position: relative;
}
.left-menu > div {
    padding: 5px 10px;
}
.left-menu {
    padding: 20px 0px;
    background-color: #FCFBFC;
    border-right: #DFDFDF 1px solid;
    height: calc(100vh - 40px);
    width: 300PX;
}
.lf-profile {
    display: flex;
    justify-content: center;
    align-items: center;
}
.lfp-avatar {
    margin-right: 10px;
    font-size: 25;
    width: 35px;
    height: 35px;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background: #008bc6;
}
.lfp-name {
    font-family: 'Red Hat Display';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
}
</style>
  