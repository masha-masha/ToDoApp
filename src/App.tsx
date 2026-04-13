import { useTranslation } from "react-i18next";
import {
 Container,
 Paper,
 Stack,
 Group,
 Divider,
 SegmentedControl,
 Text,
} from "@mantine/core";

import { TodoHeader } from "./components/TodoHeader";
import { TodoInput } from "./components/TodoInput";
import { TodoItem } from "./components/TodoItem";
import { ThemeToggle } from "./components/ThemeToggle";
import { LanguagePicker } from "./components/LanguagePicker";
import { Footer } from "./components/Footer";
import { useAppSelector, useAppDispatch } from "./store/hooks";
import { setFilter, type TodoFilter } from "./store/todoSlice";

function App() {
 const { t } = useTranslation();

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
   <Group justify="flex-end" mb="md">
    <LanguagePicker />
    <ThemeToggle />
   </Group>
   <Paper withBorder shadow="md" p="xl" radius="md">
    <Stack gap="lg">
     <TodoHeader total={todos.length} completed={completedCount} />
     <TodoInput />
     <Divider label={t("all")} labelPosition="center" />

     <SegmentedControl
      fullWidth
      value={currentFilter}
      onChange={(val) => dispatch(setFilter(val as TodoFilter))}
      data={[
       { label: t("all"), value: "all" },
       { label: t("active"), value: "active" },
       { label: t("done"), value: "done" },
      ]}
     />
     <Stack gap="sm">
      {filteredTodos.length > 0 ? (
       filteredTodos.map((todo) => <TodoItem key={todo.id} {...todo} />)
      ) : (
       <Text c="dimmed" ta="center" py="xl">
        {t("empty")}
       </Text>
      )}
     </Stack>
    </Stack>
   </Paper>
   <Footer/>
  </Container>
 );
}

export default App;
