<script lang="ts">
	export let href: string;
	export let external: boolean = false;
	export let big: boolean = false;
</script>

<li>
	{#if external}
		<a {href} target="_blank" rel="noreferrer noopener" class:big><slot /></a>
	{:else}
		<a {href} class:big><slot /></a>
	{/if}
</li>

<style>
	li {
		display: inline-block;
		margin-right: 1rem;
		list-style: none;
	}
	.big {
		font-size: 1.5rem;
	}
</style>
