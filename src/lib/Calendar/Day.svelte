<!-- This is one "row" of the calendar -->
<script lang="ts">
	import Date from './Day/Date.svelte';

	export let date: string;
	export let header: boolean = false;
	export let holiday: boolean = false;
	export let future: boolean = false;
	export let even: boolean = false;
	
	$: odd = !even;
</script>

<div class:day={!header} class:holiday class:header class:even class:odd class:future>
	<Date>{date}</Date>
	<slot />
</div>

<style>
	.day.even {
		background-color: #fafcff;
	}
	.day.odd {
		background-color: #f3f5f8;
	}
  .day.holiday {
    background-color: #ffeaa7;
  }
	.day, .header {
		padding: 0.3em 10px;
		margin-bottom: 0.2em;
		margin-left: -10px;
		display: grid;
		grid-template: 'date topic materials assignments due' / 0.5fr 2.0fr 0.9fr 0.9fr 0.9fr;
		column-gap: 4px;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		font-family: 'Open Sans', Helvetica, sans-serif;
		font-size: inherit;
		font-weight: 400;
		line-height: 1.4;
		color: inherit;
	}

	.header {
		padding-bottom: 0;
		font-weight: bold;
		align-items: flex-end;
	}
</style>
