import { Column, Entity, IsNull, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    first_name: string;
    @Column() //task por inicar, iniciada, terminada
    last_name: string;
    @Column()
    identification_card: Number;
    @Column()
    phone_number: number;
    @Column()
    address: string;
    @Column({
        unique:true 
    })
    e_mail: string;
    @Column({ default: true })
    isActive: boolean;
}