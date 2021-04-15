import { Todo } from '~src/core/models/Todo';
import { TodoResponse } from '../responses/TodoResponse';

export function transformTodo(data: TodoResponse): Todo {
  return {
    id: data.ID,
    text: data.Text,
    done: data.Completed === true,
    date: new Date(data.TimeStamp * 1000),
  };
}
