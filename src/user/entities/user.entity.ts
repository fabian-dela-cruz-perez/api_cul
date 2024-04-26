import { Column, Entity, IsNull, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firs_tName: string;
    @Column()
    last_Name: string;
    @Column()
    identification_car: Number;
    @Column()
    phone_number: number;
    @Column()
    address: string;
    @Column()
    e_mail: string;
    @Column({ default: true })
    isActive: boolean;
}