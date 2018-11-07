<template>
<div class="overlay" @click="toLogin">
  <image class="icon" src="https://vuejs.org/images/logo.png"/>
</div>
</template>

<script>
const navigator = weex.requireModule('navigator');

export default {
  methods: {
    toLogin() {
      navigator.push({
        url: 'http://10.100.146.15:8081/login.js',
        animated: "true",
      });
    },
  },
};
</script>

<style scoped>
  .overlay {
    position: fixed;
    bottom: 45px;
    left: 45px;
    height: 90px;
    width: 90px;
    border-radius: 45px;
    background-color: rgba(0,0,0,0.7);
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  .icon {
    flex: 1;
    width: 25px;
    height: 25px;
  }
</style>
