/**
 * Exports typed class data and utilities to help use it when
 * rendering other pages
 */
import { base } from '$app/paths';
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
export function getBoxColor(type: string, due: bool = false) {
    if(due == true){
        return "red";
    }
    if(type == "notes") {
        return 'darkblue';

    }
    else if(type == "slides") {
        return "blue";
    }
    else if(type.includes("assign")) {
        return 'green';
    }
    else if(type.includes("survey")) {
        return 'purple';
    }
    else {
        return "black";
    }
}

export function isLive(link: string){
  if(link == ""){
    return false;
  }
  else {
    return true;
  }
}

// Fixes up absolute links with the base if necessary.
export function fixupLink(baseLink: string) {
  if (baseLink.startsWith('/') && !baseLink.startsWith('//')) {
    return `${base}${baseLink}`;
  }
  else if(baseLink == ""){
    return "javascript:void(0);"
  }
  return baseLink;
}

/** Determines if the url is absolute and returns whether or not to open in a new window (yes for external) */
export function getTarget(url: string) {
  return url.startsWith('http') || url.startsWith('//') ? '_blank' : '_self';
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
  assignment_due_time: string;
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
  assignments?: Record<string,string>;
  due?: Record<string,string>;
  holiday?: boolean;
}
