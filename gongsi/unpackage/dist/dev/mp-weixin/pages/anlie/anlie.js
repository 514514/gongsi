"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      title: "product-list",
      productList: [],
      renderImage: false,
      tupian: [
        {
          id: "1",
          url: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/fengguan1.jpg"
        },
        {
          id: "2",
          url: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/luoxuan2.jpg"
        },
        {
          id: "3",
          url: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/budai4.jpg"
        },
        {
          id: "4",
          url: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/boligang1.jpg"
        },
        {
          id: "5",
          url: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/bomeiban2.jpg"
        },
        {
          id: "6",
          url: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/pe1.jpg"
        },
        {
          id: "7",
          url: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/pvc1.jpg"
        },
        {
          id: "8",
          url: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/ppr1.jpg"
        }
      ]
    };
  },
  methods: {
    loadData(action = "add") {
      const data = [
        {
          image: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/fengguan2.jpg",
          title: "矩形风管主要用于联通两地之间的空气流通，起到通风透气的作用。目前市面上使用广泛的就是矩形风管。",
          originalPrice: 0,
          favourPrice: 25,
          tip: "元/平方起"
        },
        {
          image: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/huoxingtan2.jpg",
          title: "螺旋风管主要用于联通两地之间的空气流通，起到通风透气的作用。目前市面上使用广泛的就是螺旋风管。",
          originalPrice: 3499,
          favourPrice: 40,
          tip: "元/米起"
        },
        {
          image: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/budai2.jpg",
          title: "布袋风管",
          originalPrice: 12999,
          favourPrice: 30,
          tip: "元/米起"
        },
        {
          image: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/boligang2.jpg",
          title: "无机玻璃钢通风管道主要是由氯化镁，氧化镁，玻璃纤维布及一定比例的辅料组成。无机玻璃钢风管主要工艺为手糊,A级不燃材料，具有很好的防火性能，不惧怕高温，防水性能好机械强度较差。",
          originalPrice: 999,
          favourPrice: 30,
          tip: "元/平方起"
        },
        {
          image: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/bomeiban3.jpg",
          title: "玻镁复合风管是以玻璃纤维为增强材料，氯化镁、氧化镁为胶凝材料，耐碱玻纤布及无机粘合剂通过机械加工生产风管板材，将风管板材粘合在一起的通风管道。具有重量轻、强度高、不燃烧、隔音、隔热、防潮、抗水、使用寿命长等特点，是一种新型的节能、环保高科技复合板材。 温度适应性强：可在高、低温(-140℃至150℃)条件下使用",
          originalPrice: 8888,
          favourPrice: 35,
          tip: "元/平方起"
        },
        {
          image: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/pe1.jpg",
          title: "新风pe管",
          originalPrice: 2899,
          favourPrice: 15,
          tip: "元/米起"
        },
        {
          image: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/pvc1.jpg",
          title: "新风pvc管",
          originalPrice: 2899,
          favourPrice: 14,
          tip: "元/米起"
        },
        {
          image: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/ppr1.jpg",
          title: "ppr管",
          originalPrice: 2899,
          favourPrice: 30,
          tip: "元/米起"
        },
        {
          image: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/weixin.jpg",
          title: "联系我们",
          originalPrice: 2899,
          favourPrice: 0,
          tip: "此价格仅为参考，具体价格看施工难度定价"
        }
      ];
      if (action === "refresh") {
        this.productList = [];
      }
      data.forEach((item) => {
        this.productList.push(item);
      });
    },
    onLoad() {
      this.loadData();
      setTimeout(() => {
        this.renderImage = true;
      }, 300);
    },
    onPullDownRefresh() {
      this.loadData("refresh");
      setTimeout(() => {
        common_vendor.index.stopPullDownRefresh();
      }, 2e3);
    },
    onReachBottom() {
      this.loadData();
    },
    //点击事件
    goto(url) {
      common_vendor.index.navigateTo({
        url
      });
    },
    onpreviewImage(url) {
      common_vendor.index.previewImage({
        urls: this.tupian.map((v) => v.url),
        current: url
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.tupian, (item, k0, i0) => {
      return {
        a: common_vendor.o(($event) => $options.onpreviewImage(item.url), item.id),
        b: item.url,
        c: item.id
      };
    }),
    b: _ctx.indicatorDots,
    c: _ctx.autoplay,
    d: _ctx.interval,
    e: _ctx.duration,
    f: common_vendor.o(($event) => $options.goto("/pages/index/luoxuan"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gongsi/pages/anlie/anlie.vue"]]);
wx.createPage(MiniProgramPage);
