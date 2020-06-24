<template>
  <div class="reviews">
    <div class="title">
      <h2>Відгуки</h2>
      <p>Користувачі які залешили відгук на сайті</p>
    </div>
    <div class="reviews__content">
      <el-row :gutter="30">
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <div class="reviews__item">
              <div class="message">
                <div class="avatar">
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    :size="50"
                  ></el-avatar>
                </div>
                <div class="reviews__message">
                  <span>Zoriana Derenko</span>
                  <p>
                    Сайт просо шлак, видаліть його із мого життя, це фіаско
                  </p>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8"
          ><el-card :body-style="{ padding: '0px' }" shadow="hover"
            ><div class="reviews__item">
              <div class="message">
                <div class="avatar">
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    :size="50"
                  ></el-avatar>
                </div>
                <div class="reviews__message">
                  <span>Yevhenii Moskalenko</span>
                  <p>Сайт просто пушка</p>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8">
          <el-card :body-style="{ padding: '0px' }" shadow="hover"
            ><div class="reviews__item">
              <div class="message">
                <div class="avatar">
                  <el-avatar
                    src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                    :size="50"
                  ></el-avatar>
                </div>
                <div class="reviews__message">
                  <span>Viktoria Kasap</span>
                  <p>Всім раджу спробувати, яка у кого вдача</p>
                </div>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <div class="addReviews">
        <nuxt-link to="#">Створити відгук</nuxt-link>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.el-row {
  display: flex;
}

.reviews__item {
  widows: 100%;
  height: auto;
  max-height: 120px;
  display: flex;
  flex-direction: column;
  padding: 25px 20px;
}
.message {
  display: flex;
  align-items: center;
}
.reviews__message {
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  span {
    font-weight: bold;
  }
  p {
    padding: 0px;
    font-style: italic;
    line-height: 20px;
    height: 40px;
  }
}
.addReviews {
  margin-top: 20px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
