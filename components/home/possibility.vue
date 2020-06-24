<template>
  <div class="possibility">
    <div class="possibility__title">
      <h2>Можливости проекту</h2>
      <p>
        Перерахована маленька доля проекту в якому ви можете взяти участь
      </p>
    </div>
    <div class="possibility__content">
      <el-row :gutter="20">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="possibility__item">
            <div class="image">
              <div class="img"></div>
            </div>
            <div class="possibility__main">
              <h3>Мінімум</h3>
              <p>Мінімум - вкладень</p>
            </div>
          </div>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="possibility__item">
            <div class="image">
              <div class="img"></div>
            </div>
            <div class="possibility__main">
              <h3>Швидке</h3>
              <p>Швидке отримання результату</p>
            </div>
          </div>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="possibility__item">
            <div class="image">
              <div class="img"></div>
            </div>
            <div class="possibility__main">
              <h3>Відправка</h3>
              <p>Відправка по всій україні</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style lang="scss" scoped>
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
.possibility__title {
  text-align: center;
  padding: 40px 0;
}
.el-row {
  display: flex;
}
.possibility__item {
  text-align: center;
}
</style>
