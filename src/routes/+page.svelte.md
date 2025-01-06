---
title: 'CS 104'
---

<script lang="ts">
  import { base } from '$app/paths';
  import Calendar from '$lib/Calendar.svelte';
  import { class_data, fixupLink } from '$lib/classData';

  import Instructor from '$lib/Instructor.svelte';
  import Callout from '$lib/Callout.svelte';
</script>

# CS 104: Introduction to Essential Software Systems and Tools

## Course Description

Classes teach you all about advanced topics within CS, from operating systems to machine learning,
but there’s one critical subject that’s rarely covered, and is instead left to students to figure
out on their own: proficiency with their tools. This course will teach you how to master the key
tools necessary for being a successful computer scientist, such as the command line, version control
systems, debuggers and linters, and many more. In addition, we will cover other key topics that are
left out of standard CS classes, but that are essential to being a proficient computer scientist,
including: security and cryptography, containers and virtual machines, and cloud computing.

## General Information

This course meets in-person three times a week, Monday / Wednesday / Friday from 3:00 to 4:20 at
200-034. The course is offered for 3 units on either a letter grade or a CR/NC basis. For more
information about the course structure, visit the [Course Info]({base}/course_info) page.

The Monday, Wednesday sessions will consist of guided lectures with in class exercises and live demos, and 
the Friday session will consist of a lab section with more open-ended exercises. Please bring your computers
to class if you are able so you can follow along.

## Computer Setup & Software Installation

This course will have about a 50/50 mix of conceptual background and hands-on practice with the
tools we'll teach– this means you’ll need to be able to download and install software onto your
computer (either your personal computer, or a computer you have access to).
[Click here]({base}/software) for more information about setting up your computer and the kinds of
software we’ll be using. (Let us know if this will present a challenge, e.g. if you’re using a
chromebook or a very old computer, or don’t have access to a personal computer– we may be able to
help 😄)

## Course Staff

<!-- **Staff Mailing List:** -->
<!-- [cs45-spr2223-staff@lists.stanford.edu](mailto:cs45-spr2223-staff@lists.stanford.edu) -->

<div style="display: flex; flex-wrap: wrap;">
	{#each class_data.instructors as instructor}
		<Instructor
			src={fixupLink(instructor.image)}
			name={instructor.name}
			role={instructor.role}
			email={instructor.email}
			officeHours={instructor.officeHours}
		/>
	{/each}
</div>

Unless you're contacting us about OH or something else instructor-specific, please
 make a post on Ed.

## Calendar

<Calendar />

## Attributions

This class is an expanded offering of CS45, a fantastic Stanford course that was originally developed by Akshay Srivatsan, Ayalet Drazen, and Jonathan Kula. Big thanks to the MIT CSAIL's
[The Missing Semester of Your CS Education](https://missing.csail.mit.edu/) taught by
[Anish Athalye](https://www.anishathalye.com/), [Jon Gjengset](https://thesquareplanet.com/), and
[Jose Javier Gonzalez Ortiz](https://josejg.com/)– The Missing Semester was the original inspiration
for CS 45.

Additionally, this website is based on versions of CS110 and CS111's website created by
[John Ousterhout](https://web.stanford.edu/~ouster/cgi-bin/home.php) and
[Jerry Cain](https://profiles.stanford.edu/gerald-cain?tab=teaching)– thank you!
