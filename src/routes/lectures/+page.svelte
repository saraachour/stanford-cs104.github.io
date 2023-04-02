<script lang="ts">
  import { getLectureMoment, fixupLink, class_data } from '$lib/classData';
  import { markdown } from '$lib/markdown';
  import MaterialsList from '$lib/MaterialsList.svelte';
  import UnitDetails from '$lib/UnitDetails.svelte';
</script>

<svelte:head>
  <title>CS 45: Lectures</title>
</svelte:head>

<h2>Lectures</h2>

<!-- Generates lecture details from the yaml -->
{#each class_data.lectures as lecture, i}
  {#if !lecture.holiday}
    <UnitDetails>
      <svelte:fragment slot="title">
        {@html markdown(lecture.topic)}
      </svelte:fragment>

      <svelte:fragment slot="date">{getLectureMoment(i).format('dddd, MMMM D')}</svelte:fragment>
      <svelte:fragment slot="links">
        {#if lecture.materials}
          <MaterialsList materials={lecture.materials} />
        {/if}
      </svelte:fragment>

      <svelte:fragment slot="details">
        {#if lecture.details}
          {@html markdown(lecture.details, 'html', fixupLink)}
        {/if}
      </svelte:fragment>
    </UnitDetails>
  {/if}
{/each}
