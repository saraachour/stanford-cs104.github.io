<script lang="ts">
	import { onMount } from 'svelte';

	import hljs from 'highlight.js/lib/core';
	import shell from 'highlight.js/lib/languages/shell';
	import powershell from 'highlight.js/lib/languages/powershell';

	hljs.registerLanguage('shell', shell);
	hljs.registerLanguage('powershell', powershell);

	export let language: string | null = null;
	export let prefix: string | null = null;

	let code: HTMLElement;

	onMount(() => {
		if (language) {
			hljs.highlightElement(code);
		}
	});
</script>

<code bind:this={code} class={language ? `language-${language}` : ''}
	><span style="user-select: none;">{prefix ? `${prefix} ` : ''}</span><slot /></code
>

<style>
	code {
		display: block;
		background-color: transparent;
	}
	:global(.prompt_) {
		user-select: none;
	}
</style>
