<!--
 Copyright (c) 2022 Joshua Schmitt

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <p>
    <a href="contact"> <s>Contact</s> </a>

    <a> – </a>

    <nuxt-link :to="localePath('/credits')">
      {{ $t('element.footer.credits') }}
    </nuxt-link>

    <a> – </a>

    <a target="_blank" href="https://github.com/jqshuv/portfolio">
      {{ $t('element.footer.source') }}
    </a>

    <a> – </a>

    <nuxt-link :to="localePath('/legal-notice')">
      {{ $t('element.footer.legal-notice') }}
    </nuxt-link>
  </p>
</template>
