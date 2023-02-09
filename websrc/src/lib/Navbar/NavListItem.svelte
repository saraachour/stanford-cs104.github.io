<script lang="ts">
	export let href: string;
	export let external: boolean = false;
</script>

<li>
	{#if external}
		<a {href} target="_blank" rel="noreferrer noopener"><slot /></a>
	{:else}
		<a {href}><slot /></a>
	{/if}
</li>

<style>
	li {
		display: inline-block;
		margin-right: 1rem;
		list-style: none;
	}
</style>
