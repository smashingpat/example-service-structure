import { Todo } from '~src/core/models/Todo';
import { TodoResponse } from './responses/TodoResponse';
import { transformTodo } from './transforms/transformTodo';

export async function getTodos(): Promise<Todo[]> {
  const response = await fetch(`/api/todos`);
  const data = (await response.json()) as TodoResponse[];

  return data.map(transformTodo);
}
