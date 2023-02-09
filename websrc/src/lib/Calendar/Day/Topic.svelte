<script lang="ts">
	export let holiday: boolean = false;
</script>

<div>
	<slot />
</div>

<style>
	div {
		grid-area: topic;
	}
</style>
