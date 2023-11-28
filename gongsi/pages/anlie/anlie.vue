<template>
  <view>
    <view class='box' style="text-align: center; font-size: 40rpx;">新闻资讯</view>
    <view class='box' style="text-align: center; font-size: 40rpx;">NEWS INFORMATION</view>

    <swiper class="banner" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval"
      :duration="duration">
      <swiper-item v-for="item in tupian" :key="item.id">
        <image @tap="onpreviewImage(item.url)" :src="item.url"></image>

      </swiper-item>
    </swiper>
    <view class="chanpin">
      <view class="chanpinleft">
        <image class='chanpin-image' src='/static/logo.png'>
        </image>

      </view>
      <view class="chanpinright">
        <image class='chanpin-image' src='/static/logo.png'>
        </image>
      </view>
    </view>
    <view class="chanpin">
      <view class="chanpinleft">
        <image class='chanpin-image' src='/static/logo.png'>
        </image>

      </view>
      <view class="chanpinright">
        <image class='chanpin-image' src='/static/logo.png'>
        </image>
      </view>
    </view>
    <view class="chanpin">
      <view class="chanpinleft">
        <image class='chanpin-image' src='/static/logo.png'>
        </image>

      </view>
      <view class="chanpinright">
        <image class='chanpin-image' src='/static/logo.png'>
        </image>
      </view>
    </view>
    <view class="chanpin">
      <view class="chanpinleft">
        <image class='chanpin-image' src='/static/logo.png'>
        </image>

      </view>
      <view class="chanpinright">
        <image class='chanpin-image'
          src='https://tse4-mm.cn.bing.net/th/id/OIP-C.0ipSZc9TUksoxM3sUqwGewHaHa?pid=ImgDet&rs=1'>
        </image>
      </view>
    </view>
    <button class=" mini-btn,fixedButton" style="float: right;" type="primary" size="mini"
      @click="goto('/pages/index/luoxuan')">联系我们</button>


  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'product-list',
        productList: [],
        renderImage: false,
        tupian: [{
            id: '1',
            url: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/fengguan1.jpg"
          },
          {
            id: '2',
            url: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/luoxuan2.jpg"
          },
          {
            id: '3',
            url: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/budai4.jpg"
          },
          {
            id: '4',
            url: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/boligang1.jpg"
          },
          {
            id: '5',
            url: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/bomeiban2.jpg"
          },
          {
            id: '6',
            url: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/pe1.jpg"
          },
          {
            id: '7',
            url: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/pvc1.jpg"
          },
          {
            id: '8',
            url: "https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/ppr1.jpg"
          }
        ]

      }
    },
    methods: {
      loadData(action = 'add') {
        const data = [{
            image: 'https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/fengguan2.jpg',
            title: '矩形风管主要用于联通两地之间的空气流通，起到通风透气的作用。目前市面上使用广泛的就是矩形风管。',
            originalPrice: 0,
            favourPrice: 25,
            tip: '元/平方起'
          },
          {
            image: 'https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/huoxingtan2.jpg',
            title: '螺旋风管主要用于联通两地之间的空气流通，起到通风透气的作用。目前市面上使用广泛的就是螺旋风管。',
            originalPrice: 3499,
            favourPrice: 40,
            tip: '元/米起'
          },
          {
            image: 'https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/budai2.jpg',
            title: '布袋风管',
            originalPrice: 12999,
            favourPrice: 30,
            tip: '元/米起'
          },
          {
            image: 'https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/boligang2.jpg',
            title: '无机玻璃钢通风管道主要是由氯化镁，氧化镁，玻璃纤维布及一定比例的辅料组成。无机玻璃钢风管主要工艺为手糊,A级不燃材料，具有很好的防火性能，不惧怕高温，防水性能好机械强度较差。',
            originalPrice: 999,
            favourPrice: 30,
            tip: '元/平方起'
          },
          {
            image: 'https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/bomeiban3.jpg',
            title: '玻镁复合风管是以玻璃纤维为增强材料，氯化镁、氧化镁为胶凝材料，耐碱玻纤布及无机粘合剂通过机械加工生产风管板材，将风管板材粘合在一起的通风管道。具有重量轻、强度高、不燃烧、隔音、隔热、防潮、抗水、使用寿命长等特点，是一种新型的节能、环保高科技复合板材。 温度适应性强：可在高、低温(-140℃至150℃)条件下使用',
            originalPrice: 8888,
            favourPrice: 35,
            tip: '元/平方起'
          },
          {
            image: 'https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/pe1.jpg',
            title: '新风pe管',
            originalPrice: 2899,
            favourPrice: 15,
            tip: '元/米起'
          },
          {
            image: 'https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/pvc1.jpg',
            title: '新风pvc管',
            originalPrice: 2899,
            favourPrice: 14,
            tip: '元/米起'
          },
          {
            image: 'https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/ppr1.jpg',
            title: 'ppr管',
            originalPrice: 2899,
            favourPrice: 30,
            tip: '元/米起'
          },
          {
            image: 'https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/weixin.jpg',
            title: '联系我们',
            originalPrice: 2899,
            favourPrice: 0,
            tip: '此价格仅为参考，具体价格看施工难度定价'
          }
        ];

        if (action === 'refresh') {
          this.productList = [];
        }

        data.forEach(item => {
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
        this.loadData('refresh');
        // 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。
        setTimeout(() => {
          uni.stopPullDownRefresh();
        }, 2000);
      },

      onReachBottom() {
        this.loadData();
      },
      //点击事件
      goto(url) {
        uni.navigateTo({
          url: url
        })
      },
      onpreviewImage(url) {
        //console.log(url)
        uni.previewImage({
          urls: this.tupian.map(v => v.url),
          current: url
        })
      }

    }
  }
</script>


<style lang="scss">
  .fixedButton {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #f44336;
    color: white;
    padding: 15px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;


  }

  .chanpin {
    margin-bottom: 30rpx;
    margin-top: 30rpx;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    background-color: #fefefe;
    box-shadow: inset 0 0 0 2px rgb(255, 255, 255),
      0.3em 0.3em 1em rgba(0, 0, 0, 0.3);

  }

  .chanpin-image {
    width: 340rpx;
    margin: 0 auto;
    height: 280rpx;
    background-color: #fefefe;
    box-shadow: inset 0 0 0 2px rgb(255, 255, 255),
      0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  }

  .chanpinleft {

    margin-left: 25rpx;
    height: 300rpx;
    width: 340rpx;

  }

  .chanpinright {


    margin-right: 25rpx;
    height: 300rpx;
    width: 340rpx;

  }


  .text {
    user-select: text;
  }

  .content1 {
    font-size: 40rpx;
    display: flex;
    flex-direction: row;
    background-color: #999999;
    padding: 30rpx 30rpx;
    justify-content: space-between;
  }

  .left {
    background-color: #FFFFFF;
    width: 30%;
    height: 300rpx;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
  }

  /* product */
  page {
    background: #F8F8F8;
  }

  view {
    font-size: 28upx;
  }

  .uni-product-list {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    flex-direction: row;
  }

  .uni-product {
    padding: 20upx;
    display: flex;
    flex-direction: column;
  }

  .image-view {
    height: 330upx;
    width: 330upx;
    margin: 12upx 0;
  }

  .uni-product-image {
    height: 330upx;
    width: 330upx;
  }

  .uni-product-title {
    width: 300upx;
    word-break: break-all;
    display: -webkit-box;
    overflow: hidden;
    line-height: 1.5;
    text-overflow: ellipsis;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .uni-product-price {
    margin-top: 10upx;
    font-size: 28upx;
    line-height: 1.5;
    position: relative;
  }

  .uni-product-price-original {
    color: #e80080;
  }

  .uni-product-price-favour {
    color: #888888;
    text-decoration: line-through;
    margin-left: 10upx;
  }

  .uni-product-tip {
    position: absolute;
    right: 10upx;
    background-color: #ff3333;
    color: #ffffff;
    padding: 0 10upx;
    border-radius: 5upx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #ffff;
  }

  .banner,
  .banner image {
    width: 750rpx;
    height: 400rpx;
    display: block;
    text-align: center;
  }
</style>