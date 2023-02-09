<script lang="ts">
	import class_data from '$/class_data.yaml';
	import { fixupLink } from '$/lib/lecture_util';
	import { base } from '$app/paths';
	import Calendar from '$lib/Calendar.svelte';

	import Instructor from '$lib/Instructor.svelte';
</script>

<svelte:head>
	<title>CS 45</title>
</svelte:head>

<h1>CS 45: Software Tools Every Programmer Should Know</h1>
<h2>Course Description</h2>
<div>
	Classes teach you all about advanced topics within CS, from operating systems to machine learning,
	but there’s one critical subject that’s rarely covered, and is instead left to students to figure
	out on their own: proficiency with their tools. This course will teach you how to master the key
	tools necessary for being a successful computer scientist, such as the command line, version
	control systems, debuggers and linters, and many more. In addition, we will cover other key topics
	that are left out of standard CS classes, but that are essential to being a proficient computer
	scientist, including: security and cryptography, containers and virtual machines, and cloud
	computing.
</div>

<h2>General Information</h2>
<p>
	This course meets in-person twice a week, Mondays and Wednesdays from 4:30 to 5:50 at 300-300. The
	course is offered for 2 units on a S/NC basis. For more information about the course structure,
	visit the
	<a href="{base}/course_info">Course Info</a> page.
</p>

<h2>Computer Setup &amp; Software Installation</h2>
<p>
	This course will have about a 50/50 mix of conceptual background and hands-on practice with the
	tools we'll teach– this means you’ll need to be able to download and install software onto your
	computer (either your personal computer, or a computer you have access to).
	<a href="{base}/software">Click here</a> for more information about setting up your computer and the
	kinds of software we’ll be using. (Let us know if this will present a challenge, e.g. if you’re using
	a chromebook or a very old computer, or don’t have access to a personal computer– we may be able to
	help 😄)
</p>

<h2>Course Staff</h2>
{#each class_data.instructors as instructor}
	<Instructor
		src={fixupLink(instructor.image)}
		name={instructor.name}
		role={instructor.role}
		email={instructor.email}
    officeHours={instructor.officeHours}
	/>
{/each}

<h2>Calendar</h2>

<Calendar />
