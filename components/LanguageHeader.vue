<!--
 Copyright (c) 2022 Joshua Schmitt

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div class="navbar">
    <nuxt-link :to="switchLocalePath(path)">{{ text }}</nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    if (this.$i18n.locale === 'de') {
      return {
        path: 'en',
        text: 'English',
      }
    } else if (this.$i18n.locale === 'en') {
      return {
        path: 'de',
        text: 'Deutsch',
      }
    } else {
      return {
        path: 'en',
        text: 'English',
      }
    }
  },
}
</script>
