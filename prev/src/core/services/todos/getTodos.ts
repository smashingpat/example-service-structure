import { TodoEntity } from '~src/core/models/TodoEntity';
import { Todo } from '~src/core/models/Todo';
import { transformTodo } from '~src/core/transforms/transformTodo';

export async function getTodos(): Promise<Todo[]> {
  const response = await fetch(`/api/todos`);
  const data = (await response.json()) as TodoEntity[];

  return data.map(transformTodo);
}
