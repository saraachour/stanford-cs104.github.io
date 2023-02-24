<script lang="ts">
  import { fixupLink, getTarget, titleCase } from './classData';

  export let materials: Record<string, string>;
  export let filter: ((name: string, link: string) => boolean) | null = null;
  export let spacing: string = '2px';

  $: names = Object.keys(materials);
</script>

{#each names as name, i (name)}
  {#if filter?.(name, materials[name]) ?? true}
    <span style="margin-right: {i == names.length - 1 ? 'inherit' : spacing};">
      [<a
        href={fixupLink(materials[name])}
        target={getTarget(materials[name])}
        rel="noreferrer noopener nofollower">{titleCase(name)}</a
      >]
    </span>
  {/if}
{/each}
