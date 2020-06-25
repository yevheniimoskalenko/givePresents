<template>
  <div class="trophy">
    <div class="title">
      <h2>Призи</h2>
      <p>Актуальні призи які зараз доступні для прийняття участі в ньому</p>
    </div>
    <div class="trophy__content">
      <el-row :gutter="30">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <div class="tropty__item">
              <div class="trophy__image">
                <img src="@/static/presents/airpods.png" />
              </div>
              <div class="trophy_main">
                <h3>airpods</h3>
                <p>
                  AirPods — это звук на весь день, легко и просто. У AirPods Pro
                  есть активное шумоподавление. Выбирайте свои.
                </p>
                <el-button
                  type="primary"
                  icon="el-icon-right"
                  class="link"
                  circle
                  @click="openTrophy('32321')"
                ></el-button>
                <small>{{ time }}</small>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <div class="tropty__item">
              <div class="trophy__image">
                <img src="@/static/presents/macbook.png" />
              </div>
              <div class="trophy_main">
                <h3>airpods</h3>
                <p>
                  AirPods — это звук на весь день, легко и просто. У AirPods Pro
                  есть активное шумоподавление. Выбирайте свои.
                </p>
                <el-button
                  type="primary"
                  class="link"
                  icon="el-icon-right"
                  circle
                  @click="openTrophy('323214')"
                ></el-button>
                <small>{{ time }}</small>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <div class="tropty__item">
              <div class="trophy__image">
                <img src="@/static/presents/iphone11.png" />
              </div>
              <div class="trophy_main clearfix">
                <h3>airpods</h3>
                <p>
                  AirPods — это звук на весь день, легко и просто. У AirPods Pro
                  есть активное шумоподавление. Выбирайте свои.
                </p>
                <el-button
                  type="primary"
                  class="link"
                  icon="el-icon-right"
                  circle
                  @click="openTrophy('323223')"
                ></el-button>
                <small>{{ time }}</small>
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
      time: new Date()
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
