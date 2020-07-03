<template>
  <div class="reviews">
    <div class="title">
      <h2>Залишити відгук про сайт</h2>
      <p>
        Напишіть про користь сайту, для вас в нашому житті, або плюси які ви
        бачте.
      </p>
    </div>
    <div class="reviews__content">
      <el-row>
        <el-col>
          <div v-if="!$auth.$state" class="auth">
            <el-tag type="warning"
              >Для того щоб залишити відгук потрібо авторизуватися через
              facebook</el-tag
            >
            <el-button
              type="primary"
              class="auth-btn"
              round
              @click="authFacebook"
              >Авторизуватися</el-button
            >
          </div>
          <div v-else class="reviews__message">
            <div class="user">
              <el-avatar
                :src="$auth.$state.user.picture.data.url"
                :size="50"
              ></el-avatar>
              <div class="full-name">
                <span>{{ $auth.$state.user.name }}</span>
              </div>
            </div>
            <el-form ref="form" :model="form" :rules="rules">
              <el-form-item prop="message" label="Ваш відгук">
                <el-input
                  v-model="form.message"
                  type="textarea"
                  :rows="3"
                  maxlength="90"
                  show-word-limit
                ></el-input>
              </el-form-item>
              <el-form-item prop="rate">
                <el-rate v-model="form.rate"></el-rate>
              </el-form-item>
              <el-form-item>
                <vue-recaptcha
                  ref="recaptcha"
                  sitekey="6LealJMUAAAAAEtYcN5wjrIIPWNIZ4WeaEGVkff8"
                  :load-recaptcha-script="true"
                  @expired="onCaptchaExpired"
                  @verify="onCaptchaVerified"
                ></vue-recaptcha>
              </el-form-item>
              <el-button
                type="primary"
                round
                :disabled="!verefy"
                :loading="loading"
                @click="sendReview"
                >Відправити</el-button
              >
            </el-form>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import VueRecaptcha from 'vue-recaptcha'
export default {
  components: { VueRecaptcha },
  data() {
    return {
      verefy: false,
      loading: false,
      form: {
        message: '',
        rate: 1
      },
      rules: {
        message: [
          { required: true, message: 'Відгук повинет бути заповнений' }
        ],
        rate: [{ required: true, message: 'Оцініть сайт' }]
      }
    }
  },
  methods: {
    authFacebook() {
      this.$auth.loginWith('facebook')
    },
    sendReview() {
      this.$refs.form.validate((valid) => {
        if (valid && this.verefy === true) {
          this.loading = true
          try {
            const DataForm = {
              id: this.$auth.$state.user.id,
              fullName: this.$auth.$state.user.name,
              avatar: this.$auth.$state.user.picture.data.url,
              text: this.form.message,
              rate: this.form.rate,
              email: this.$auth.$state.user.email
            }
            this.$store.dispatch('reviews/addReviews', DataForm)
            this.$message({
              message: 'Ваш відгук відправлений на модерацію.',
              type: 'success'
            })
            this.form.message = ''
          } catch (e) {
            this.$message({
              message: 'Warning, this is a warning message.',
              type: 'warning'
            })
          } finally {
            this.loading = false
          }
        }
      })
    },
    async onCaptchaVerified(recaptchaToken) {
      const token = { token: recaptchaToken }
      const verefy = await this.$store.dispatch('reviews/verefy', token)
      this.verefy = verefy.success
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset()
    }
  },
  head: {
    title: 'Залишити відгук'
  }
}
</script>
<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
}
.full-name {
  span {
    padding: 10px;
  }
}
.el-textarea {
  width: 500px;
}
.reviews__content,
.auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.auth-btn {
  margin-top: 1rem;
}
.reviews {
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
}
.el-form {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
}
</style>
