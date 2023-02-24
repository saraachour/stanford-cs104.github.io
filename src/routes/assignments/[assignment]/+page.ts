import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	try {
		const assignmentNumber = parseInt(/[0-9]+/g.exec(params.assignment)?.[0] ?? '');
	
		return { assignment: await import(`../../../class/assignments/assign${assignmentNumber}.svelte.md`), assignmentNumber };
	} catch (e) {
		console.warn(e);
		throw error(404, "That assignment wasn't found");
	}
}) satisfies PageLoad;
