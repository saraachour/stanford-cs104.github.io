<section class="unit">
	<div class="title-line">
		<h3><slot name="title" /></h3>
		<p class="date"><slot name="date" /></p>
	</div>

	<ul class="extra-links">
		<slot name="links" />
	</ul>

	<div class="indented">
		<slot name="details" />
	</div>
</section>

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

	.extra-links :global(li) {
		display: inline;
		margin: 0 0.12rem;
	}

	.unit .title-line::after {
		content: '';
		display: table;
		clear: both;
	}
	.unit h3 {
		margin: 0;
		float: left;
		max-width: calc(100% - 100px);
	}
	.unit .date {
		margin: 0;
		color: #555;
		font-size: 0.8em;
		float: right;
	}

	.unit .title-line {
		line-height: 1.4em;
		margin-top: 18px;
	}

	.unit {
		margin-bottom: 18px;
	}

	.unit .title-line:first-of-type {
		margin-top: 0;
	}

	.unit p:not(.date),
	.unit .indented,
	.unit .extra-links {
		margin: 0;
		padding-left: 45px;
		padding-top: 3px;
	}
</style>
