import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type TodoFilter = 'all' | 'active' | 'done';

interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

interface TodoState {
    items: Todo[];
    filter: TodoFilter
}

const loadTodosFromStorage = (): Todo[] => {
    try {
        const savedTodos = localStorage.getItem('my-todo-items');
        if (savedTodos === null) return [];
        return JSON.parse(savedTodos);
    } catch (e) {
        console.error("Не ўдалося загрузіць задачы:", e);
        return [];
    }
};

const initialState: TodoState = {
    items: loadTodosFromStorage(),
    filter: "all"
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            state.items.push({
                id: Date.now().toString(),
                text: action.payload,
                completed: false,
            });
        },
        toggleTodo: (state, action: PayloadAction<string>) => {
            const todo = state.items.find(item => item.id === action.payload);
            if (todo) todo.completed = !todo.completed;
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        setFilter: (state, action: PayloadAction<TodoFilter>) => {
            state.filter = action.payload;
        },
    },
});
export const { addTodo, toggleTodo, deleteTodo, setFilter } = todoSlice.actions;
export default todoSlice.reducer;