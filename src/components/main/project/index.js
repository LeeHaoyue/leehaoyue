import data from './data.js';

export default {
  name: 'project',
  data() {
    return {
      index: 0,
      animals: {
        name: 'projectAnimals',
        animals: data.animals.animals,
        options: data.animals.option,
        style: {
          width: '100vw',
          height: '40vh',
          background: '#fff'
        },
        loop: setTimeout(() => {})
      },
      wordClouds: {
        name: 'projectWordClouds',
        options: data.wordClouds,
        style: {
          width: '100vw',
          height: '40vh',
          background: 'transparent'
        },
        loop: setTimeout(() => {})
      },
      introduce: {},
      dialogVisible: false,
      cardList: [],
      qrcodePreview: null
    };
  },
  computed: {
    link() {
      let link = window.location.origin+window.location.pathname;

      return link.substring(0, link.length-1);
    }
  },
  created() {
    this.getCrad();
  },
  mounted() {
    this.drawInitAnimals();
    this.drawInitWordClouds();
  },
  methods: {
    // 动物
    drawInitAnimals() {
      this.animals.options.series[0].symbolSize = 2;
      this.drawLineAnimals();
    },
    drawLineAnimals() {
      let that = this;

      clearTimeout(that.animals.loop);
      that.animals.loop = setTimeout(() => {
        if (that.index === that.animals.animals.length - 1) {
          that.index = 0;
        } else {
          that.index++;
        }
        that.animals.options.series[0].data = that.animals.animals[that.index].nodes;
        that.animals.options.series[0].links = that.animals.animals[that.index].links;
        that.drawLineAnimals();
      }, 3000);
    },
    // 词云
    drawInitWordClouds() {
      this.$axios.getData({
        url: '/project/wordClouds'
      }).then(res => {
        this.wordClouds.options.series[0].data = res.data;
        this.drawLineWordClouds();
      });
    },
    drawLineWordClouds() {
      let that = this;

      clearTimeout(that.wordClouds.loop);
      that.wordClouds.loop = setTimeout(() => {
        that.$axios.getData({
          url: '/project/wordClouds'
        }).then(res => {
          that.wordClouds.options.series[0].data = res.data;
          that.drawLineWordClouds();
        });
      }, 3000);
    },
    // 获取项目列表
    getCrad() {
      this.$axios.getData({
        url: '/project/card'
      }).then(res => {
        this.$set(this, 'cardList', res.data);
      });
    },
    // 二维码地址
    qrcodeShow(link) {
      this.qrcodePreview = link;
    },
    // 进入公司官网
    toCompany(link) {
      window.open(link);
    },
    // 打开项目地址
    pageDetail(link) {
      window.open(link);
    },
    // 查看项目详情
    introduceDetail(info) {
      this.introduce = info;
      this.dialogVisible = true;
    }
  },
  beforeDestroy() {
    clearInterval(this.animals.loop);
    clearInterval(this.wordClouds.loop);
  }
};
