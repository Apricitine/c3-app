<script lang="ts">
  import favicon from "$lib/assets/favicon.svg"
	import { links } from "$lib/routes"

  let { children } = $props()
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <style>
    body {
      margin: 0;
    }
  </style>
</svelte:head>

<nav>
  {#each links as link}
    <a href={link}>{`${link[0].toUpperCase()}${link.slice(1)}`}</a>
  {/each}
</nav>
{@render children?.()}

<style lang="scss">
  nav {
    display: flex;
    width: 100vw;
    height: 10vh;
    background-color: rgb(158, 4, 38);
    justify-content: space-around;
    align-items: center;

    a {
      color: white;
      text-decoration: none;
      font-weight: bold;
      font-size: large;
    }
  }
</style>
