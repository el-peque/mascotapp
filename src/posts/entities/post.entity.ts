import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {
    @PrimaryGeneratedColumn('uuid')
    id: string;    

    @Column('text')
    title: string;

    @Column('text')
    body: string;

    @Column('text')
    category: string;

    @Column('text', {nullable:true})
    image?: string;
}