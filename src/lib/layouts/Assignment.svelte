<script lang="ts">
  import { class_data, markdown, titleCase } from '$lib/classData';
  import moment from 'moment';

  export let number: number;

  $: assignment = class_data.assignments[number];

  $: name = markdown(assignment.name, /* inline = */ true);
  $: due_date = moment(assignment.due, 'YYYY/MM/DD');
</script>

<section class="assignment-header">
  <h1>{@html name}</h1>
  <div style="text-align: right; flex-grow: 1; font-style: italic; color: #888;">
    Due {due_date.format('MMMM Do, YYYY')}
    {#if assignment.materials}
      <span class="separator" />
      {#each Object.keys(assignment.materials) as material (material)}
        {#if material != 'handout'}
          [<a
            href={assignment.materials[material]}
            target="_blank"
            rel="noreferrer noopener nofollower">{titleCase(material)}</a
          >]&nbsp;&nbsp
        {/if}
      {/each}
    {/if}
  </div>
</section>

<section class="markdown-content">
  <slot />
</section>

<style>
  .markdown-content :global(h1:first-of-type) {
    display: none;
  }

  .assignment-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    padding-left: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 2rem 0;
    border-left: 0.5rem dotted #2689ff;
  }
  .assignment-header h1 {
    font-size: 2rem;
    margin: 0;
  }
  .separator::after {
    content: '//';
    padding: 0 4px;
    font-weight: 100;
  }
</style>
