export interface Section {
  photo: string;
  eyebrow: String;
  title: string;
  leadParagraph: string;
  beliefs?: string[];
  steps?: { heading: string, paragraph: string }[];
  cta?: { label: string, href: string };
}
export interface PageHero {
  eyebrow: string;
  h1: string;
  leadParagraph: string;
}
export interface Address {
  number: string;
  street: string;
  city: string;
  province: string
}
export interface MeetingTime {
  day: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Saturday" | "Sunday";
  time: string;
  meta?: any;
}
export interface Cta {
  label: string;
  href: string;
  fnName?: string;
  primary: boolean;
}