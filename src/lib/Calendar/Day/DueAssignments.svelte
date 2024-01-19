<!-- Slots into the "DueAssignments" column -->

<div>
	<slot />
</div>

<style>
	div {
		grid-area: due;
    display: flex;
    flex-wrap: wrap;
	}
</style>