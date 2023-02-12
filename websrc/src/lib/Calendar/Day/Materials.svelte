<!-- Slots into the "Materials" column -->

<div>
	<slot />
</div>

<style>
	div {
		grid-area: materials;
		display: flex;
		flex-wrap: wrap;
	}
</style>