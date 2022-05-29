<template>
  <div>
    <div class="navbar">
      <nuxt-link :to="switchLocalePath(path)">{{ text }}</nuxt-link>
    </div>
    <article>
      <h1 class="rainbow-header">Joshua Schmitt</h1>
      <p class="comment">{{ $t('index.comment') }}</p>

      <p>
        {{ $t('index.text.1') }}
      </p>

      <p>
        {{ $tc('index.text.2', 0) }}
        <a href="https://github.com/unately/">Unately</a>
        {{ $tc('index.text.2', 1) }}
        <a href="https://github.com/Unately/uBingo">uBingo</a>
        {{ $tc('index.text.2', 2) }}
        <a href="https://github.com/Unately/NodeSpace">NodeSpace</a>.
      </p>

      <p>
        {{ $t('index.text.3') }}
      </p>

      <p class="rainbow">{{ $t('index.footer') }}</p>
    </article>
    <footer>
      <DefaultFooter />
    </footer>
  </div>
</template>

<script>
import DefaultFooter from '~/components/DefaultFooter.vue'

export default {
  name: 'IndexPage',
  components: { DefaultFooter },
  asyncData({ app }) {
    if (app.i18n.locale === 'de') {
      return {
        path: 'en',
        text: 'English',
      }
    } else if (app.i18n.locale === 'en') {
      return {
        path: 'de',
        text: 'Deutsch',
      }
    }
  },
}
</script>
