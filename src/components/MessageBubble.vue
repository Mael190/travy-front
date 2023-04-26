<template>
    <div :class="isMine? 'message-row-mine' : 'message-row'">
        <div :style="{'background-color': user.color}" class="m-r-avatar">{{Array.from(user.firstname)[0]}}</div>
        <div class="message-bubble">
            <p>{{message.content}}</p>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'MessageBubblbe',
        props: {
            user: Object,
            message: Object,
            isMine: Boolean
        }
    };
</script>
<style>
.message-row-mine {
    display: flex;
    align-items: end;
    margin: 5px 7px;
    flex-direction: row-reverse;
}
.m-r-avatar {
    width: 18px;
    height: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    border-radius: 50px;
    font-size: 11px;
}
.message-row {
    display: flex;
    align-items: end;
    margin: 5px 7px;
}
.message-bubble {
    background-color: #F4F4F6;
    display: inline-block;
    border-radius: 10px 10px 10px 0px;
    padding: 3px 10px;
    margin-left: 5px;
    margin-right: 5px;
}
</style>
      