<!-- Creates a callout block, with an optional yellow warning strip -->
<script lang="ts">
  export let warning: boolean = false;
  export let info: boolean = false;
  export let critical: boolean = false;
  export let cardinal: boolean = false;
</script>

<div
  class="alert"
  class:alert-warning={warning}
  class:alert-info={info}
  class:alert-critical={critical}
  class:alert-cardinal={cardinal}
>
  <slot />
</div>

<style>
  .alert {
    overflow-x: scroll;
  }

  .alert > :global(p:first-of-type),
  .alert > :global(p:last-of-type) {
    margin: 0;
  }
</style>
