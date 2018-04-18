<style lang="stylus" scoped>
  .big-wrapper {
    .top {
      position: relative
      .top-title {
        position: absolute
        bottom: 20px
        line-height: 1.2
        left: 0
        padding: 10px
        font-weight: 300
        font-size: 24px
        color: #fff
      }
      .top-source {
        position: absolute
        bottom: 10px
        right: 0
        padding: 10px
        font-weight: 300
        font-size: 12px
        color: #d3d3d3
      }
    }
  }
</style>

<template>
  <div class="big-wrapper">
    <div class="top">
      <img :src="newsDetails.image" alt="">
      <p class="top-title">{{newsDetails.title}}</p>
      <span class="top-source">{{newsDetails.image_source}}</span>
    </div>
    <div v-if="newsDetails.body">
      <rich-text class="content" :nodes="richText"></rich-text>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  components: {
  },
  data () {
    return {
      id: null
    }
  },
  onLoad (option) {
    this.id = option.id
    this.fetchList()
  },
  computed: {
    ...mapGetters(['newsDetails']),
    richText () {
      return this.newsDetails.body.split('<script')[0]
    }
  },
  methods: {
    ...mapActions(['getNewDetails']),
    bindViewTap () {
      const url = '../logs/logs'
      wx.navigateTo({ url })
    },
    async fetchList () {
      console.log(1)
      await this.getNewDetails(this.id)
      console.log(2)
      console.log('newsDetails', this.newsDetails)
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
