interface Task {
    id: number;
    name: string;
    todo: number;
    created_at: string;
    updated_at: string;
    completed: boolean;
    deadline: string;
}

export type { Task }