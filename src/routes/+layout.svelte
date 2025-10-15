<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
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
	<a href="">ching</a>
	<a href="">chong</a>
	<a href="">chink</a>
	<a href="">chonk</a>
</nav>
{@render children?.()}

<style lang="scss">
	nav {
		display: flex;
		width: 100vw;
		height: 10vh;
		background-color: rgb(156, 46, 46);
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
