<!--
 Copyright (c) 2022 Joshua Schmitt

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div>
    <article>
      <h1 v-if="error.statusCode == 404" class="rainbow-header">
        Page not found
      </h1>
      <h1 v-else-if="error.statusCode == 403" class="rainbow-header">
        No permission
      </h1>
      <h1 v-else-if="error.statusCode == 500" class="rainbow-header">
        Internal server error
      </h1>
      <h1 v-else class="rainbow-header">Error {{ error.statusCode }}</h1>

      <p class="comment">Error code: {{ error.statusCode }}</p>

      <div>
        <h4 class="text-white">Device information</h4>
        <span class="no-list">
          <li class="text-gray">
            <span>
              UserAgent:
              <span class="text-white">({{ $device.userAgent }})</span>
            </span>
          </li>
          <li class="text-gray">
            Device:
            <span v-if="$device.isMobile == true" class="text-white">
              Mobile;
            </span>
            <span v-if="$device.isMobileOrTablet == true" class="text-white">
              Mobile or Tablet;
            </span>
            <span v-if="$device.isDesktop == true" class="text-white">
              Desktop;
            </span>
            <span v-if="$device.isDesktopOrTablet == true" class="text-white">
              Desktop / Tablet;
            </span>
          </li>
          <li class="text-gray">
            Type:
            <span v-if="$device.isIos == true" class="text-white"> iOS; </span>
            <span v-if="$device.isAndroid == true" class="text-white">
              Android;
            </span>
            <span v-if="$device.isWindows == true" class="text-white">
              Windows;
            </span>
            <span v-if="$device.isMacOS == true" class="text-white">
              MacOS;
            </span>
            <span v-if="$device.isSamsung == true" class="text-white">
              Samsung;
            </span>
          </li>
          <li class="text-gray">
            Browser:
            <span v-if="$device.isSafari == true" class="text-white">
              Apple Safari;
            </span>
            <span v-if="$device.isFirefox == true" class="text-white">
              Mozilla Firefox;
            </span>
            <span v-if="$device.isEdge == true" class="text-white">
              Microsoft Edge;
            </span>
            <span v-if="$device.isChrome == true" class="text-white">
              Google Chrome;
            </span>
            <span v-if="$device.isCrawler == true" class="text-white">
              Google Crawler;
            </span>
          </li>
        </span>
      </div>
      <DefaultRainbow />
    </article>
    <footer>
      <DefaultFooter />
    </footer>
  </div>
</template>

<script>
export default {
  layout: 'error',
  props: {
    error: {
      type: Object,
      required: true,
    },
  },
}
</script>
