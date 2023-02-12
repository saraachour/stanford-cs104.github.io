<!-- Creates a callout block, with an optional yellow warning strip -->

<script lang="ts">
	export let warning: boolean = false;
</script>

<div class="alert" class:alert-warning={warning}>
	<slot />
</div>

<style>
  .alert {
    overflow-x: scroll
  }
</style>