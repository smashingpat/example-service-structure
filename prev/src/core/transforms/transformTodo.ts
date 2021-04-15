import { TodoEntity } from '~src/core/models/TodoEntity';
import { Todo } from '~src/core/models/Todo';

export function transformTodo(data: TodoEntity): Todo {
  return {
    id: data.ID,
    text: data.Text,
    done: data.Completed === true,
    date: new Date(data.TimeStamp * 1000),
  };
}
