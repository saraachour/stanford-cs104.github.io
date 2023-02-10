<script lang="ts" context="module">
	import { browser } from '$app/environment';
	import { writable } from 'svelte/store';

	export type System = 'mac' | 'windows' | 'linux';

	export const system = writable<System | null>(null);

	if (browser) {
		if (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
			system.set('mac');
		} else if (/(Win)/i.test(navigator.platform)) {
			system.set('windows');
		} else {
			system.set('linux');
		}
	}
</script>

<script lang="ts">
	export let mac: boolean = false;
	export let windows: boolean = false;
	export let linux: boolean = false;
	export let unknown: boolean = false;

	$: shouldShow =
		(mac && $system === 'mac') ||
		(windows && $system === 'windows') ||
		(linux && $system === 'linux') ||
		(unknown && $system === null);
</script>

{#if shouldShow}
	<slot />
{/if}
