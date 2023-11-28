<!-- 本示例未包含完整css，获取外链css请参考上文，在hello uni-app项目中查看 -->
<template>
  <view>
    <view class="home">
      <!--circular用来设置循环轮播   indicator-dots设置下面小圆点用来点击 -->
      <swiper circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
        <!-- v-for循环遍历数组 -->
        <swiper-item v-for="item in swipers">
          <image :src="item"></image>
        </swiper-item>
      </swiper>
    </view>







    <view class="box1">
      <view class="label" v-for="(row,index) in orderTypeLise" :key="row.name" hover-class="hover"
        @tap="toOrderType(index)">
        <view class="icon1">
          <image :src="'../../static/'+row.icon" @click="goto(row.ulr)"></image>
        </view>
        <!-- <text>{{row.name}}</text> -->
        {{row.name}}
      </view>
    </view>

    <view class="container">
      <image class='centered-image' @click="goto('/pages/index/xiangqing')"
        src='https://tse4-mm.cn.bing.net/th/id/OIP-C.0ipSZc9TUksoxM3sUqwGewHaHa?pid=ImgDet&rs=1'>

      </image>
      <p @click="goto('/pages/index/xiangqing')">精品案列</p>



      <button class="mini-btn" style="float: right;" type="default" size="mini"
        @click="goto('/pages/index/xiangqing')">查看更多</button>

    </view>
    <view class="container">
      <image class='centered-image' @click="goto('/pages/index/xiangqing')"
        src='https://tse4-mm.cn.bing.net/th/id/OIP-C.0ipSZc9TUksoxM3sUqwGewHaHa?pid=ImgDet&rs=1'>
      </image>
      <p @click="goto('/pages/index/xiangqing')">业务范围</p>


      <button class="mini-btn" style="float: right;" type="default" size="mini"
        @click="goto('/pages/index/xiangqing')">查看更多</button>
    </view>

    <view class='box' style="text-align: center;">新闻资讯</view>
    <view class='box' style="text-align: center;">NEWS INFORMATION</view>

    <view class="chanpin">
      <view class="chanpinleft">
        <image class='chanpin-image' @click="goto('/pages/index/xiangqing')" src='/static/logo.png'>
        </image>
        <button class="mini-btn" style="float: left;" type="default" size="mini"
          @click="goto('/pages/index/index/xiangqing')">查看详情</button>
      </view>
      <view class="chanpinright">
        <image class='chanpin-image' @click="goto('/pages/index/index/xiangqing')" src='/static/logo.png'>
        </image>
        <button class="mini-btn" style="float: left;" type="default" size="mini"
          @click="goto('/pages/index/index/xiangqing')">查看详情</button>
      </view>
    </view>
    <view class="chanpin">
      <view class="chanpinleft">
        <image class='chanpin-image' @click="goto('/pages/index/xiangqing')" src='/static/logo.png'>
        </image>
        <button class="mini-btn" style="float: left;" type="default" size="mini"
          @click="goto('/pages/index/xiangqing')">查看详情</button>
      </view>
      <view class="chanpinright">
        <image class='chanpin-image' @click="goto('/pages/index/xiangqing')" src='/static/logo.png'>
        </image>
        <button class="mini-btn" style="float: left;" type="default" size="mini"
          @click="goto('/pages/index/xiangqing')">查看详情</button>

      </view>
    </view>
    <view class='box' style="text-align: left; margin-left: 30rpx; margin-top: 100rpx;">新闻资讯
    </view>

    <view class='box' style="text-align: left; margin-left: 30rpx; margin-bottom: 100rpx;">NEWS INFORMATION<button
        class="mini-btn" style="float: right;" type="warn" size="mini"
        @click="goto('/pages/index/xiangqing')">查看更多</button>
    </view>

    <view class="view_tupian_wenzi">
      <image class="image_1" src="/static/logo.png" />
      <view class="view_wenzi2">
        <text>服务项目</text>
        <text class="text_small">进入服务项目，查看项目数据进入服务项目，查看项目数据</text>
        <button class="mini-btn" type="default" size="mini" @click="goto('/pages/index/index/xiangqing')">查看更多</button>
      </view>

    </view>
    <view class="view_tupian_wenzi">
      <view class="view_wenzi3">
        <text>服务项目</text>
        <text class="text_small">进入服务项目，查看项目数据进入服务进入服务项目，查看项目数据进入服项目，查看项目数据</text>
        <button class="mini-btn" type="default" size="mini" @click="goto('/pages/index/index/xiangqing')">查看更多</button>
      </view>
      <image class="image_2" src="/static/logo.png" />
    </view>

    <view class='box' style="text-align: center; margin-top: 50rpx;">新闻资讯</view>
    <view class='box' style=" text-align: center;">NEWS INFORMATION</view>

    <view style="display:flex;align-items:center;" class="xinwen">
      <image src="https://tse4-mm.cn.bing.net/th/id/OIP-C.0ipSZc9TUksoxM3sUqwGewHaHa?pid=ImgDet&rs=1"
        style="width:100px;height:100px;"></image>
      <view style="flex:1;">这里是文字内容这里是文字内容这里是文字内容这里是文字内容</view><button class="mini-btn" style="float: right;"
        type="default" size="mini" @click="goto('/pages/index/xiangqing')">查看更多</button>
    </view>
    <view style="display:flex;align-items:center;" class="xinwen">
      <image src="https://tse4-mm.cn.bing.net/th/id/OIP-C.0ipSZc9TUksoxM3sUqwGewHaHa?pid=ImgDet&rs=1"
        style="width:100px;height:100px;"></image>
      <view style="flex:1;">这里是文字内容这里是文字内容这里是文字内容这里是文字内容</view><button class="mini-btn" style="float: right;"
        type="default" size="mini" @click="goto('/pages/index/xiangqing')">查看更多</button>
    </view>
    <button class="mini-btn,fixedButton" style="float: right;" type="primary" size="mini"
      @click="goto('/pages/index/xiangqing')">联系我们</button>


  </view>

