<!--
 Copyright (c) 2022 Joshua Schmitt

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div>
    <LanguageHeader />
    <article>
      <h1 class="rainbow-header">My Projects</h1>
      <ul>
        <li v-for="project of projects" :key="project.slug">
          <NuxtLink :to="{ name: 'blog-slug', params: { slug: project.slug } }">
            <div>
              <h2>{{ project.title }}</h2>
              <p>{{ project.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
      <DefaultRainbow />
    </article>
    <footer>
      <DefaultFooter />
    </footer>
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
      const projects = await $content('projects')
        .only(['title', 'description'])
        .sortBy('asc')
        .fetch()

      return {
        projects
      }
    }
  }
</script>
