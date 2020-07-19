<template>
  <div class="order">
    <div class="title">
      <h2>Створити приз</h2>
      <p>Товар для розіграшу призів, на сайті</p>
    </div>
    <el-row type="flex" justify="center">
      <el-col :span="12" :xs="24">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item label="Марка приза" prop="title">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="Опис приза" prop="description">
            <el-input v-model="form.description" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="Кількість квитків" prop="tickets">
            <el-input v-model="form.tickets"></el-input>
          </el-form-item>
          <el-form-item label="Фото приза">
            <el-upload
              ref="upload"
              class="upload-demo"
              action="http://localhost:3000/api/order/foto"
              :auto-upload="false"
              :on-success="hendleSuccess"
            >
              <el-button slot="trigger" size="small" type="primary"
                >select file</el-button
              >
              <el-button
                style="margin-left: 10px;"
                size="small"
                type="success"
                @click="submitUpload"
                >upload to server</el-button
              >
              <div slot="tip" class="el-upload__tip">
                jpg/png files with a size less than 500kb
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item label="Опис сторінки для розіграшу" prop="about">
            <el-input v-model="form.aboutPage" type="textarea"></el-input>
          </el-form-item>
          <el-form-item label="Ключові слова сторінки">
            <el-tag
              v-for="tag in keywords"
              :key="tag"
              closable
              :disable-transitions="false"
              @close="handleClose(tag)"
              >{{ tag }}</el-tag
            >
            <el-input
              v-if="inputVisible"
              ref="saveTagInput"
              v-model="inputValue"
              class="input-new-tag"
              size="mini"
              @keyup.enter.native="handleInputConfirm"
              @blur="handleInputConfirm"
            ></el-input>
            <el-button
              v-else
              class="button-new-tag"
              size="small"
              @click="showInput"
              >+ New Tag</el-button
            >
          </el-form-item>
          <el-form-item>
            <el-button type="primary" round :loading="loading" @click="create"
              >Створити розіграш</el-button
            >
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  middleware: ['admin'],
  data() {
    return {
      keywords: [],
      inputVisible: false,
      inputValue: '',
      loading: false,
      fileUrl: '',
      uploadFile: [],
      form: { title: '', description: '', tickets: '', about: '' },
      rules: {
        fileUrl: [
          { required: true, message: 'Завантажте зображення на приз.' }
        ],
        description: [{ required: true, message: 'Опешіть приз.' }],
        tickets: [{ required: true, message: 'Вкажіть кількість квитків.' }],
        title: [{ required: true, message: 'Вкажіть бренд товару.' }]
      }
    }
  },
  methods: {
    create() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          const form = {
            title: this.form.title,
            description: this.form.description,
            tickets: this.form.tickets,
            uload: this.fileUrl,
            keywords: this.keywords,
            aboutPage: this.form.about
          }
          this.$store.dispatch('admin/addOrder', form)
          this.$refs.upload.clearFiles()
          this.form.title = ''
          this.form.description = ''
          this.form.tickets = ''
          this.fileUrl = ''
          this.keywords = []
        }
      })
    },
    handleClose(tag) {
      this.keywords.splice(this.keywords.indexOf(tag), 1)
    },

    showInput() {
      this.inputVisible = true
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    },

    handleInputConfirm() {
      const inputValue = this.inputValue
      if (inputValue) {
        this.keywords.push(inputValue)
      }
      this.inputVisible = false
      this.inputValue = ''
    },
    hendleSuccess(response, file, fileList) {
      this.fileUrl = response.secure_url
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    submitUpload() {
      this.$refs.upload.submit()
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `The limit is 1, you selected ${
          files.length
        } files this time, add up to ${files.length + fileList.length} totally`
      )
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`Cancel the transfert of ${file.name} ?`)
    }
  },
  head: {
    title: 'Створити товар'
  }
}
</script>
<style lang="scss" scoped>
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
