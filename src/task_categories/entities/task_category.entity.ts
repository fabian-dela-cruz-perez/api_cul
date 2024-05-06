import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class TaskCategory {
    @PrimaryColumn()
    id_taks_category:number;
    @Column()
    description:string;
    @Column()
    color:string;

}
