<!-- Creates an external link stylized inside a box (used for materials) -->

<script lang="ts">
 export let color: string = 'black';
 export let live: boolean = false;
 export let href: string;
</script>
{#if live}
    <a {href} target="_blank" rel="noreferrer noopener" class="{color}">
	      <slot />
    </a>
{:else}
    <a {href} target="_blank" rel="noreferrer noopener" class="dead">
	      <slot />
    </a>
{/if}

<style>
 a {
		 padding: 0 0.2rem;
		 border-style: solid;
		 border-width: 0.1rem;
		 margin-top: 0.2rem;
		 margin-right: 0.2rem;
		 font-weight: normal;
		 text-decoration: none;
		 display: inline-block;
 }
 a:hover {
		 background-color: inherit;
		 text-decoration: none;
		 filter: brightness(2);
 }
 a {
     border-color: grey;
      color: grey;
  }
 a:active {
		 background-color: #0002;
 }
 a.dead {
     pointer-events: none;
     border-color: #5c6d70;
     color: #5c6d70;
 }

 a.darkblue {
		 border-color: #2c2c54;
		 color: #2c2c54;
 }


	a.blue {
		border-color: #2689ff;
		color: #2689ff;
	}

	a.black {
		border-color: black;
		color: black;
	}

	a.purple {
		border-color: #5a428c;
		color: #5a428c;
	}

 a.green {
		 border-color: #27ae60;
		 color: #27ae60;
 }


	a.yellow {
		border-color: #e1ad01;
		color: #e1ad01;
	}

	a.red {
		border-color: #ad1515;
		color: #ad1515;
	}

	a.brown {
		border-color: #964b00;
		color: #964b00;
	}

</style>
