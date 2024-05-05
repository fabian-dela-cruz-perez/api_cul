import { Column, Entity, IsNull, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    first_name: string;
    @Column()
    last_name: string;
    @Column()
    identification_card: Number;
    @Column()
    phone_number: number;
    @Column()
    address: string;
    @Column()
    e_mail: string;
    @Column({ default: true })
    isActive: boolean;
}