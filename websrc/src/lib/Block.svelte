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