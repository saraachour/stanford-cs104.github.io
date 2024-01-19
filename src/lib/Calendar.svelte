<!-- Generates a calendar from the lecture data in the yaml -->

<script lang="ts">
	import moment from 'moment';
	import BoxLink from './BoxLink.svelte';
	import Day from './Calendar/Day.svelte';
	import Assignments from './Calendar/Day/Assignments.svelte';
	import DueAssignments from './Calendar/Day/DueAssignments.svelte';
	import Materials from './Calendar/Day/Materials.svelte';
	import Topic from './Calendar/Day/Topic.svelte';
	import Week from './Calendar/Week.svelte';

	import {
		class_data,
		fixupLink,
		getBoxColor,
		isLive,
		getLectureMoment,
		lectures_by_week
	} from './classData';

	const weekdays = class_data.class_days.length;
</script>

<div class="calendar">
	{#each lectures_by_week as lectures, i}
		<Week number={i + 1} future={getLectureMoment(i * weekdays).isAfter(moment())}>
			{#each lectures as lecture, j}
				<Day
					date={getLectureMoment(i * weekdays + j).format('ddd, MMM D')}
					holiday={!!lecture.holiday}
					even={j % 2 == 0}
					future={getLectureMoment(i * weekdays + j).isAfter(moment())}
				>
					<Topic>{lecture.topic}</Topic>
					{#if lecture.materials}
						<Materials>
							{#each Object.keys(lecture.materials) as name}
								<BoxLink color={getBoxColor(name)} live={isLive(lecture.materials[name])}
                         href={fixupLink(lecture.materials[name])}
									>{name}</BoxLink
								>
							{/each}
						</Materials>
          {:else}
          <Materials/>
					{/if}
					{#if lecture.assignments}
						<Assignments>
              {#each Object.keys(lecture.assignments) as name}
								<BoxLink color={getBoxColor(name)} live={isLive(lecture.assignments[name])}
                         href={fixupLink(lecture.assignments[name])}
									>{name}</BoxLink>
							{/each}
            </Assignments>
          {:else}
            <Assignments/>
					{/if}
          {#if lecture.due}
            <DueAssignments>
              {#each Object.keys(lecture.due) as name}
								<BoxLink color={getBoxColor(name,true)} live={isLive(lecture.due[name])}
                         href={fixupLink(lecture.due[name])}
									>{name}</BoxLink>
							{/each}
            </DueAssignments>
          {:else}
          <DueAssignments/>
          {/if}
				</Day>
			{/each}
		</Week>
	{/each}
</div>

<style>
	.calendar {
		font-size: 0.9em;
		margin-bottom: 3em;
	}
</style>
