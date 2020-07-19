<template>
  <div class="error">
    <el-image :src="img" lazy alt="not found "></el-image>
    <p>
      Сторінка не знайдена, повернутися <nuxt-link to="/">На головну</nuxt-link>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img:
        'https://res.cloudinary.com/dmrpkseez/image/upload/v1595172176/wbpgykfnyuwzxfl7jkyl.svg'
    }
  },
  head() {
    return {
      title: 'Not found'
    }
  }
}
</script>
<style lang="scss" scoped>
.el-main {
  padding: 0;
}
.error {
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  p {
    text-align: center;
  }
}
.el-image {
  display: flex;
  justify-content: center;
}
</style>
