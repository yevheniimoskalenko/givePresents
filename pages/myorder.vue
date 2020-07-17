f<template>
  <div class="myOrder">
    <el-row type="flex" justify="center">
      <el-col :span="18">
        <el-row :gutter="20">
          <el-form ref="form" v-model="controlers" :model="controlers">
            <el-col :span="20">
              <el-input
                v-model="controlers.user"
                placeholder="Укажіть прізвище"
              ></el-input>
            </el-col>
            <el-col :span="4">
              <el-button
                type="primary"
                :loading="loading"
                round
                @click="findUser"
                >Пошук</el-button
              >
            </el-col>
          </el-form>
          <el-table :data="giveUser" style="width: 100%">
            <el-table-column
              prop="id_order.title"
              label="Товар"
            ></el-table-column>
            <el-table-column prop="fullName" label="Покупець"></el-table-column>
            <el-table-column
              prop="ticket"
              label="Номер квитка"
            ></el-table-column>
            <el-table-column prop="date" label="Дата"></el-table-column>
          </el-table>
          {{ giveUser }}
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      controlers: {
        user: ''
      }
    }
  },
  computed: {
    giveUser() {
      return this.$store.getters['order/getuser']
    }
  },
  methods: {
    findUser() {
      this.$refs.form.validate(async (valid) => {
        this.loading = true
        if (valid) {
          const form = {
            user: this.controlers.user
          }
          await this.$store.dispatch('order/findUser', form)
          this.loading = false
        }
      })
    }
  },
  head() {
    return { title: 'Пошук користувача який придбав квиток на сайті' }
  }
}
</script>
<style lang="scss" scoped></style>
