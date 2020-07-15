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
      return this.$store.getters.getuser
    }
  },
  methods: {
    findUser() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          const form = {
            user: this.controlers.user
          }
          this.$store.dispatch('order/findUser', form)
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
