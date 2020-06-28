<template>
  <div class="trophy">
    <div class="title">
      <h2>Призи</h2>
      <p>Актуальні призи які зараз доступні для прийняття участі в ньому</p>
    </div>
    <div class="trophy__content">
      <el-row :gutter="30">
        <el-col
          v-for="(order, index) in orders"
          :key="index"
          :xs="8"
          :sm="8"
          :md="8"
          :lg="8"
          :xl="8"
        >
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <div class="tropty__item">
              <div class="trophy__image">
                <el-image :src="order.image" lazy></el-image>
              </div>
              <div class="trophy_main">
                <h3>{{ order.title }}</h3>
                <p>
                  {{ order.description }}
                </p>
                <el-button
                  type="primary"
                  icon="el-icon-right"
                  class="link"
                  circle
                  @click="openTrophy('32321')"
                ></el-button>
                <small>{{ order.time }}</small>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      orders: [
        {
          id: 1,
          image: '/static/presents/airpods.png',
          title: 'airpods',
          description:
            'AirPods — это звук на весь день, легко и просто. У AirPods Pro есть активное шумоподавление. Выбирайте свои.',
          time: new Date()
        },
        {
          id: 2,
          image: '/static/presents/macbook.png',
          title: 'airpods',
          description:
            'AirPods — это звук на весь день, легко и просто. У AirPods Pro есть активное шумоподавление. Выбирайте свои.',
          time: new Date()
        },
        {
          id: 3,
          image: '/static/presents/iphone11.png',
          title: 'iphone 11',
          description:
            'AirPods — это звук на весь день, легко и просто. У AirPods Pro есть активное шумоподавление. Выбирайте свои.',
          time: new Date()
        }
      ]
    }
  },
  methods: {
    openTrophy(id) {
      this.$router.push(`/order/${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.link {
  display: block;
  margin: 10px 0;
}
.el-row {
  display: flex;
}
.trophy__image {
  width: 100%;
  display: block;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: auto;
    max-width: 290px;
    background-size: cover;
  }
}
.trophy_main {
  small {
    color: rgb(139, 137, 137);
  }
}
.tropty__item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 20px;
  line-height: 20px;
  height: 500px;
}
.clearfix {
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: '';
  }

  .clearfix:after {
    clear: both;
  }
}
</style>
