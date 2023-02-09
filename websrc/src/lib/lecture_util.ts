import { base } from '$app/paths';
import { marked } from 'marked';
import class_data from '$/class_data.yaml';
import moment from 'moment';

export function titleCase(s: string): string {
	return s.replace(/(?:^| )\w/g, (substring) => substring.toUpperCase());
}

export function markdown(data: string): string {
	const renderer = new marked.Renderer();
	const linkRenderer = renderer.link;
	renderer.link = (href: string, title: string, text: string) => {
		if (href.startsWith('/') && !href.startsWith('//')) {
			href = `${base}${href}`;
		}
		const localLink = !/^https?:\/\//g.exec(href);
		const html = linkRenderer.call(renderer, href, title, text);

		return localLink
			? html
			: html.replace(/^<a /, `<a target="_blank" rel="noreferrer noopener nofollow" `);
	};
	return marked.parse(data, { renderer });
}

export function getClassDataByWeek() {
	const weekdays = class_data.class_days.length;
	const arr = [];
	const weeks = Math.floor(class_data.lectures.length / weekdays);
	for (let i = 0; i < weeks; i++) {
		arr.push(class_data.lectures.slice(i * weekdays, (i + 1) * weekdays));
	}
	return arr;
}

export function getWeek(lectureNumber: number) {
	return Math.floor(lectureNumber / class_data.class_days.length);
}

export function getLectureMoment(lectureNumber: number) {
	const startDate = moment(class_data.start_date, 'YYYY/MM/DD', true).isoWeekday(
		class_data.class_days[0]
	).hour(0).minute(0).second(0);
	const weekIdx = getWeek(lectureNumber);
	const weekday = class_data.class_days[lectureNumber % class_data.class_days.length];

	return startDate.add(weekIdx, 'weeks').isoWeekday(weekday);
}

export function getBoxColor(type: string) {
	switch (type) {
		case 'slides':
			return 'blue';
		case 'notes':
			return 'black';
		case 'lecture video':
			return 'purple';
		default:
			return 'red';
	}
}

export function fixupLink(baseLink: string) {
	if (baseLink.startsWith('/')) {
		return `${base}${baseLink}`;
	}
	return baseLink;
}
