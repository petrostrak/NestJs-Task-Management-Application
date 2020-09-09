import { Task, TasksStatus } from './task.model';
import { Injectable } from '@nestjs/common';
import { v1 as uuidv1 } from 'uuid'

@Injectable()
export class TasksService {
    private tasks: Task[] = []

    getAllTasks(): Task[] {
        return this.tasks
    }

    createTask(title: string, description: string): Task {
        const task: Task = {
            id: uuidv1,
            title,
            description,
            status: TasksStatus.OPEN
        }

        this.tasks.push(task)
        return task
    }
}
