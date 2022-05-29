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

<!--
 Copyright (c) 2022 Joshua Schmitt

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->
<template>
  <div>
    <article>
      <h1 class="rainbow-header">{{ $t('legal-notice.title') }}</h1>

      <p class="comment">{{ $t('legal-notice.comment.service-provider') }}</p>
      <p>
        Evelyn Limberg <br />
        Siedlung 15 <br />
        59909 Bestwig <br />
        Germany <br />
      </p>

      <p class="comment">{{ $t('legal-notice.comment.contact-options') }}</p>
      <p class="text-gray">
        {{ $t('legal-notice.contact.email') }}:
        <span class="text-white">jqshuv[at]gmail.com</span>
        <span class="comment">({{ $t('legal-notice.info.email.at') }})</span>
        <br />
        {{ $t('legal-notice.contact.phone') }}:
        <span class="text-white">+49 1516 5944271</span> <br />
        {{ $t('legal-notice.contact.contact-form') }}:
        <NuxtLink class="text-white" to="contact"
          >https://jqshuv.xyz/contact</NuxtLink
        >
        <br />
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
  name: 'LegalNoticePage',
}
</script>
