<template>
  <div class="presents">
    <el-row type="flex" justify="center">
      <el-col :span="12" :xs="24" :sm="24" :md="24" :lg="17" :xl="12">
        <div class="dtitle">
          <h2>{{ presents.title }}</h2>
          <p>{{ presents.description }}</p>
        </div>
        <div class="presents-image">
          <el-image :src="presents.urlImages" fit="scale-down"></el-image>
        </div>
        <div class="tickets">
          <div v-for="tiket in tickets" :key="tiket._id" class="ticket">
            <el-button
              plain
              round
              :disabled="tiket.isBuy"
              @click="ticket(tiket.numberTickets, tiket._id)"
            >
              {{ tiket.numberTickets }}
            </el-button>
          </div>
        </div>
        <div class="presents-form">
          <el-form ref="form" :model="data" :rules="rules">
            <el-row :gutter="20">
              <el-col :span="8" :xs="24">
                <el-form-item label="Прізвище ім'я по-батькові" prop="fullName">
                  <el-input
                    v-model="data.fullName"
                    placeholder="Іван Іванович Іванов"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8" :xs="24">
                <el-form-item label="Місце проживання" prop="residence">
                  <el-input
                    v-model="data.residence"
                    placeholder="м. Київ"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8" :xs="24">
                <el-form-item
                  label="Електроний адрес для сповіщення"
                  prop="email"
                >
                  <el-input
                    v-model="data.email"
                    placeholder="admin@gmail.ua"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="8" :xs="24">
                <el-form-item label="Номер телефону" prop="phoneNumber">
                  <el-input
                    v-model.trim="data.phoneNumber"
                    v-mask="'(0##)-###-##-##'"
                    placeholder="(053)-123-45-67"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8" :xs="24">
                <el-form-item label="Номер відділу" prop="departament">
                  <el-input
                    v-model.number="data.departament"
                    placeholder="3"
                    maxlength="3"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="8" :xs="24">
                <el-form-item label="Квиток" prop="ticket">
                  <el-input v-model="data.tickets" disabled></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item prop="success_rules">
              <el-checkbox
                v-model="data.success_rules"
                label="Згоден(на) з"
                name="checkbox"
              ></el-checkbox>
              <el-button type="text" @click="dialogRules = true"
                >правилами</el-button
              >
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                round
                :loading="loading"
                @click="buyTicket"
                >Створити кнопку для сплати</el-button
              >
            </el-form-item>
          </el-form>
          <div v-html="liqpayButton"></div>
        </div>
        <el-dialog title="Правила сайту" :visible.sync="dialogRules">
          <div class="dialog">
            <ol>
              <li>
                Всі придбані квитки йдуть на пожертвування одному переможцю
              </li>
              <li></li>
            </ol>
          </div>
        </el-dialog>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { mask } from 'vue-the-mask'
export default {
  validate({ params }) {
    return Boolean(params.id)
  },
  directives: { mask },
  async asyncData({ params, store }) {
    try {
      const presents = await store.dispatch('order/fetchId', params)
      return { presents: presents.order, tickets: presents.tickets }
    } catch (e) {}
  },
  data() {
    return {
      liqpayButton: null,
      loading: false,
      dialogRules: false,
      data: {
        fullName: '',
        residence: '',
        phoneNumber: '',
        departament: '',
        email: '',
        success_rules: [],
        tickets: null,
        idTickets: null
      },
      rules: {
        fullName: [
          {
            required: true,
            message: "Заповніть поле із прізвищем ім'я та по-батькові"
          }
        ],
        residence: [
          {
            required: true,
            message: 'Заповніть поле із містом'
          }
        ],
        phoneNumber: [
          {
            required: true,
            message: 'Заповніть поле із телефоном'
          }
        ],
        email: [
          {
            required: true,
            message: 'Заповніть поле із електроною поштою'
          },
          {
            type: 'email',
            message: 'Введіть коректну електроний адрес'
          }
        ],
        success_rules: [
          {
            type: 'array',
            required: true,
            message: 'Підтвердіть флажком, що ви згодні з правилами',
            trigger: 'change'
          }
        ],
        departament: [
          {
            required: true,
            message: 'Заповніть відділ нової пошти'
          }
        ]
      }
    }
  },
  methods: {
    buyTicket(ticket) {
      this.$refs.form.validate(async (valid) => {
        if (valid && this.data.tickets !== null) {
          try {
            const formDate = {
              fullName: this.data.fullName,
              residence: this.data.residence,
              phoneNumber: this.data.phoneNumber,
              departament: this.data.departament,
              ticket: this.data.tickets,
              id: this.$route.params.id,
              idTickets: this.data.idTickets,
              title: this.presents.title
            }
            const html = await this.$store.dispatch(
              'ticket/buyTicket',
              formDate
            )
            this.liqpayButton = html
          } catch (e) {}
        } else {
          this.$message({
            message: 'Виберіть будь ласка квиток',
            type: 'warning'
          })
        }
      })
    },
    ticket(item, id) {
      this.data.tickets = item
      this.data.idTickets = id
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
