import { TodoEntity } from '~src/core/models/TodoEntity';
import { Todo } from '~src/core/models/Todo';
import { transformTodo } from '~src/core/transforms/transformTodo';

export async function getTodo(id: string): Promise<Todo> {
  const response = await fetch(`/api/todos/${id}`);
  const data = (await response.json()) as TodoEntity;

  return transformTodo(data);
}
