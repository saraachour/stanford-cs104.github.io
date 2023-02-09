<script lang="ts">
	import class_data from '$data';
	import { fixupLink, getLectureMoment, markdown, titleCase } from '$lib/lecture_util';
	import { marked } from 'marked';
	import moment from 'moment';
</script>

<h2>Assignments</h2>

{#each class_data.assignments as assignment}
	<section class="lecture">
		<div class="title-line">
			<h3>{@html marked.parseInline(assignment.name)}</h3>
			<p class="date">
				Due {moment(assignment.due, 'YYYY/MM/DD').format('dddd, MMMM D')}. Worth {assignment.points}
				point{assignment.points !== 1 ? 's' : ''}.
			</p>
		</div>

		{#if assignment.materials}
			<ul class="extra-links">
				{#each Object.keys(assignment.materials) as name}
					<li>
						[<a
							target="_blank"
							rel="noreferrer noopener"
							href={fixupLink(assignment.materials[name])}>{titleCase(name)}</a
						>]
					</li>
				{/each}
			</ul>
		{/if}

		{#if assignment.details}
			<div class="indented">
				{@html markdown(assignment.details)}
			</div>
		{/if}
	</section>
{/each}

<style>
	ul.extra-links {
		padding-top: 10px;
		clear: both;
		font-size: 0.95em;
	}
	.extra-links {
		margin: 0;
		padding-left: 45px;
		padding-top: 3px;
	}
	ul.extra-links {
		margin: 0;
		padding-left: 0px;
		padding-top: 0px;
	}

	ul.extra-links {
		list-style-type: none;
	}

	.extra-links li {
		display: inline;
		margin: 0 0.12rem;
	}

	.lecture .title-line::after {
		content: '';
		display: table;
		clear: both;
	}
	.lecture h3 {
		margin: 0;
		float: left;
		max-width: calc(100% - 100px);
	}
	.lecture .date {
		margin: 0;
		color: #555;
		font-size: 0.8em;
		float: right;
	}

	.lecture .title-line {
		line-height: 1.4em;
		margin-top: 18px;
	}

	.lecture {
		margin-bottom: 18px;
	}

	.lecture .title-line:first-of-type {
		margin-top: 0;
	}

	.lecture p:not(.date),
	.lecture .indented,
	.lecture .extra-links {
		margin: 0;
		padding-left: 45px;
		padding-top: 3px;
	}
</style>
