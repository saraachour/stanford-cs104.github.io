<script lang="ts">
	import Day from './Day.svelte';
	import Assignments from './Day/Assignments.svelte';
	import Materials from './Day/Materials.svelte';
	import Topic from './Day/Topic.svelte';

	export let number: number;
</script>

<Day date="Week {number}" header>
	{#if number == 1}
		<Topic>Topic</Topic>
		<Materials>Materials</Materials>
		<Assignments>Assignments</Assignments>
	{/if}
</Day>

<slot />
