import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'
import { Role } from '../role.enum';


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string

    @Column()
    password: string;

    @Column()
    role: Role
}