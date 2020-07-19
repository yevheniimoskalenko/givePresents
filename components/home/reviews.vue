<template>
  <div class="reviews">
    <div class="title">
      <h2>Відгуки</h2>
      <p>Користувачі які залешили відгук на сайті</p>
    </div>

    <div class="reviews__content">
      <el-row :gutter="30">
        <el-col
          v-for="(review, index) in reviews"
          :key="index"
          :xs="24"
          :sm="24"
          :md="8"
          :lg="8"
          :xl="8"
        >
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="reviews__item">
              <div class="message">
                <div class="avatar">
                  <el-avatar :src="review.avatar" :size="50"></el-avatar>
                </div>
                <div class="reviews__message">
                  <span>{{ review.fullName }}</span>
                  <p>{{ review.text }}</p>
                  <el-rate v-model="review.rate" disabled text-color="#ff9900">
                  </el-rate>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div class="addReviews">
        <nuxt-link to="/reviews">Створити відгук</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    reviews: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.el-col {
  padding-bottom: 20px;
}
.reviews {
  display: flex;
  flex-direction: column;
}

.reviews__item {
  widows: 100%;
  height: auto;
  max-height: 120px;
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
}
.message {
  display: flex;
  align-items: center;
}
.reviews__message {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  span {
    font-weight: bold;
  }
  p {
    padding: 0px;
    font-style: italic;
    line-height: 20px;
    height: 40px;
    overflow: hidden;
  }
}
.addReviews {
  margin-top: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
