/**
 * Exports typed class data and utilities to help use it when
 * rendering other pages
 */
import { base } from '$app/paths';
import { marked } from 'marked';
import class_data_raw from '../class/class_data.yaml';
import moment from 'moment';

// === Data ===
export const class_data = class_data_raw as ClassData;
export const lectures_by_week = getLectureDataByWeek();

/** Sorts lecture data into a list-of-lists, sorting lectures into weeks. */
function getLectureDataByWeek() {
  const weekdays = class_data.class_days.length;
  const arr = [];
  const weeks = Math.floor(class_data.lectures.length / weekdays);
  for (let i = 0; i < weeks; i++) {
    arr.push(class_data.lectures.slice(i * weekdays, (i + 1) * weekdays));
  }
  return arr;
}

// === Helper Functions ===

/** Title cases a given string */
export function titleCase(s: string): string {
  return s.replace(/(?:^| )\w/g, (substring) => substring.toUpperCase());
}

/**
 * Renders Markdown, fixing links to be relative to
 * the site base and making external links open in a new tab
 */
export function markdown(data: string, inline = false): string {
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
  return marked[inline ? 'parseInline' : 'parse'](data, { renderer });
}

// Gets the week of a given lexture number.
export function getWeek(lectureNumber: number) {
  return Math.floor(lectureNumber / class_data.class_days.length);
}

// Gets a Moment object for the given lecture number.
export function getLectureMoment(lectureNumber: number) {
  const startDate = moment(class_data.start_date, 'YYYY/MM/DD', true)
    .isoWeekday(class_data.class_days[0])
    .hour(0)
    .minute(0)
    .second(0);
  const weekIdx = getWeek(lectureNumber);
  const weekday = class_data.class_days[lectureNumber % class_data.class_days.length];

  return startDate.add(weekIdx, 'weeks').isoWeekday(weekday);
}

// Gets the box color for a particular material
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

// Fixes up absolute links with the base if necessary.
export function fixupLink(baseLink: string) {
  if (baseLink.startsWith('/') && !baseLink.startsWith('//')) {
    return `${base}${baseLink}`;
  }
  return baseLink;
}

// === Types ===
export type Weekday =
  | 'Sunday'
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday';
export interface ClassData {
  start_date: string;
  class_days: Weekday[];
  instructors: Instructor[];
  assignments: Assignment[];
  lectures: Lecture[];
}

export interface Instructor {
  name: string;
  image: string;
  role?: string;
  email?: string;
  officeHours: OfficeHour[];
}

export interface OfficeHour {
  when: string;
  where: string;
  url?: string;
}

export interface Assignment {
  name: string;
  points: number;
  due: string;
  materials?: Record<string, string>;
  details?: string;
}

export interface Lecture {
  topic: string;
  materials?: Record<string, string>;
  details?: string;
  assignments?: string;
  holiday?: boolean;
}
