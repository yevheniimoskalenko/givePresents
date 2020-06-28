<template>
  <div class="presents">
    <div class="title">
      <h2>{{ presents.title }}</h2>
      <p>{{ presents.description }}</p>
    </div>
    <div class="presents-image">
      <el-image :src="presents.image" fit="scale-down"></el-image>
    </div>
    <div class="tikets">
      <div v-for="(tiket, index) in 200" :key="index" class="tiket">
        <el-button plain>{{ tiket }}</el-button>
      </div>
    </div>
    <div class="presents-form">
      <el-form ref="form" :model="data" :rules="rules">
        <el-form-item label="Прізвище ім'я по-батькові">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Місце проживання">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Номер телефону">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="Квиток">
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      presents: {
        title: 'airpods',
        image:
          'https://avic.ua/assets/cache/products/216120/apple-airpods-with-charging-case-mv7n2-1-prod_md.jpg',
        description:
          'AirPods настраиваются в одно касание. Автоматически включаются и устанавливают соединение. Пользоваться ими невероятно легко. Они оснащены специальными сенсорами, поэтому когда вы снимаете наушники, воспроизведение останавливается. При этом AirPods великолепно взаимодействуют как с iPhone, так и с Apple Watch, iPad и Mac.'
      },
      data: {},
      rules: {}
    }
  },
  head() {
    return {
      title: 'Подарунок'
    }
  }
}
</script>
<style lang="scss" scoped>
.tikets {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.tiket {
  padding: 10px;
}
.presents-image {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
</style>
