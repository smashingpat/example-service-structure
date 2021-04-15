// Not our Todo, their Todo.
export interface TodoEntity {
  ID: string;
  Text: string;
  Completed?: boolean;
  /** unix timecode */
  TimeStamp: number;
}
