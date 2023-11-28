"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "Hello"
    };
  },
  onLoad() {
  },
  methods: {
    openimg(e) {
      common_vendor.index.previewImage({
        // 为当前显示图片的链接/索引值
        current: "../../static/weixin.png",
        // 图片指示器样式	
        indicator: "default",
        // 是否可循环预览
        loop: false,
        // 长按图片显示操作菜单，如不填默认为保存相册
        // longPressActions:{
        // 	itemList:[this.l('发送给朋友'),this.l]
        // },
        success: (res) => {
          console.log("res", res);
        },
        fail: (err) => {
          console.log("err", err);
        }
      });
    },
    goto(url) {
      common_vendor.index.navigateTo({
        url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    b: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    c: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    d: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    e: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    f: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    g: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    h: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    i: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    j: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    k: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    l: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    m: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    n: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    o: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    p: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    q: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    r: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    s: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    t: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    v: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    w: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    x: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    y: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan")),
    z: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gongsi/pages/chanpin/chanpin.vue"]]);
wx.createPage(MiniProgramPage);
