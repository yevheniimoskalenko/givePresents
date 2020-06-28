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
          :xs="8"
          :sm="8"
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
                  <p>{{ review.message }}</p>
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
  data() {
    return {
      reviews: [
        {
          avatar:
            'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
          fullName: 'Zoriana Derenko',
          message: 'Сайт просо шлак, видаліть його із мого життя, це фіаско',
          rate: 1
        },
        {
          avatar:
            'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
          fullName: 'Yevhenii Moskalenko',
          message: 'Сайт просто пушка',
          rate: 4
        },
        {
          avatar:
            'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
          fullName: 'Viktoria Kasap',
          message: 'Всім раджу спробувати, яка у кого вдача',
          rate: 3
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.el-row {
  display: flex;
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
