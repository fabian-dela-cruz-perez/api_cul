import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Task } from "src/task/entities/task.entity";

@Entity()
export class TaskStatus {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    description: string;
    
    @OneToMany(() => Task, (tasks) => tasks.TaskStatus)
    tasks: Task[]
}
