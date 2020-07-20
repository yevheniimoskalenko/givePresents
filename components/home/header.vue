<template>
  <header class="header">
    <div class="header___content">
      <div class="image">
        <img src="~/assets/logo.png" alt="logo site" />
      </div>
      <h1>Ку ку давай дружити!</h1>
      <p>
        В мене є до тебе подарунок, для того щоб його забрати ти повинен вибрати
        квиток і заплатити за нього!
      </p>
      <el-button
        v-scroll-to="{ el: '#anchor' }"
        type="primary"
        icon="el-icon-bottom"
        class="btn"
        circle
      ></el-button>
    </div>
  </header>
</template>
<script>
export default {
  components: {}
}
</script>
<style lang="scss" scoped>
.header {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(34, 34, 34, 0.924);
  z-index: 999;
  background-image: url('~assets/city.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.btn {
  margin-top: 10px;
}
.header___content {
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(0, 0, 0, 0.541);
  height: 100vh;
  width: 100%;
  h1 {
    font-size: 42px;
    line-height: 50px;
    color: #ffff;
  }
  p {
    color: rgb(105, 98, 98);
    line-height: 30px;
    color: rgb(202, 199, 199);
  }
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: rgb(238, 237, 237);
  }
}
@media only screen and (max-device-width: 1366px) {
  .header {
    background-attachment: scroll;
  }
}
</style>
