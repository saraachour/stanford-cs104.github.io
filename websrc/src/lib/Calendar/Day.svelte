<script lang="ts">
	import Date from './Day/Date.svelte';

	export let date: string;
	export let header: boolean = false;
	export let holiday: boolean = false;
</script>

<div class:day={!header} class:holiday class:header>
	<Date>{date}</Date>
	<slot />
</div>

<style>
	.day:nth-child(odd) {
		background-color: #e2e5e9;
	}
	.day:nth-child(even) {
		background-color: #fafcff;
	}
	.day, .header {
		padding: 0.3em 10px;
		margin-bottom: 0.2em;
		margin-left: -10px;
		display: grid;
		grid-template: 'date topic materials assignments' / 0.5fr 1.2fr 0.9fr 0.9fr;
    column-gap: 4px;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
	}

	.header {
		/* position: relative; */
		padding-bottom: 0;
		font-weight: bold;
		align-items: flex-end;
		font-family: sans-serif;
	}
</style>
