
export interface INotes {
  id: string;
  content: string;
  date: Date;
  body: string;
  title: string;
  mood: Mood;
}

export enum Mood {
  SAD,
  NEUTRAL,
  HAPPY,
  ANGRY
}