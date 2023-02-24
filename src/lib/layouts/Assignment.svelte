<script>
  import { class_data, fixupLink, getTarget, titleCase } from '$lib/classData';
  import { markdown } from '$lib/markdown';
  import MaterialsList from '$lib/MaterialsList.svelte';
  import moment from 'moment';

  /** @type {number} */
  export let assign;

  $: assignment = class_data.assignments[assign];

  $: name = markdown(assignment.name, 'html');
  $: title = markdown(assignment.name, 'plain');
  $: due_date = moment(assignment.due, 'YYYY/MM/DD');
  $: due_time = moment(class_data.assignment_due_time, 'HH:mm');
</script>

<svelte:head>
  <title>CS 45: {title}</title>
</svelte:head>

<section class="assignment-header">
  <h1>{@html name}</h1>
  <div class="assignment-details">
    Due {due_date.format('MMMM Do, YYYY')} at {due_time.format('hh:mma')}
    {#if assignment.materials}
      <span class="separator" />
      <MaterialsList
        materials={assignment.materials}
        filter={(name) => name != 'handlout'}
        spacing="4px"
      />
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

  .assignment-details {
    text-align: right;
    flex-grow: 1;
    font-style: italic;
    color: #888;
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
