<!-- Root layout used for all pages -->
<script>
	import '../style.css';
  import 'highlight.js/styles/a11y-light.css';
	import Navbar from './Navbar.svelte';
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
