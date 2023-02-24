<script lang="ts">
  import { class_data, fixupLink, titleCase } from '$lib/classData';
  import { markdown } from '$lib/markdown';
  import UnitDetails from '$lib/UnitDetails.svelte';
  import moment from 'moment';
</script>

<svelte:head>
  <title>CS 45: Assignments</title>
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
        {#each Object.keys(assignment.materials) as name}
          <li>
            [<a
              target={assignment.materials[name].startsWith('http') ||
              assignment.materials[name].startsWith('//')
                ? '_target'
                : '_self'}
              rel="noreferrer noopener"
              href={fixupLink(assignment.materials[name])}>{titleCase(name)}</a
            >]
          </li>
        {/each}
      {/if}
    </svelte:fragment>

    <svelte:fragment slot="details">
      {#if assignment.details}
        {@html markdown(assignment.details, 'html', fixupLink)}
      {/if}
    </svelte:fragment>
  </UnitDetails>
{/each}
