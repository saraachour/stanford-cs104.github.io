<script>
  /** @type {string | undefined | null}*/
  export let title;
</script>

<svelte:head>
  {#if title}
    <title>{title}</title>
  {/if}
</svelte:head>

<slot />
