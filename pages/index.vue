<template>
  <div>
    <app-header />
    <app-possibility />
    <app-member :members="members" />
    <app-trophy :orders="order" />
    <app-reviews :reviews="reviews" />
    <app-footer />
  </div>
</template>
<script>
import appHeader from '@/components/home/header'
import appPossibility from '@/components/home/possibility'
import appMember from '@/components/home/member'
import appTrophy from '@/components/home/trophy'
import appReviews from '@/components/home/reviews'
import appFooter from '@/components/home/footer'

export default {
  components: {
    appHeader,
    appPossibility,
    appMember,
    appTrophy,
    appReviews,
    appFooter
  },
  async asyncData({ store }) {
    const data = await store.dispatch('fetchAll')
    return { order: data.order, reviews: data.reviews, members: data.members }
  },
  data() {
    return {}
  },
  head() {
    return {
      title: 'Головна сторінка сайту',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: 'site.ua, best.site'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped></style>
