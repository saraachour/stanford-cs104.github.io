<script lang="ts">
  import Assignment from '$lib/layouts/Assignment.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<Assignment assignmentNumber={data.assignmentNumber}>
  <svelte:component this={data.assignment.default} />
</Assignment>
