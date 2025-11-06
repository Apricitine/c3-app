<script lang="ts">
  import favicon from "$lib/assets/favicon.svg"
  import { links } from "$lib/routes"

  let searchTerm = $state()

  let { data } = $props()
</script>

<svelte:head>
  <link rel="icon" href={favicon} />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
    rel="stylesheet"
  />
  <style>
    body {
      margin: 0;
			font-family: "Nunito Sans", sans-serif;
    }	
  </style>
</svelte:head>

<nav>
  {#each links as link}
    <a href={link}>{`${link[0].toUpperCase()}${link.slice(1)}`}</a>
  {/each}
</nav>


<main>
  <input
    type="search"
    placeholder="search "
    bind:value={searchTerm}
  />
  <div class="searchquery">
    
    
    {data}


  </div>
</main>


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
  main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
    
    input { 
      width: 50vw;
      height: 5vh;
      font-family: "Nunito Sans", sans-serif;
      font-size: large;
      font-weight: bold;
      text-decoration: none;
      
    }
    div.searchquery {
      width: 70vw;
      height: 60vh;



    }
  }
</style>
