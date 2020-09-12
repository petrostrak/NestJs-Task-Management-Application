import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { CreateTaskDto } from './dto/create-task.dto';
import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskRepository } from './task.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enums';

@Injectable()
export class TasksService {

    constructor(
        @InjectRepository(TaskRepository)
        private taskRepository: TaskRepository
    ) {}

    // getAllTasks(): Task[] {
    //     return this.tasks
    // }

    // getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
    //     const { status, search } = filterDto

    //     let tasks = this.getAllTasks()

    //     if(status) {
    //         tasks = tasks.filter(task => task.status === status)
    //     }

    //     if(search) {
    //         tasks = tasks.filter(task =>
    //             task.title.includes(search) ||
    //             task.description.includes(search)
    //         )
    //     }

    //     return tasks
    // }

    async getTaskById(id: number): Promise<Task> {
        const found = await this.taskRepository.findOne(id)

        if(!found) {
            throw new NotFoundException(`Task with id ${id} not found`)
        }

        return found
    }

    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        return this.taskRepository.createTask(createTaskDto)
    }

    // deleteTask(id: string): void {
    //     // not so performant code cause there are 2 iterations (find and filter)
    //     const found = this.getTaskById(id)
    //     this.tasks = this.tasks.filter(task => task.id !== found.id)
    // }

    // updateTaskStatus(id: string, status: TaskStatus): Task {
    //     const task = this.getTaskById(id)
    //     task.status = status
    //     return task
    // }

    //     this.tasks.push(task)
    //     return task
    // }
}
