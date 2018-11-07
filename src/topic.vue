<template>
  <div class="tabcontainer">
    <div class="tabbar">
      <div class="tab active" :style="{ left: activeTab * 150 + 'px'}"></div>
      <div v-for="(tab, i) in tabs" :key="i" class="tab" @click="toggle(i)">
        <text class="title">{{tab.title}}</text>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      activeTab: 0,
    };
  },
  computed: {
    panels() {
      return this.tabs.map(tab => ({ content: tab.title }));
    },
  },
  methods: {
    toggle(i) {
      this.activeTab = i;
      this.$emit('toggle', this.tabs[i].tab);
    },
  },
};
</script>

<style scoped>
  .tabcontainer {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
  },
  .tabbar {
    flex-direction: row;
    background-color: #444;
  }
  .tab {
    height: 120px;
    width: 150px;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }
  .active {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #333;
    transition: left 0.2s ease-in-out;
  }
  .title {
    font-size: 28px;
    color: #FFF;
    margin-top: 10px;
  }
</style>
