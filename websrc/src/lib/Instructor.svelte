<script lang="ts">
	interface OfficeHour {
		when: string;
		where: string;
		url?: string;
	}

	export let name: string;
	export let role: string = 'Instructor';
	export let email: string | null = null;
	export let officeHours: OfficeHour[] = [];
	export let src: string;
</script>

<div class="profile-image-container">
	<img {src} alt={name} class="profile-image" />
	<div class="instructor-name">{name}</div>
	<div class="instructor-info">{role}</div>
	{#if email != null}
		<div class="instructor-info"><a href="mailto:{email}">{email}</a></div>
	{/if}
	{#if officeHours.length > 0}
		<div class="office-hours">Office Hours:</div>
	{/if}
	{#each officeHours as { when, where, url }}
		<div class="instructor-info">
			{when}
			{#if url}
				<a href={url} rel="noopener noreferrer" target="_blank">{where}</a>
			{:else}
				{where}
			{/if}
		</div>
	{/each}
</div>

<style>
	.profile-image-container {
		margin-bottom: 10px;
		margin-right: 50px;
		display: inline-block;
		vertical-align: top;
	}
	.profile-image {
		height: 150px;
		width: 150px;
	}
	.instructor-name {
		font-weight: 900;
		font-size: 16px;
		margin-top: 3px;
	}

	.instructor-info {
		margin-top: 3px;
		font-weight: 300;
	}

	.office-hours {
		font-size: 16px;
		margin-top: 5px;
		font-weight: 900;
	}
</style>
