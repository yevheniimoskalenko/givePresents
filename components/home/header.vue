<template>
  <header class="header">
    <div class="header___content">
      <div class="image">
        <div class="img"></div>
      </div>
      <h1>Ку ку давай дружити!</h1>
      <p>
        В мене є до тебе подарунок, для того щоб його забрати ти повинен вибрати
        квиток і заплатити за нього!
      </p>
      <el-button type="primary" round="">Розпочнемо</el-button>
    </div>
  </header>
</template>
<style lang="scss" scoped>
.header {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  .img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgb(238, 237, 237);
  }
}
</style>
