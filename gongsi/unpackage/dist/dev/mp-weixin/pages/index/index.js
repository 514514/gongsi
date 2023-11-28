"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      //轮播图数据
      swipers: [
        "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/fengguan1.jpg",
        "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/fengguan1.jpg",
        "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/fengguan1.jpg"
      ],
      orderTypeLise: [
        //name-标题 icon-图标 badge-角标
        {
          name: "业务范围",
          icon: "women.png",
          ulr: "/pages/index/xiangqing"
        },
        {
          name: "精品案列",
          icon: "anlie2.png",
          ulr: "/pages/index/xiangqing"
        },
        {
          name: "新闻资讯",
          icon: "xinwen.png",
          ulr: "/pages/index/xiangqing"
        },
        {
          name: "名片",
          icon: "mingpian2.png",
          ulr: "/pages/index/xiangqing"
        }
      ],
      //轮播图控制
      background: ["color1", "color2", "color3"],
      indicatorDots: true,
      autoplay: true,
      interval: 2e3,
      duration: 500
    };
  },
  methods: {
    toOrderType() {
      this.OrderType = !this.OrderType;
    },
    //点击事件
    goto(url) {
      common_vendor.index.navigateTo({
        url
      });
    },
    changeIndicatorDots(e) {
      this.indicatorDots = !this.indicatorDots;
    },
    changeAutoplay(e) {
      this.autoplay = !this.autoplay;
    },
    intervalChange(e) {
      this.interval = e.target.value;
    },
    durationChange(e) {
      this.duration = e.target.value;
    },
    change(e) {
      console.log("当前轮播信息：", e);
    },
    //点击轮播
    click(e) {
      console.log("点击轮播", e);
    },
    changeIndicatorDots(e) {
      this.indicatorDots = !this.indicatorDots;
    },
    changeAutoplay(e) {
      this.autoplay = !this.autoplay;
    },
    intervalChange(e) {
      this.interval = e.target.value;
    },
    durationChange(e) {
      this.duration = e.target.value;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.swipers, (item, k0, i0) => {
      return {
        a: item
      };
    }),
    b: $data.indicatorDots,
    c: $data.autoplay,
    d: $data.interval,
    e: $data.duration,
    f: common_vendor.f($data.orderTypeLise, (row, index, i0) => {
      return {
        a: "../../static/" + row.icon,
        b: common_vendor.o(($event) => $options.goto(row.ulr), row.name),
        c: common_vendor.t(row.name),
        d: row.name,
        e: common_vendor.o(($event) => $options.toOrderType(index), row.name)
      };
    }),
    g: common_vendor.o(($event) => $options.goto("/pages/index/xiangqing")),
    h: common_vendor.o(($event) => $options.goto("/pages/index/xiangqing")),
    i: common_vendor.o(($event) => $options.goto("/pages/index/xiangqing")),
    j: common_vendor.o(($event) => $options.goto("/pages/index/xiangqing")),
    k: common_vendor.o(($event) => $options.goto("/pages/index/xiangqing")),
    l: common_vendor.o(($event) => $options.goto("/pages/index/xiangqing")),
    m: common_vendor.o(($event) => $options.goto("/pages/index/xiangqing")),
    n: common_vendor.o(($event) => $options.goto("/pages/index/index/xiangqing")),
    o: common_vendor.o(($event) => $options.goto("/pages/index/index/xiangqing")),
    p: common_vendor.o(($event) => $options.goto("/pages/index/index/xiangqing")),
    q: common_vendor.o(($event) => $options.goto("/pages/index/xiangqing")),
    r: common_vendor.o(($event) => $options.goto("/pages/index/xiangqing")),
    s: common_vendor.o(($event) => $options.goto("/pages/index/xiangqing")),
    t: common_vendor.o(($event) => $options.goto("/pages/index/xiangqing")),
    v: common_vendor.o(($event) => $options.goto("/pages/index/xiangqing")),
    w: common_vendor.o(($event) => $options.goto("/pages/index/index/xiangqing")),
    x: common_vendor.o(($event) => $options.goto("/pages/index/index/xiangqing")),
    y: common_vendor.o(($event) => $options.goto("/pages/index/xiangqing")),
    z: common_vendor.o(($event) => $options.goto("/pages/index/xiangqing")),
    A: common_vendor.o(($event) => $options.goto("/pages/index/xiangqing"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gongsi/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
