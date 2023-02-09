<script>
	import { base } from '$app/paths';
	import HomeLink from './Navbar/HomeLink.svelte';
	import NavbarBase from './Navbar/NavbarBase.svelte';
	import NavList from './Navbar/NavList.svelte';
	import NavListItem from './Navbar/NavListItem.svelte';
</script>

<NavbarBase>
	<HomeLink>CS45</HomeLink>
	<NavList>
    <NavListItem href="{base}/lectures">Lectures</NavListItem>
    <NavListItem href="{base}/assignments">Assignments</NavListItem>
    <NavListItem href="{base}/course_info">Course Info</NavListItem>
    <NavListItem href="{base}/software">Software Installation</NavListItem>
    <NavListItem href="https://edstem.org/us/courses/33103" external>Ed Discussion</NavListItem>
    <NavListItem href="https://www.gradescope.com/courses/468962" external>Gradescope</NavListItem>
    <NavListItem href="https://canvas.stanford.edu/courses/169302" external>Canvas</NavListItem>
	</NavList>
</NavbarBase>
