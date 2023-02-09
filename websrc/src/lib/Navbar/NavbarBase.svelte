<nav>
	<table width="100%" border={0} cellspacing={0}>
		<tbody>
			<tr>
				<slot />
			</tr>
		</tbody>
	</table>
</nav>

<style>
	nav {
		padding: 0.3rem;
		background-color: #2689ff;
		padding-left: 15px;
		padding-right: 15px;
	}

	tr {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	nav :global(a) {
		color: #fff;
		text-decoration: none;
	}

	nav :global(a:visited),
	nav :global(a:link) {
		color: #fff;
	}

	nav :global(a:hover) {
		color: #fff;
		text-decoration: underline;
	}
</style>
