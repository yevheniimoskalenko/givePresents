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
          :xs="24"
          :sm="24"
          :md="8"
          :lg="8"
          :xl="8"
        >
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
            <div class="tropty__item">
              <div class="trophy__image">
                <el-image :src="order.urlImages" lazy class="image"></el-image>
              </div>
              <div class="trophy_main">
                <h3>{{ order.title }}</h3>
                <p>{{ order.description }}</p>
                <el-button
                  type="primary"
                  icon="el-icon-right"
                  class="link"
                  circle
                  @click="openTrophy(order._id)"
                ></el-button>

                <small
                  ><i class="el-icon-date"></i
                  >{{
                    order.date | moment('dddd, MMMM Do YYYY, h:mm:ss a')
                  }}</small
                >
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
  props: {
    orders: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  methods: {
    openTrophy(id) {
      this.$router.push(`/order/${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.el-image {
  display: flex;
  justify-content: center;
}
.el-col {
  padding-bottom: 20px;
}
.link {
  display: block;
  margin: 10px 0;
}

.trophy {
  display: flex;
  flex-direction: column;
}
.trophy__image {
  width: 100%;
  display: block;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.trophy_main {
  small {
    color: rgb(139, 137, 137);
    font-size: 14px;
    i {
      padding: 10px;
    }
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
.el-image__inner {
  display: flex;
  justify-content: center;
}
</style>
