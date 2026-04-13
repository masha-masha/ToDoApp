import { Paper, Group, Checkbox, Text, ActionIcon } from "@mantine/core";
import { TrashIcon } from "@heroicons/react/24/outline";
import { useAppDispatch } from "../store/hooks";
import { toggleTodo, deleteTodo } from "../store/todoSlice";

interface TodoItemProps {
 id: string;
 text: string;
 completed: boolean;
}

export const TodoItem = ({ id, text, completed }: TodoItemProps) => {
 const dispatch = useAppDispatch();

 return (
  <Paper withBorder p="sm" radius="sm" bg={completed ? "gray.0" : "white"}>
   <Group justify="space-between">
    <Checkbox
     checked={completed}
     onChange={() => dispatch(toggleTodo(id))}
     styles={{
      body: { alignItems: "center" },
     }}
     label={
      <Text
       style={{
        textDecoration: completed ? "line-through" : "none",
        color: completed ? "gray.5" : "inherit",
       }}
      >
       {text}
      </Text>
     }
    />
    <ActionIcon
     variant="subtle"
     color="red"
     onClick={() => dispatch(deleteTodo(id))}
    >
     <TrashIcon width={18} />
    </ActionIcon>
   </Group>
  </Paper>
 );
};