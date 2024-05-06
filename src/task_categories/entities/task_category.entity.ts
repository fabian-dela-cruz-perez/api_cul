import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne } from "typeorm";
import { Task } from "src/task/entities/task.entity";

@Entity()
export class TaskCategory {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    description: string;
    @Column()
    color: string;    
    @OneToMany(() => Task, (tasks) => tasks.TaskCategoty)
    tasks: Task[]
}
