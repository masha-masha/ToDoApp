import {
 Container,
 Paper,
 Stack,
 Divider,
 SegmentedControl,
 Text,
} from "@mantine/core";

import { TodoHeader } from "./components/TodoHeader";
import { TodoInput } from "./components/TodoInput";
import { TodoItem } from "./components/TodoItem";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { setFilter, type TodoFilter } from "./store/todoSlice";

function App() {
 const todos = useAppSelector((state) => state.todos.items);
 const currentFilter = useAppSelector((state) => state.todos.filter);
 const dispatch = useAppDispatch();

 const completedCount = todos.filter((t) => t.completed).length;

 const filteredTodos = todos.filter((todo) => {
  if (currentFilter === "active") return !todo.completed;
  if (currentFilter === "done") return todo.completed;
  return true;
 });

 return (
  <Container size="xs" py={40}>
   <Paper withBorder shadow="md" p="xl" radius="md">
    <Stack gap="lg">
     <TodoHeader total={todos.length} completed={completedCount} />
     <TodoInput />
     <Divider label="Задачи" labelPosition="center" />

     <SegmentedControl
      fullWidth
      value={currentFilter}
      onChange={(val) => dispatch(setFilter(val as TodoFilter))}
        styles={{
        label: {
            color:"#173463"
        }
      }}
      data={[
       { label: "Все", value: "all"},
       { label: "Активные", value: "active" },
       { label: "Выполненные", value: "done" },
      ]}
     />
     <Stack gap="sm">
      {filteredTodos.length > 0 ? (
       filteredTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)
      ) : (
       <Text c="dimmed" ta="center" py="xl">
        Пока нет ни одной задачи
       </Text>
      )}
     </Stack>
    </Stack>
   </Paper>
  </Container>
 );
}

export default App;
