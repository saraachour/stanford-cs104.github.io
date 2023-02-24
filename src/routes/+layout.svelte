<!-- Root layout used for all pages -->
<script>
	import '../style.css';
	import 'prismjs/themes/prism-tomorrow.min.css';
	import 'prismjs';
	import 'prismjs/components/prism-shell-session'
	import 'prismjs/components/prism-bash'
	import 'prismjs/components/prism-powershell'
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
