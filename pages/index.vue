<template>
  <div>
    <app-header />
    <app-possibility />
    <app-member />
    <div class="trophy">
      <div class="title">
        <h2>Призи</h2>
        <p>Актуальні призи які зараз доступні для прийняття участі в ньому</p>
      </div>
    </div>
  </div>
</template>
<script>
import appHeader from '@/components/home/header'
import appPossibility from '@/components/home/possibility'
import appMember from '@/components/home/member'

export default {
  components: { appHeader, appPossibility, appMember },
  head: {
    title: 'Головна сторінка сайту'
  }
}
</script>
<style lang="scss" scoped></style>
