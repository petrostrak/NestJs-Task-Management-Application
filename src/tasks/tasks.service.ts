import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TasksStatus } from './task.model';
import { Injectable } from '@nestjs/common';
import { v1 as uuidv1 } from 'uuid'

@Injectable()
export class TasksService {
    private tasks: Task[] = []

    getAllTasks(): Task[] {
        return this.tasks
    }

    getTaskById(id: string): Task {
        return this.tasks.find(task => task.id === id)
    }

    deleteTask(id: string): void {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

    createTask(createTaskDto: CreateTaskDto): Task {
        const {title, description} = createTaskDto

        const task: Task = {
            id: uuidv1(),
            title,
            description,
            status: TasksStatus.OPEN
        }

        this.tasks.push(task)
        return task
    }
}
