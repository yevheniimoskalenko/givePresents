<template>
  <div>
    <app-header />
    <app-possibility />
    <app-member />
    <app-trophy />
    <app-reviews />
  </div>
</template>
<script>
import appHeader from '@/components/home/header'
import appPossibility from '@/components/home/possibility'
import appMember from '@/components/home/member'
import appTrophy from '@/components/home/trophy'
import appReviews from '@/components/home/reviews'

export default {
  components: { appHeader, appPossibility, appMember, appTrophy, appReviews },
  data() {
    return {}
  },
  head: {
    title: 'Головна сторінка сайту'
  }
}
</script>
<style lang="scss" scoped></style>
