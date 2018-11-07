<template>
<div>
  <recycle-list
    class="list"
    :style="{ marginTop: marginTop }"
    for="(item, index) in longList"
    switch="type"
    @loadmore="loadmore"
  >
    <cell-slot case="floor">
      <floor :floor="item" />
    </cell-slot>
  </recycle-list>
  <tab ref="tab" :tabs="tabs" @toggle="toggleTab"></tab>
  <overlay-button></overlay-button>
</div>
</template>

<script>
import Tab from './components/Tab';
import Floor from './components/Floor';
import OverlayButton from './components/OverlayButton';

const stream = weex.requireModule('stream');
const dom = weex.requireModule('dom');

const dataset = {
  floor: [],
};

// generate list data
function createListData(order) {
  let array = [];
  const list = order.split(/[\s,]+/);
  for (let i = 0; i < list.length; i += 1) {
    const candidates = dataset[list[i]];
    array = array.concat(candidates);
  }
  return array;
}
const initial = 'floor';

const more = 'floor';

const modal = weex.requireModule('modal');
export default {
  components: { Tab, Floor, OverlayButton },
  data() {
    return {
      marginTop: 0,
      longList: createListData(initial),
      tabs: [
        { title: '主页' },
        { title: '精华', tab: 'good' },
        { title: '分享', tab: 'share' },
        { title: '问答', tab: 'ask' },
        { title: '招聘', tab: 'job' },
      ],
      tab: undefined,
      page: 1,
    };
  },
  created() {
    this.getListData();
  },
  mounted() {
    dom.getComponentRect(this.$refs.tab, ({ size }) => {
      this.marginTop = `${size.height}px`;
    });
  },
  methods: {
    loadmore() {
      this.page += 1;
      this.getListData(() => {
        const newData = createListData(more);
        modal.toast({ message: `loadmore (${this.longList.length + newData.length})` });
        setTimeout(() => {
          this.longList.push(...newData);
        }, 0);
      });
    },
    toggleTab(tab) {
      this.tab = tab;
      this.page = 1;
      this.getListData();
    },
    getListData(callback) {
      const params = {
        page: this.page || 1,
        limit: 10,
      };
      if (this.tab) {
        params.tab = this.tab;
      }
      const paramStr = Object.keys(params).reduce((sum, key) => {
        if (sum === '') {
          return `?${key}=${params[key]}`;
        }
        return `${sum}&${key}=${params[key]}`;
      }, '');
      stream.fetch({
        method: 'GET',
        type: 'json',
        url: `https://cnodejs.org/api/v1/topics${paramStr}`,
      }, (res) => {
        if (res.data.success) {
          dataset.floor = res.data.data.map(item => ({
            type: 'floor',
            title: item.title,
            desc: item.content,
            pictures: [
              item.author.avatar_url,
            ],
            count: item.visit_count,
          }));
          if (callback) {
            callback(dataset.floor);
          } else {
            this.longList = createListData(initial);
          }
        }
      });
    },
  },
};
</script>

<style scoped>
  .list {
    width: 750px;
    background-color: #EFEFEF;
  }
</style>
