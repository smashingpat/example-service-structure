import { Todo } from '~src/core/models/Todo';
import { transformTodo } from '~src/core/services/todos/transforms/transformTodo';
import { TodoResponse } from './responses/TodoResponse';

export async function getTodo(id: string): Promise<Todo> {
  const response = await fetch(`/api/todos/${id}`);
  const data = (await response.json()) as TodoResponse;

  return transformTodo(data);
}
