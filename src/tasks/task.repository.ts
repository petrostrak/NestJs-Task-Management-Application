import { Repository, EntityRepository } from "typeorm";
import { Task } from "./task.entity";
import { CreateTaskDto } from "./dto/create-task.dto";
import { TaskStatus } from "./task-status.enums";

@EntityRepository(Task)
export class TaskRepository extends Repository<Task> {
    async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
        // Create task via Entity
        const { title, description } = createTaskDto
        const task = new Task()
        
        task.title = title
        task.description = description
        task.status = TaskStatus.OPEN
                
        await task.save()
        
        return task
    }
}