</template>

<script>
  export default {
    data() {
      return {
        //轮播图数据
        swipers: ['https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/fengguan1.jpg',
          'https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/fengguan1.jpg',
          'https://haojie-1316990676.cos.ap-chengdu.myqcloud.com/fengguan1.jpg'
        ],
        orderTypeLise: [
          //name-标题 icon-图标 badge-角标
          {
            name: '业务范围',
            icon: 'women.png',
            ulr: '/pages/index/xiangqing',
          },
          {
            name: '精品案列',
            icon: 'anlie2.png',
            ulr: '/pages/index/xiangqing',
          },
          {
            name: '新闻资讯',
            icon: 'xinwen.png',
            ulr: '/pages/index/xiangqing',
          },
          {
            name: '名片',
            icon: 'mingpian2.png',
            ulr: '/pages/index/xiangqing',
          }

        ],
        //轮播图控制
        background: ['color1', 'color2', 'color3'],
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500
      }
    },
    methods: {
      toOrderType() {
        this.OrderType = !this.OrderType

      },
      //点击事件
      goto(url) {
        uni.navigateTo({
          url: url
        })
      },

      changeIndicatorDots(e) {
        this.indicatorDots = !this.indicatorDots
      },
      changeAutoplay(e) {
        this.autoplay = !this.autoplay
      },
      intervalChange(e) {
        this.interval = e.target.value
      },
      durationChange(e) {
        this.duration = e.target.value
      },
      change(e) {
        console.log('当前轮播信息：', e)
      },
      //点击轮播
      click(e) {
        console.log('点击轮播', e)
      },
      changeIndicatorDots(e) {
        this.indicatorDots = !this.indicatorDots
      },
      changeAutoplay(e) {
        this.autoplay = !this.autoplay
      },
      intervalChange(e) {
        this.interval = e.target.value
      },
      durationChange(e) {
        this.duration = e.target.value
      }
    }
  }
</script>

