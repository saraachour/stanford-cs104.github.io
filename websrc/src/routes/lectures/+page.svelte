<script lang="ts">
	import { getLectureMoment, fixupLink, titleCase, markdown, class_data } from '$lib/classData';
	import UnitDetails from '$lib/UnitDetails.svelte';
	import { marked } from 'marked';
</script>

<svelte:head>
	<title>CS 45: Lectures</title>
</svelte:head>

<h2>Lectures</h2>

<!-- Generates lecture details from the yaml -->
{#each class_data.lectures as lecture, i}
	{#if !lecture.holiday}
		<UnitDetails>
			<svelte:fragment slot="title">
				{@html marked.parseInline(lecture.topic)}
			</svelte:fragment>

			<svelte:fragment slot="date">{getLectureMoment(i).format('dddd, MMMM D')}</svelte:fragment>
			<svelte:fragment slot="links">
				{#if lecture.materials}
					{#each Object.keys(lecture.materials) as name}
						<li>
							[<a
								target="_blank"
								rel="noreferrer noopener"
								href={fixupLink(lecture.materials[name])}>{titleCase(name)}</a
							>]
						</li>
					{/each}
				{/if}
			</svelte:fragment>

			<svelte:fragment slot="details">
				{#if lecture.details}
					{@html markdown(lecture.details)}
				{/if}
			</svelte:fragment>
		</UnitDetails>
	{/if}
{/each}
