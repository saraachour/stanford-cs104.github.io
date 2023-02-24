---
title: 'CS 45'
---

<script lang="ts">
  import { base } from '$app/paths';
  import Calendar from '$lib/Calendar.svelte';
  import { class_data, fixupLink } from '$lib/classData';

  import Instructor from '$lib/Instructor.svelte';
</script>

# CS 45: Software Tools Every Programmer Should Know

## Course Description

Classes teach you all about advanced topics within CS, from operating systems to machine learning,
but there’s one critical subject that’s rarely covered, and is instead left to students to figure
out on their own: proficiency with their tools. This course will teach you how to master the key
tools necessary for being a successful computer scientist, such as the command line, version control
systems, debuggers and linters, and many more. In addition, we will cover other key topics that are
left out of standard CS classes, but that are essential to being a proficient computer scientist,
including: security and cryptography, containers and virtual machines, and cloud computing.

## General Information

This course meets in-person twice a week, Mondays and Wednesdays from 4:30 to 5:50 at 300-300. The
course is offered for 2 units on a S/NC basis. For more information about the course structure,
visit the [Course Info]({base}/course_info) page.

## Computer Setup & Software Installation

This course will have about a 50/50 mix of conceptual background and hands-on practice with the
tools we'll teach– this means you’ll need to be able to download and install software onto your
computer (either your personal computer, or a computer you have access to).
[Click here]({base}/software) for more information about setting up your computer and the kinds of
software we’ll be using. (Let us know if this will present a challenge, e.g. if you’re using a
chromebook or a very old computer, or don’t have access to a personal computer– we may be able to
help 😄)

## Course Staff

<div>
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

## Calendar

<Calendar />
