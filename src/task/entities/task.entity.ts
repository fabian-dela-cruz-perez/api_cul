import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { TaskCategory } from "src/task_categories/entities/task_category.entity";
import { TaskStatus } from "src/task_status/entities/task_status.entity";
import { User } from "src/user/entities/user.entity";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    description: string;
    @Column()
    color: string;
    TaskCategoty: any;
    TaskStatus: any;
    User: any;


    @ManyToOne(() => TaskCategory, (taskC) => taskC.tasks)
    taskC: TaskCategory

    @ManyToOne(() => TaskCategory, (taskS) => taskS.tasks)
    taskS: TaskStatus
    
    @ManyToOne(() =>User, (users)=>users.tasks)
    users:User[]

 

}
