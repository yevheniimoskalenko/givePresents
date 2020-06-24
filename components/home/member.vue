<template>
  <div class="member">
    <div class="title">
      <h2>Учасники</h2>
      <p>Всі користувачі які взяли участь, а також переможці</p>
    </div>
    <div class="member__content">
      <el-row>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="member__item">
            <h3>Учасників:</h3>
            <span>1 430</span>
          </div>
        </el-col>
        <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="12">
          <div class="member__item">
            <h3>Переможці:</h3>
            <span>1</span>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.el-row {
  display: flex;
}
.member__item {
  text-align: center;
}
</style>
