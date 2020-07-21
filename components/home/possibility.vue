<template>
  <div class="possibility">
    <div class="title">
      <h2>Можливості проекту</h2>
      <p>Щоб прийняти участь в розіграці ви повині пройти так етапи</p>
    </div>
    <div class="possibility__content">
      <el-row :gutter="40">
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="possibility__item">
            <div class="image">
              <div class="image-icon">
                <i class="el-icon-mobile"></i>
              </div>
            </div>
            <div class="possibility__main">
              <h3>Вибрати товар</h3>
              <p>Вибираємо товар який ви забажали</p>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="possibility__item">
            <div class="image">
              <div class="image-icon">
                <i class="el-icon-bank-card"></i>
              </div>
            </div>
            <div class="possibility__main">
              <h3>Вибираємо квиток</h3>
              <p>Після вибору товара, йдемо оплачувати</p>
            </div>
          </div>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="possibility__item">
            <div class="image">
              <div class="image-icon">
                <i class="el-icon-present"></i>
              </div>
            </div>
            <div class="possibility__main">
              <h3>Після всі етапів</h3>
              <p>Ждимо розіграшу, якщо випав саме ваш то ви забираєте його</p>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  .image-icon {
    display: flex;
    flex-direction: column;
    width: 100px;
    height: 100px;
    justify-content: center;
    align-items: center;
    background: #31aa63;
    box-shadow: 7px 5px 10px rgba(0, 0, 0, 0.349);
    border-radius: 50%;
    i {
      color: #ffff;
      font-size: 36px;
    }
  }
}

.el-col {
  padding-bottom: 20px;
}
.possibility {
  display: flex;
  flex-direction: column;
}
.possibility__item {
  text-align: center;
}
.possibility__main {
  h3 {
    margin-top: 20px;
    font-size: 22px;
    line-height: 30px;
    padding: 10px;
  }
  p {
    line-height: 20px;
    padding: 5px;
  }
}
</style>
