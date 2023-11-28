<template>
  <view>
    <view class='box' style="text-align: center; font-size: 40rpx;">新闻资讯</view>
    <view class='box' style="text-align: center; font-size: 40rpx;">NEWS INFORMATION</view>

    <view class="chanpin">
      <view class="chanpinleft">
        <image class='chanpin-image' @click="goto('/pages/index/luoxuan')" src='/static/logo.png'>
        </image>
        <button class="mini-btn" style="float: left;" type="default" size="mini"
          @click="goto('/pages/index/luoxuan')">螺旋风管</button>
      </view>
      <view class="chanpinright">
        <image class='chanpin-image' @click="goto('/pages/index/luoxuan')" src='/static/logo.png'>
        </image>
        <button class="mini-btn" style="float: left;" type="default" size="mini"
          @click="goto('/pages/index/luoxuan')">查看详情</button>
      </view>
    </view>
    <view class="chanpin">
      <view class="chanpinleft">
        <image class='chanpin-image' @click="goto('/pages/index/luoxuan')" src='/static/logo.png'>
        </image>
        <button class="mini-btn" style="float: left;" type="default" size="mini"
          @click="goto('/pages/index/luoxuan')">查看详情</button>
      </view>
      <view class="chanpinright">
        <image class='chanpin-image' @click="goto('/pages/index/luoxuan')" src='/static/logo.png'>
        </image>
        <button class="mini-btn" style="float: left;" type="default" size="mini"
          @click="goto('/pages/index/luoxuan')">查看详情</button>
      </view>
    </view>
    <view class="chanpin">
      <view class="chanpinleft">
        <image class='chanpin-image' @click="goto('/pages/index/luoxuan')" src='/static/logo.png'>
        </image>
        <button class="mini-btn" style="float: left;" type="default" size="mini"
          @click="goto('/pages/index/luoxuan')">查看详情</button>
      </view>
      <view class="chanpinright">
        <image class='chanpin-image' @click="goto('/pages/index/luoxuan')" src='/static/logo.png'>
        </image>
        <button class="mini-btn" style="float: left;" type="default" size="mini"
          @click="goto('/pages/index/luoxuan')">查看详情</button>
      </view>
    </view>
    <view class="chanpin">
      <view class="chanpinleft">
        <image class='chanpin-image' @click="goto('/pages/index/luoxuan')" src='/static/logo.png'>
        </image>
        <button class="mini-btn" style="float: left;" type="default" size="mini"
          @click="goto('/pages/index/luoxuan')">查看详情</button>
      </view>
      <view class="chanpinright">
        <image class='chanpin-image' @click="goto('/pages/index/luoxuan')" src='/static/logo.png'>
        </image>
        <button class="mini-btn" style="float: left;" type="default" size="mini"
          @click="goto('/pages/index/luoxuan')">查看详情</button>
      </view>
    </view>
    <view class="chanpin">
      <view class="chanpinleft">
        <image class='chanpin-image' @click="goto('/pages/index/luoxuan')" src='/static/logo.png'>
        </image>
        <button class="mini-btn" style="float: left;" type="default" size="mini"
          @click="goto('/pages/index/luoxuan')">查看详情</button>
      </view>
      <view class="chanpinright">
        <image class='chanpin-image' @click="goto('/pages/index/luoxuan')" src='/static/logo.png'>
        </image>
        <button class="mini-btn" style="float: left;" type="default" size="mini"
          @click="goto('/pages/index/luoxuan')">查看详情</button>
      </view>
    </view>
    <view class="chanpin">
      <view class="chanpinleft">
        <image class='chanpin-image' @click="goto('/pages/index/luoxuan')" src='/static/logo.png'>
        </image>
        <button class="mini-btn" style="float: left;" type="default" size="mini"
          @click="goto('/pages/index/luoxuan')">查看详情</button>
      </view>
      <view class="chanpinright">
        <image class='chanpin-image' @click="goto('/pages/index/luoxuan')" src='/static/logo.png'>
        </image>
        <button class="mini-btn" style="float: left;" type="default" size="mini"
          @click="goto('/pages/index/luoxuan')">查看详情</button>
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
    height: 220rpx;
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