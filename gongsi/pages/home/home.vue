<template>
  <view>
    <view class='box' style="text-align: center; font-size: 40rpx;">新闻资讯</view>
    <view class='box' style="text-align: center; font-size: 40rpx;">NEWS INFORMATION</view>

    <view class="content1">
      <view class="left">
        <image class="image_11" show-menu-by-longpress="true"
          src="https://tse4-mm.cn.bing.net/th/id/OIP-C.0ipSZc9TUksoxM3sUqwGewHaHa?pid=ImgDet&rs=1" @longpress="openimg">
        </image>
      </view>
      <view class="right">
        <view class="l1">
          <p>姓名：李真</p>
        </view>
        <view class="l2">
          <p>电话：15682123358</p>
        </view>
        <view class="l3">
          <p>地址：四川</p>
        </view>
      </view>
    </view>
    <view class="view_tupian_wenzi">
      <image class="image_1" show-menu-by-longpress="true"
        src="https://tse4-mm.cn.bing.net/th/id/OIP-C.0ipSZc9TUksoxM3sUqwGewHaHa?pid=ImgDet&rs=1" @longpress="openimg">
      </image>
      <view class="view_wenzi2">

        <text
          class="text_small">豪杰众诚建筑有限公司主要销售的产品有:轴流风机.厨房专业风机.消防风机系列.环保喷淋塔.活性炭.矩形风管.圆形风管.布袋风管.玻璃钢风管.玻镁复合风管.pe新风管pvc新风管.ppr新风管,坐落于成都市，有发达的交通地理位置。
        </text>
      </view>
    </view>
    <text class="view_wenzi3 view_tupian_wenzi">长按二维码联系我</text>

    <button class=" mini-btn,fixedButton" style="float: right;" type="primary" size="mini"
      @click="goto('/pages/index/xiangqing')">联系我们</button>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello'
      }
    },
    onLoad() {

    },
    methods: {
      openimg(e) {
        uni.previewImage({

          // 为当前显示图片的链接/索引值
          current: "../../static/weixin.png",
          // 图片指示器样式	
          indicator: 'default',
          // 是否可循环预览
          loop: false,
          // 长按图片显示操作菜单，如不填默认为保存相册
          // longPressActions:{
          // 	itemList:[this.l('发送给朋友'),this.l]
          // },
          success: res => {
            console.log('res', res);
          },
          fail: err => {
            console.log('err', err);
          }
        });
      },
      goto(url) {
        uni.navigateTo({
          url: url
        })
      }


    }
  }
</script>

<style lang="scss">
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

      .l1 {
        background-color: #FFFFFF;
        width: 100%;
        height: 90rpx;
      }

      .l2 {
        background-color: #FFFFFF;
        width: 100%;
        height: 90rpx;
      }

      .l3 {
        background-color: #FFFFFF;
        width: 100%;
        height: 90rpx;
      }
    }
  }

  .image_11 {

    width: 100%;
    height: 300rpx;


    display: flex;
    flex-direction: row;


    justify-content: space-between;


  }

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

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-bottom: 50rpx;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }




  .view_tupian_wenzi {
    margin-top: 50rpx;
    display: flex;
    flex-direction: row;
    margin-left: 30rpx;
    width: 690rpx;
    height: 400rpx;

    box-shadow: 0 0 5px 1px #999
  }



  .image_1 {
    width: 140px;
    height: 140px;
    margin-left: 30rpx;
    margin-top: 15rpx;


  }

  .image_2 {
    width: 50px;
    height: 50px;
    margin-right: 30rpx;

    margin-top: 100rpx;
    display: flex;
    flex-direction: row;



    box-shadow: 0 0 5px 1px #999
  }

  .view_wenzi2 {
    width: 150px;
    margin-left: 5rpx;
    display: flex;
    flex-direction: column;
    margin-left: 30rpx;
  }

  .view_wenzi3 {
    margin-top: 50rpx;
    display: flex;
    flex-direction: row;
    margin-left: 30rpx;
    width: 300rpx;
    height: 50rpx;


    box-shadow: 0 0 5px 1px #999
  }



  .text_small {
    font-size: 27rpx;
    word-break: break-all;
    color: #7a7878
  }
</style>