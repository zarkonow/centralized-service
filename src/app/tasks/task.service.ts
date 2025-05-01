import { Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";

// @Injectable({
//     providedIn: 'root'
// })

export class TasksService {
    tasks = signal<Task[]>([])

    addTask(taskData: { title: string; description: string }) {
        const newTask: Task = {
            ...taskData,
            id: Math.random().toString(),
            status: 'OPEN'
        }
        this.tasks.update((oldTasks) => [...oldTasks, newTask])
    }

    updateTasksStatus(taskId: string, newStatus: TaskStatus) {
        this.tasks.update((oldTasks) =>
            oldTasks.map((task) =>
                task.id === taskId ? { ...task, status: newStatus } : task))

    }
}