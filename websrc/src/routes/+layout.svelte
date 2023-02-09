<script>
	import '../style.css';
	import Navbar from '$lib/Navbar.svelte';
</script>

<Navbar />

<main>
	<slot />
</main>

<style>
	main {
		max-width: 950px;
		margin-left: auto;
		margin-right: auto;
		padding-left: 15px;
		padding-right: 15px;
	}
</style>
