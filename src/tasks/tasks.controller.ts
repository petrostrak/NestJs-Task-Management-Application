import { Task } from './task.model';
import { TasksService } from './tasks.service';
import { Controller, Get, Post, Body } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks()
    }


    // @Post()
    // createTask(@Body() body) {
    //     console.log('body', body);

    // }

    @Post()
    createTask(
        @Body('title') title: string,
        @Body('description') description: string
    ): Task {
        return this.tasksService.createTask(title, description)
    }
}
