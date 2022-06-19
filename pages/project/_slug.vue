<!--
 Copyright (c) 2022 Joshua Schmitt

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<template>
  <div>
    <LanguageHeader />
    <article>
      <h1 class="rainbow-header">{{ project.title }}</h1>
      <p class="comment">{{ project.description }}</p>

      <h3 class="text-white">Table of Content</h3>
      <nav>
        <ul>
          <li v-for="link of project.toc" :key="link.id">
            <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
          </li>
        </ul>
      </nav>
      <br />

      <nuxt-content :document="project" />
      <br />
      <DefaultRainbow />
    </article>
    <footer>
      <DefaultFooter />
    </footer>
  </div>
  <!-- <article>
    <nuxt-content :document="article" />
  </article> -->
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const project = await $content('projects', params.slug).fetch()

    return { project }
  },
}
</script>

<style>
.nuxt-content {
  color: #e1e3ee;
}
.nuxt-content code {
  color: #f80000;
}
</style>
