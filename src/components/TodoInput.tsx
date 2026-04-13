import { Group, TextInput, Button } from "@mantine/core";
import { PlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { addTodo } from "../store/todoSlice";

export const TodoInput = () => {
 const [value, setValue] = useState("");
 const dispatch = useAppDispatch();

 const handleAdd = () => {
  if (value.trim()) {
   dispatch(addTodo(value));
   setValue("");
  }
 };

 return (
  <Group gap="xs">
   <TextInput
    placeholder="Введите задачу"
    flex={1}
    value={value}
    onChange={(e) => setValue(e.currentTarget.value)}
    onKeyDown={(e) => e.key === "Enter" && handleAdd()}
   />
   <Button onClick={handleAdd} variant="light">
    <PlusIcon width={20} />
   </Button>
  </Group>
 );
};
