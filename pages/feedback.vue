<template>
  <div class="feedback">
    <div class="title">
      <h2>Зворотній зв'язок</h2>
      <p>Залишити повідомлення, або повідомити про помилку</p>
    </div>
    <el-form ref="form" :model="controlers" :rules="rules">
      <el-row :gutter="20">
        <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <el-form-item label="Електроний адрес" prop="email">
            <el-input v-model="controlers.email" placeholder=""></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <el-form-item label="Ваше ім'я" prop="name">
            <el-input v-model="controlers.name" placeholder=""></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="Повідомлення" prop="messages">
        <el-input
          v-model="controlers.messages"
          type="textarea"
          placeholder=""
        ></el-input>
      </el-form-item>
      <el-form-item label="Статус" prop="status">
        <el-select v-model="status" placeholder="Виберіть статус">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" round="" :loading="loading" @click="send"
          >Відправити</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      status: '',
      options: [
        {
          value: 'Помилка',
          label: 'Помилка'
        },
        {
          value: 'Розвиток',
          label: 'Розвиток'
        },
        {
          value: 'Інше питання',
          label: 'Інше питання'
        }
      ],
      loading: false,
      controlers: { email: '', name: '', messages: '' },
      rules: {
        email: [{ required: true }],
        name: [{ required: true }],
        messages: [{ required: true }],
        status: [{ required: true }]
      }
    }
  },
  methods: {
    send() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          try {
            this.loading = true
            const forDate = {
              name: this.controlers.name,
              email: this.controlers.email,
              messages: this.controlers.messages,
              status: this.controlers.status
            }
            this.$store.despatch('admin/feedback', forDate)
          } catch (e) {
          } finally {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>
