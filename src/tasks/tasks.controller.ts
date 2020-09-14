import { CreateTaskDto } from './dto/create-task.dto';
import { TasksService } from './tasks.service';
import { Controller, Get, Post, Body, Param, Delete, Patch, Query, UsePipes, ValidationPipe, ParseIntPipe, UseGuards } from '@nestjs/common';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { TaskStatusValidationPipe } from './pipes/task-status-validation';
import { Task } from './task.entity';
import { TaskStatus } from './task-status.enums';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/auth/user.entity';
import { GetUser } from 'src/auth/get-user.decorator';

@Controller('tasks')
@UseGuards(AuthGuard())
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Get()
    getTasks(
        @Query(ValidationPipe) filterDto: GetTasksFilterDto, 
        @GetUser() user: User
    ): Promise<Task[]> {
        return this.tasksService.getTasks(filterDto, user)
    }

    @Get('/:id')
    getTaskById(
        @Param('id', ParseIntPipe) id: number,
        @GetUser() user: User
    ): Promise<Task> {
        return this.tasksService.getTaskById(id, user)
    }

    @Post()
    @UsePipes(ValidationPipe)
    createTask(
        @Body() createTaskDto: CreateTaskDto,
        @GetUser() user: User
    ): Promise<Task> {
        return this.tasksService.createTask(createTaskDto, user)
    }

    @Delete('/:id')
    deleteTask(@Param('id', ParseIntPipe) id: number, @GetUser() user: User): Promise<void> {
       return this.tasksService.deleteTask(id, user)
    }

    @Patch('/:id/status')
    updateTaskStatus(
        @Param('id', ParseIntPipe) id: number, 
        @Body('status', TaskStatusValidationPipe) status: TaskStatus,
        @GetUser() user: User    
    ): Promise <Task> {
        return this.tasksService.updateTaskStatus(id, status, user)
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

}
