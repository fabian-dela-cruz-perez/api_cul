import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TaskStatus {
    @PrimaryColumn()
    id_taks_status: number;
    @Column()
    description: string;
}
