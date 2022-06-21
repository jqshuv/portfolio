<!--
 Copyright (c) 2022 Joshua Schmitt

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<template>
  <div>
    <LanguageHeader />
    <article>
      <h1 class="rainbow-header">{{ $t('discord.title') }}</h1>
      <p class="comment">{{ $t('discord.comment') }}</p>
      <h4 class="text-white">Server Info</h4>
      <span>
        <span class="text-gray">
          {{ $t('discord.server.name') }}:
          <span class="text-white">{{ discordserver.name }}</span>
          <br />
        </span>

        <span v-if="discordserver.description == !null" class="text-gray">
          {{ $t('discord.server.name') }}:
          <span class="text-white">{{ discordserver.description }}</span>
          <br />
        </span>

        <span class="text-gray">
          {{ $t('discord.server.id') }}:
          <span class="text-white">{{ discordserver.id }}</span>
          <br />
        </span>
        <br />
        <span class="text-gray">
          {{ $t('discord.server.invite') }}:
          <a class="text-white" href="https://discord.gg/qrd" target="_blank">{{
            $t('discord.server.click')
          }}</a>
          <br />
        </span>
      </span>
      <br />
      <DefaultRainbow />
      <DefaultFooter />
    </article>
  </div>
</template>

<script>
export default {
  name: 'DiscordSite',
  async asyncData() {
    let discordserver

    const axios = require('axios').default

    const options = {
      method: 'GET',
      url: 'https://discord.com/api/guilds/903750807957147718',
      headers: {
        Authorization: 'Bot ' + process.env.DISCORD_TOKEN,
      },
    }

    await axios
      .request(options)
      .then(function (response) {
        discordserver = response.data
      })
      .catch(function (error) {
        console.error(error)
      })

    return {
      discordserver,
    }
  },
}
</script>
