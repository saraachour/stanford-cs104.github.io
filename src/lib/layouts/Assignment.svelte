<script>
  import { class_data, titleCase } from '$lib/classData';
  import { markdown } from '$lib/markdown';
  import moment from 'moment';

  /** @type {number} */
  export let assign;

  $: assignment = class_data.assignments[assign];

  $: name = markdown(assignment.name, 'html');
  $: title = markdown(assignment.name, 'plain');
  $: due_date = moment(assignment.due, 'YYYY/MM/DD');
  $: due_time = moment(class_data.assignment_due_time, "HH:mm")
</script>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<section class="assignment-header">
  <h1>{@html name}</h1>
  <div style="text-align: right; flex-grow: 1; font-style: italic; color: #888;">
    Due {due_date.format('MMMM Do, YYYY')} at {due_time.format("hh:mma")}
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
  .assignment-header h1 > :global(p) {
    margin: 0;
  }
  .separator::after {
    content: '//';
    padding: 0 4px;
    font-weight: 100;
  }
</style>
