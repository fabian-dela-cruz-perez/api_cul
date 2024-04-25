import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class actividades {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    name_of_the_activity: string;
    @Column({ type: 'datetime' })
    start_date_of_time: Date;
    @Column({ type: 'datetime' })
    end_date_of_time: Date;
    @Column()
    name_manager: string;
    @Column({ default: true })
    isActive: boolean;
}

