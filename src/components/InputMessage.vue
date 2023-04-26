<template>
    <form action="" class="form-message">
        <textarea v-bind="message" name="message" id="message" cols="30" rows="2" placeholder="Ecriver votre message...">
            
        </textarea>
        <div class="fm-footer">
            <button class="fm-input-img"><img src="@/assets/fi_paperclip.svg" alt=""></button>
            <input type="submit">
        </div>
    </form>
  </template>
  
  <script>
  export default {
    name: 'InputMessage',
    data(){
        return {
            message: ""
        }
    }
  }
  </script>
<style>
.fm-footer {
    display: flex;
    justify-content: space-between;
    margin: 5px 15px 7px;
}
.fm-input-img {
    background: #FFFFFF;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 10px;
    cursor: pointer;
}
.form-message input[type="submit"] {
    background: #000000;
    color: white;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
}
.form-message textarea {
    background: #EAEAEA;
    margin: 7px 7px 0;
    font-size: 16px;
    font-weight: 500;
    max-height: 48px;
    resize: none;
}
.form-message {
    background: #EAEAEA;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    margin: 28px 10px;
}
</style>
  