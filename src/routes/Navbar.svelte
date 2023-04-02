<!-- NavBar shown at the top of all pages -->
<script>
	import { base, edstem, gradescope, canvas } from '../constants';
	import NavbarBase from '../lib/Navbar/NavbarBase.svelte';
	import NavList from '../lib/Navbar/NavList.svelte';
	import NavListItem from '../lib/Navbar/NavListItem.svelte';
</script>

<NavbarBase>
	<NavList>
		<NavListItem href={base} big>CS45</NavListItem>
	</NavList>
	<NavList>
		<NavListItem href="{base}/lectures">Lectures</NavListItem>
		<NavListItem href="{base}/assignments">Assignments</NavListItem>
		<NavListItem href="{base}/course_info">Course Info</NavListItem>
		<NavListItem href="{base}/software">Software Installation</NavListItem>
		<NavListItem href="{edstem}" external>Ed Discussion</NavListItem>
		<NavListItem href="{gradescope}" external>Gradescope</NavListItem>
		<NavListItem href="{canvas}" external>Canvas</NavListItem>
	</NavList>
</NavbarBase>
