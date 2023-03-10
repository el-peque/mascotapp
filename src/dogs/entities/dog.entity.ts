import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinTable, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Dog {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column('text')
    name: string;

    @Column('numeric')
    age: number;

    @ManyToOne(()=> User, (user) => user.id)
    @Column()
    owner: string;

    @Column('text')
    color?: string;
}