<style lang="scss">
  .xinwen {
    margin-bottom: 30rpx;
    margin-top: 40rpx;
    display: flex;

    background-color: #fefefe;
    box-shadow: inset 0 0 0 2px rgb(255, 255, 255),
      0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
  }

  .view-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }

  .caidan {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
  }

  .icon {
    width: 7vw;
    height: 7vw;
  }

  .title {
    margin-top: 10rpx;
    font-size: 20upx;
    /* color: #8f8f94; */
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
    height: 220rpx;
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



  .container {
    margin-bottom: 30rpx;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    display: flex;
    justify-content: center;
    margin-left: 35rpx;
    margin-top: 40rpx;
    height: 610rpx;
    width: 690rpx;
    background-color: #fefefe;
    box-shadow: inset 0 0 0 2px rgb(255, 255, 255),
      0.3em 0.3em 1em rgba(0, 0, 0, 0.3);

  }

  .centered-image {
    width: 690rpx;
    margin: 0 auto;
    height: 500rpx;
    text-align: center;
  }

  .container1 {

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    display: flex;
    justify-content: center;

    height: 50rpx;
    width: 750rpx;
    background-color: #fefefe;
    box-shadow: inset 0 0 0 2px rgb(255, 255, 255),
      0.3em 0.3em 1em rgba(0, 0, 0, 0.3);


  }



  .uni-margin-wrap {

    width: 100%;
  }

  .home {
    swiper {
      width: 750rpx;
      height: 470rpx;

      image {
        width: 100%;
        height: 100%;
      }
    }
  }


  .uni-common-mt {
    margin-top: 60rpx;
    position: relative;
  }

  .info {
    position: absolute;
    right: 20rpx;
  }

  .uni-padding-wrap {
    width: 100%;
    padding: 0 100rpx;
  }

  .box1 {
    width: 96%;
    height: 22vw;
    background-color: #fefefe;
    border-radius: 24upx;
    /*  阴影 */
    box-shadow: 0 0 20upx rgba(0, 0, 0, 0.15);
    margin: 40upx 2% 0upx 2%;
    display: flex;
    align-items: center;
    justify-content: center;

    // 包含图片，数字气泡，图标的view
    .label {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 16vw;
      color: #666666;
      font-size: 26upx;

      .icon1 {
        position: relative;
        width: 7vw;
        height: 7vw;
        margin: 0 1vw 2vw 1vw;

        // 数字气泡
        .badge {
          position: absolute;
          width: 4vw;
          height: 4vw;
          background-color: #ec6d2c;
          top: -1vw;
          right: -1vw;
          border-radius: 100%;
          font-size: 20upx;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }

        // 文字上的图片
        image {
          width: 7vw;
          height: 7vw;
          z-index: 9;
        }
      }
    }

  }

  .view_tupian_wenzi {
    margin-top: 50rpx;
    display: flex;
    flex-direction: row;
    margin-left: 30rpx;
    width: 690rpx;
    height: 260rpx;

    box-shadow: 0 0 5px 1px #999
  }

  .image_1 {
    width: 150px;
    height: 100px;
    margin-left: 30rpx;
    margin-top: 15rpx;


  }

  .image_2 {
    width: 150px;
    height: 100px;
    margin-right: 30rpx;
    margin-top: 15rpx;


  }

  .view_wenzi2 {
    width: 150px;
    margin-left: 5rpx;
    display: flex;
    flex-direction: column;
    margin-left: 30rpx;
  }

  .view_wenzi3 {
    width: 200px;
    margin-right: 5px;
    display: flex;
    flex-direction: column;
    margin-left: 30rpx;
  }



  .text_small {
    font-size: 27rpx;
    word-break: break-all;
    color: #7a7878
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

  .gridBox {
    display: flex;
    align-items: center;
    font-size: 28rpx;
  }

  .gridBox image {
    width: 40rpx;
    height: 40rpx;
    margin-right: 10rpx;
  }

  .gridBox text:last-child {
    color: rgb(29, 212, 156);
  }

  .uni-margin-wrap {
    width: 690rpx;
    width: 100%;
  }

  .swiper {
    height: 300rpx;
  }

  .swiper-item {
    display: block;
    height: 300rpx;
    line-height: 300rpx;
    text-align: center;
    width: 100%;
  }

  .swiper-list {
    margin-top: 40rpx;
    margin-bottom: 0;
  }

  .uni-common-mt {
    margin-top: 60rpx;
    position: relative;
  }

  .info {
    position: absolute;
    right: 20rpx;
  }

  .uni-padding-wrap {
    width: 550rpx;
    padding: 0 100rpx;
  }
</style>