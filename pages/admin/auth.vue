<template>
  <div class="auth">
    <div class="auth-form">
      <el-form ref="form" :model="controlers" :rules="rules">
        <el-form-item prop="email" label="email">
          <el-input v-model="controlers.email"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="password">
          <el-input v-model="controlers.password" type="password"></el-input>
        </el-form-item>
        <el-button type="primary" round @click="auth">login</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      controlers: {
        email: '',
        password: ''
      },
      rules: {
        email: [{ required: true }, { type: 'email' }],
        password: [{ required: true }]
      }
    }
  },
  methods: {
    auth() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          try {
            const formData = {
              email: this.controlers.email,
              password: this.controlers.password
            }
            const response = await this.$auth.loginWith('local', {
              data: formData
            })
            console.log(response)
          } catch (e) {
            console.log(e)
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.auth {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.auth-form {
  background: #ebebeb;
  padding: 20px;
  border-radius: 5px;
}
</style>
