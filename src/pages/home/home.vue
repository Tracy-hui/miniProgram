<style lang="stylus" scoped>
  .big-wrapper {
    background: #f2f2f2
  }
  .userinfo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .userinfo-avatar {
    width: 128rpx;
    height: 128rpx;
    margin: 20rpx;
    border-radius: 50%;
  }

  .userinfo-nickname {
    color: #aaa;
  }

  .img-box {
    width: 100%
    background-size: 100%
    position: relative
    > p {
      word-break: break-all
      position: absolute
      bottom: 10px
      line-height: 1.2
      left: 0
      padding: 20px
      font-weight: 300
      font-size: 24px
      color: #fff
    }
  }
  .news-wrapper {
    .news-title {
      padding: 10px 10px 0
      color: #333
      font-size: 15px
    }
    .item {
      padding: 10px
      display: flex
      background: #ffffff
      margin: 10px
      border-radius: 4px
    }
    .left {
      flex: 1
    }
    .right {
      width: 80px
      height: 80px
      position: relative
      > img {
        width: 100%
        height: 100%
      }
      .more-img {
        position: absolute
        right: 0
        bottom: 0
        background: rgba(0, 0, 0, .7)
        display: block
        padding: 4px 6px
        color: #ffffff
        font-size: 12px
      }
    }
  }
</style>

<template>
  <div class="big-wrapper">
    <slide :speed="100">
      <div class="img-box" v-for="item in latest.top_stories" :key="item">
        <img :src="item.image">
        <p>{{item.title}}</p>
      </div>
    </slide>
    <div class="news-wrapper">
      <p class="news-title">今日热闻</p>
      <div class="item" @click="goToDetails(item)" v-for="item in latest.stories" :key="item">
        <div class="left">{{item.title}}</div>
        <div class="right">
          <img :src="item.images[0]">
          <span class="more-img" v-if="item.multipic">多图</span>
        </div>
      </div>
    </div>
    <!--<div class="container" @click="clickHandle('test click', $event)">-->
      <!--<div class="userinfo" @click="bindViewTap">-->
        <!--<img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />-->
        <!--<div class="userinfo-nickname">-->
          <!--<card :text="userInfo.nickName"></card>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
import slide from 'mpvue-slide'
import card from '@/components/card'
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {
    card, slide
  },
  data () {
    return {
      userInfo: {}
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
    this.fetchList()
  },
  computed: {
    ...mapGetters(['latest'])
  },
  methods: {
    ...mapActions(['getLatest']),
    goToDetails (item) {
      const url = `../newsDetails/newsDetails?id=${item.id}`
      wx.navigateTo({ url })
    },
    bindViewTap () {
      const url = '../logs/logs'
      wx.navigateTo({ url })
    },
    async fetchList () {
      console.log(1)
      await this.getLatest()
      console.log(2)
      console.log('latest', this.latest)
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  }
}
</script>
