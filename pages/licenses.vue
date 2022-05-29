<!--
 Copyright (c) 2022 Joshua Schmitt

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<!--
 Copyright (c) 2022 Joshua Schmitt

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<template>
  <div>
    <article>
      <h1 class="rainbow-header">{{ $t('licenses.title') }}</h1>
      <p class="comment">{{ $t('licenses.comment') }}</p>

      <li class="text-white">
        <NuxtLink class="text-white" to="/license/MIT">
          {{ $t('licenses.license.mit') }}
        </NuxtLink>
      </li>
      <li class="text-white">
        <NuxtLink class="text-white" to="/license/ISC">
          {{ $t('licenses.license.isc') }}
        </NuxtLink>
      </li>

      <DefaultRainbow />
    </article>
    <footer>
      <DefaultFooter />
    </footer>
  </div>
</template>

<script>
export default {
  name: 'LicensePage',
}
</script>
