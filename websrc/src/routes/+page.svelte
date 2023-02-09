<script lang="ts">
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
<div>
	<Instructor
		src="{base}/img/akshay.jpg"
		name="Akshay Srivatsan"
		role="Instructor"
		email="akshay01@stanford.edu"
    officeHours={[{
      when: "Wednesdays 6:30–7:30",
      where: "on Zoom",
      url: "https://stanford.zoom.us/j/99233539818?pwd=ZzloNFdSR01lRkRiVGsrV244aVVmQT09"
    }, {
      when: "Thursdays 2–3 PM",
      where: "at Gates 4A Lounge"
    }]}
	/>

	<Instructor
		src="{base}/img/ayelet.jpg"
		name="Ayelet Drazen"
		role="Instructor"
		email="adrazen@stanford.edu"
    officeHours={[{
      when: "Mondays 3:15–4:15 PM",
      where: "in Huang Basement",
    }, {
      when: "Sundays 8–9 PM",
      where: "on Zoom",
      url: "https://stanford.zoom.us/j/2035566567?pwd=VXpjbENSY296Z1c0RDlmbytSSHMvZz09"
    }]}
	/>

	<Instructor
		src="{base}/img/jonathan.jpg"
		name="Jonathan Kula"
		role="Instructor"
		email="jdkula@stanford.edu"
    officeHours={[{
      when: "Mondays 6–7 PM",
      where: "on Zoom",
      url: "https://stanford.zoom.us/j/99170211188?pwd=RytTUlNVVGZhMVJVMGFMY093ek9pQT09"
    }, {
      when: "Wednesdays 11:30am–12:30pm",
      where: "in Huang Basement"
    }]}
	/>
</div>

<h2>Calendar</h2>

<Calendar />
