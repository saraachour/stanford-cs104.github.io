<script lang="ts">
  import { class_data, fixupLink } from '$lib/classData';
  import { markdown } from '$lib/markdown';
  import MaterialsList from '$lib/MaterialsList.svelte';
  import UnitDetails from '$lib/UnitDetails.svelte';
  import moment from 'moment';
</script>

<svelte:head>
  <title>CS 104: Assignments</title>
</svelte:head>

<h2>Assignments</h2>

<!-- Generates assignment details from the yaml -->
{#each class_data.assignments as assignment}
  <UnitDetails>
    <svelte:fragment slot="title">
      {@html markdown(assignment.name)}
    </svelte:fragment>
    <svelte:fragment slot="date">
      Due {moment(assignment.due, 'YYYY/MM/DD').format('dddd, MMMM D')}. Worth {assignment.points}
      point{assignment.points !== 1 ? 's' : ''}.
    </svelte:fragment>
    <svelte:fragment slot="links">
      {#if assignment.materials}
        <MaterialsList materials={assignment.materials} />
      {/if}
    </svelte:fragment>

    <svelte:fragment slot="details">
      {#if assignment.details}
        {@html markdown(assignment.details, 'html', fixupLink)}
      {/if}
    </svelte:fragment>
  </UnitDetails>
{/each}
