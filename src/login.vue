<template>
<div>
  <div class="info">
    <Image class="img" src="http://static2.cnodejs.org/public/images/cnodejs_light.svg" />
    <Text class="info-text">
      国内最专业的 Node.js 开源技术社区
    </Text>
    <Text class="version-text">
      Version: {packageObj.version}
    </Text>
  </div>
  <div class="button">
    <Text class="icon-button-text" @click="login">扫码登陆</Text>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    login() {
      // todo
    },
  },
};
</script>

<style scoped>
  .info {
    flex-direction: 'column';
    align-items: 'center';
  }
  .info-text {
    color: 'rgba(255,255,255,0.5)';
  }
  .img {
    width: 100;
    height: 100;
  }
  .version-text {
    margin-top: 20;
    color: rgba(255,255,255,0.5);
  }
  .button {
    padding-right: 30;
    padding-left: 30;
  }
  .icon-button-text {
    color: rgba(255,255,255,0.9);
  }
</style>
