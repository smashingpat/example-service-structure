// Not our Todo, their Todo.
export interface TodoResponse {
  ID: string;
  Text: string;
  Completed?: boolean;
  /** unix timecode */
  TimeStamp: number;
}
