import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;    
    
    @Column('text', {unique:true})
    username: string;
    
    @Column('text', {unique:true})
    email: string;
    
    @Column('text')
    password: string;
    
    @Column('text')
    role: string;

    @Column('text', {nullable: true})
    profileImage?: string;

    // @OneToMany(()=> Cat, (cat) => cat.id)
    // @Column('text', {array})
    // cats: string;
}