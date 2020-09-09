import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TasksStatus } from './task.model';
import { TasksService } from './tasks.service';
import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getAllTasks(): Task[] {
        return this.tasksService.getAllTasks()
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string): Task {
        return this.tasksService.getTaskById(id)
    }

    @Delete('/:id')
    deleteTask(@Param('id') id: string): void {
        this.tasksService.deleteTask(id)
    }

    @Patch('/:id/status')
    updateTaskStatus(@Param('id') id: string, @Body('status') status: TasksStatus): Task {
        return this.tasksService.updateTaskStatus(id, status)
    }

    // @Post()
    // createTask(@Body() body) {
    //     console.log('body', body);

    // }

    // @Post()
    // createTask(
    //     @Body('title') title: string,
    //     @Body('description') description: string
    // ): Task {
    //     return this.tasksService.createTask(title, description)
    // }

    @Post()
    createTask(@Body() createTaskDto: CreateTaskDto): Task {
        return this.tasksService.createTask(createTaskDto)
    }
}
