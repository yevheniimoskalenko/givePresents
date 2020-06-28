<template>
  <div class="presents">
    <div class="title">
      <h2>{{ presents.title }}</h2>
      <p>{{ presents.description }}</p>
    </div>
    <div class="presents-image">
      <el-image :src="presents.image" fit="scale-down"></el-image>
    </div>
    <div class="tickets">
      <div v-for="(tiket, index) in 200" :key="index" class="ticket">
        <el-button plain>{{ tiket }}</el-button>
      </div>
    </div>
    <div class="presents-form">
      <el-form ref="form" :model="data" :rules="rules">
        <el-form-item label="Прізвище ім'я по-батькові" prop="fullName">
          <el-input v-model="data.fullName"></el-input>
        </el-form-item>
        <el-form-item label="Місце проживання" prop="residence">
          <el-input v-model="data.residence"></el-input>
        </el-form-item>
        <el-form-item label="Номер телефону" prop="phoneNumber">
          <el-input v-model="data.phoneNumber"></el-input>
        </el-form-item>
        <el-form-item label="Квиток">
          <el-input v-model="data.tikets" disabled=""></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round="">Придбати</el-button>
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
      data: { fullName: '', residence: '', phoneNumber: '' },
      rules: {
        fullName: [
          {
            required: true
          }
        ],
        residence: [
          {
            required: true
          }
        ],
        phoneNumber: [
          {
            required: true
          }
        ]
      }
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
.tickets {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.ticket {
  padding: 10px;
}
.presents-image {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}
</style>
