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
    a: common_vendor.o((...args) => $options.openimg && $options.openimg(...args)),
    b: common_vendor.o((...args) => $options.openimg && $options.openimg(...args)),
    c: common_vendor.o(($event) => $options.goto("/pages/index/xiangqing"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gongsi/pages/home/home.vue"]]);
wx.createPage(MiniProgramPage);
