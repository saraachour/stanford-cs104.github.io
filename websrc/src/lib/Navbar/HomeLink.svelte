<script>
	import { base } from '$app/paths';
</script>

<td>
	<a href={base}>
		<slot />
	</a>
</td>

<style>
	a {
		font-size: 1.5rem;
	}
</style>
