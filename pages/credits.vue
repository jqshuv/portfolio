<!--
 Copyright (c) 2022 Joshua Schmitt

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div>
    <article>
      <h1 class="rainbow-header">{{ $t('credits.title') }}</h1>
      <p class="comment">{{ $t('credits.comment') }}</p>
      <p>
        <li class="text-white">
          <a href="https://github.com/remy">{{ $t('credits.people.remy.name') }}</a>: {{ $t('credits.people.remy.description') }}
        </li>
      </p>
      <DefaultRainbow />
    </article>
    <footer>
      <DefaultFooter />
    </footer>
  </div>
</template>

<script>
export default {
    name: "CreditSite",
}
</script>
