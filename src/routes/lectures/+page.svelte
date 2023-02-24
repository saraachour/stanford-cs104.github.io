<script lang="ts">
  import { getLectureMoment, fixupLink, titleCase, class_data } from '$lib/classData';
  import { markdown } from '$lib/markdown';
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
          {#each Object.keys(lecture.materials) as name}
            <li>
              [<a
                target={lecture.materials[name].startsWith('http') ||
                lecture.materials[name].startsWith('//')
                  ? '_target'
                  : '_self'}
                rel="noreferrer noopener"
                href={fixupLink(lecture.materials[name])}>{titleCase(name)}</a
              >]
            </li>
          {/each}
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
