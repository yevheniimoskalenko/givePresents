<template>
  <div>
    <app-header />
    <app-possibility />
  </div>
</template>
<script>
import appHeader from '@/components/home/header'
import appPossibility from '@/components/home/possibility'
export default {
  components: { appHeader, appPossibility },
  head: {
    title: 'Головна сторінка сайту'
  }
}
</script>
<style lang="scss" scoped></style>
