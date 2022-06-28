<!--
 Copyright (c) 2022 Joshua Schmitt

 This software is released under the MIT License.
 https://opensource.org/licenses/MIT
-->

<!-- TODO: Add Links -->
<!-- TODO: Fix HDDS -->

<template>
  <div>
    <LanguageHeader />
    <article>
      <h1 class="rainbow-header">Equipment</h1>
      <p class="comment">The Equipment I'm using.</p>
      <div>
        <h2 class="text-white">Hardware</h2>
        <li>
          <span class="text-gray">CPU:</span>
          <span class="text-white">AMD Ryzen 5 2600</span>
        </li>
        <li>
          <span class="text-gray">GPU:</span>
          <span class="text-white">NVIDIA Geforce GTX 1050 Ti</span>
        </li>
        <li>
          <span class="text-gray">SSD:</span>
          <span class="text-white">Crucial MX500 500GB</span>
        </li>
        <li>
          <span class="text-gray">HDD 1:</span>
          <span class="text-white">Toshiba P300 1TB</span>
        </li>
        <li>
          <span class="text-gray">HDD 2:</span>
          <span class="text-white">Seagate Game Drive PS4 2TB</span>
        </li>
      </div>
      <br />
      <div>
        <h2 class="text-white">Periphery</h2>
        <li>
          <span class="text-gray">Headphones:</span>
          <span class="text-white">
            <a
              class="text-white"
              href="https://www.logitechg.com/de-de/products/gaming-audio/g733-rgb-wireless-headset.981-000864.html"
              target="_blank"
              >Logitech G733</a
            >
          </span>
        </li>
        <li>
          <span class="text-gray">Keyboard:</span>
          <span class="text-white">
            <a
              class="text-white"
              href="https://www.logitechg.com/de-de/products/gaming-keyboards/g513-backlit-mechanical-gaming-keyboard.920-009324.html"
              target="_blank"
              >Logitech G513 Carbon</a
            >
          </span>
          <span class="text-gray"><small>(Brown Switches)</small></span>
        </li>
        <li>
          <span class="text-gray">Mouse:</span>
          <span class="text-white">
            <a
              class="text-white"
              href="https://www.logitechg.com/de-de/products/gaming-mice/g502-hero-gaming-mouse.910-005470.html"
              target="_blank"
              >Logitech G502 Hero</a
            >
          </span>
        </li>
      </div>
      <br />
      <div>
        <h2 class="text-white">Software</h2>
        <li>
          <span class="text-gray">OS:</span>
          <span class="text-white">
            <a
              class="text-white"
              href="https://www.microsoft.com/en-us/windows/windows-11/"
              target="_blank"
              >Windows 11</a
            >
            /
            <a class="text-white" href="https://getfedora.org/" target="_blank"
              >Fedora Linux</a
            >
            <span class="text-gray"><small>(Workstation 36)</small></span>
          </span>
        </li>
        <li>
          <span class="text-gray">Coding:</span>
          <span class="text-white">
            <a
              class="text-white"
              href="https://code.visualstudio.com/"
              target="_blank"
              >Visual Studio Code</a
            >,
            <a
              class="text-white"
              href="https://www.jetbrains.com/products/"
              target="_blank"
              >JetBrains Tools</a
            >
            <span class="text-gray"><small>(Github Education)</small></span>,
            <a class="text-white" href="https://insomnia.rest/" target="_blank"
              >Insomnia</a
            >
          </span>
        </li>
      </div>
      <br />
      <DefaultRainbow />
    </article>
    <footer>
      <DefaultFooter />
    </footer>
  </div>
</template>

<script>
export default {
  name: 'EquipmentSite',
}
</script>
