<!--
 Copyright (c) 2022 Joshua Schmitt

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
    <p class="rainbow">
      <nuxt-link :to="localePath('/')">
        {{ $t('element.rainbow') }}
      </nuxt-link>
    </p>
</template>

<!-- <script>
  export default {
    props: {
      rainbow: { required: true, type: String },
    }
  };
</script> -->
