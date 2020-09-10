import { TaskStatus } from './../task.model';
import { IsOptional, IsIn, IsNotEmpty } from 'class-validator';

export class GetTasksFilterDto {
    @IsOptional()
    @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.OPEN]) // checks if value is in an array of allowed values
    status: TaskStatus;

    @IsOptional()
    @IsNotEmpty()
    search: string;
}

