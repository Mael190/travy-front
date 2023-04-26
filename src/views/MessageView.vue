<template>
  <div class="page-messages">
    <div class="m-header">
      <div :style="{'background-color': user.color}" class="lf-link-avatar">{{Array.from(user.firstname)[0]}}</div>
      {{ user.firstname }} {{ user.lastname }}
    </div>
    <div class="m-messages">
      <MessageBubble
        v-for="message in messages" 
        v-bind:key="message.id"
        :user="user"
        :message="message"
        :isMine="message.senderId === this.$store.state.auth.user.id"
      />
    </div>
    <InputMessage />
  </div>
</template>

<script>
import InputMessage from '@/components/InputMessage.vue';
import MessageBubble from '@/components/MessageBubble.vue';

export default {
  name: 'MessageView',
  computed: {
    messages() {
      const channel = this.$store.state.data.messages.privates.find(prv => prv.id === this.user.id);
      return channel.messages;
    },
    user() {
      const userId = this.$route.params.id;
      return this.$store.state.data.users.find(user => user.id === userId)
    }
  },
  watch: {
    user: {
      immediate: true,
      handler() {
        this.setUserSelected();
      }
    }
  },
  methods: {
    setUserSelected() {
      this.$store.commit('data/setUserSelected', this.user);
    }
  },
  components: {
    InputMessage,
    MessageBubble
}};
</script>
<style>
.page-messages {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.m-messages {
  flex-grow: 1;
}
.m-header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: #DFDFDF 1px solid;
  height: 40px;
  background: #FCFBFC;
}
</style>