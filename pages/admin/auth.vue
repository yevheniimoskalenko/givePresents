<template>
  <div class="auth">
    <div class="logo-site">
      <img src="~assets/laptop-with-slack-by-oblik-studio.png" />
    </div>
    <el-card class="auth-form">
      <h2>Вхід в адмін панель</h2>
      <el-form ref="form" :model="controlers" :rules="rules">
        <el-form-item prop="email" label="Електрона пошта">
          <el-input v-model="controlers.email"></el-input>
        </el-form-item>
        <el-form-item prop="password" label="Пароль">
          <el-input v-model="controlers.password" type="password"></el-input>
        </el-form-item>
        <el-button type="primary" round :loading="loading" @click="auth"
          >Увійти</el-button
        >
        <nuxt-link to="/">На головну</nuxt-link>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  layout: 'emit',
  data() {
    return {
      loading: false,
      controlers: {
        email: '',
        password: ''
      },
      rules: {
        email: [
          { required: true, message: 'Електрона пошта повина бути заповнена' },
          { type: 'email', message: 'Уведіть коректно пошту' }
        ],
        password: [{ required: true, message: 'Будь ласка заповніть пароль' }]
      }
    }
  },
  methods: {
    auth() {
      this.$refs.form.validate(async (valid) => {
        if (valid) {
          this.loading = true
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
          } finally {
            this.loading = false
          }
        }
      })
    }
  },
  head: {
    title: 'Вхід в адмін панель'
  }
}
</script>
<style lang="scss" scoped>
.auth {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.auth-form {
  h2 {
    font-weight: 500;
    text-align: center;
  }
}
.logo-site {
  margin-bottom: 20px;
  img {
    width: 100px;
  }
}
</style>
