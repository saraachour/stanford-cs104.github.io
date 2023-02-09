<script lang="ts">
	import moment from 'moment';
	import { base } from '$app/paths';
	import BoxLink from './BoxLink.svelte';
	import CalendarBase from './Calendar/CalendarBase.svelte';
	import Day from './Calendar/Day.svelte';
	import Assignments from './Calendar/Day/Assignments.svelte';
	import Materials from './Calendar/Day/Materials.svelte';
	import Topic from './Calendar/Day/Topic.svelte';
	import Week from './Calendar/Week.svelte';

	import class_data from '$/class_data.yaml';
	import { fixupLink, getBoxColor, getClassDataByWeek, getLectureMoment } from './lecture_util';

	const weekdays = class_data.class_days.length;
</script>

<CalendarBase>
	{#each getClassDataByWeek() as lectures, i}
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
								<BoxLink color={getBoxColor(name)} href={fixupLink(lecture.materials[name])}
									>{name}</BoxLink
								>
							{/each}
						</Materials>
					{/if}
					{#if lecture.assignments}
						<Assignments>{lecture.assignments}</Assignments>
					{/if}
				</Day>
			{/each}
		</Week>
	{/each}
</CalendarBase>
