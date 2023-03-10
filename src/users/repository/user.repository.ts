import { NotFoundException } from "@nestjs/common";
import { updateUserDTO } from "../dto/updateUsers.dto";
import { User } from "../entities/user.entity";
import { v4 as uuid } from 'uuid';

export class UserRepository {
    private users: User[] = [
        {
            id: uuid(),
            username: 'peque3',
            email: 'peque@gmail.com',
            password: 'abc123',
            role: 'admin',
            profileImage: 'profile_pic.jpg',
            // pets: [],
        },
    ]

    getAll(): User[] {
        const users = this.users;
        return users;
    }

    findOne(id: string): User {
        const user = this.users.find(user => user.id === id);
        if (!user)
            throw new NotFoundException(`User with id ${id} not found`);
        return user;
    }

    createOne(user: User): User {
        this.users.push(user);
        return user;
    }

    updateOne(id: string, userDTO: updateUserDTO) {
        let userDB = this.findOne(id);

        this.users = this.users.map(user => {
            if (user.id === id) {
                userDB = { ...userDB, ...userDTO, id }
                return userDB;
            }
            return user;
        })   
        return userDB;
    }

    deleteOne(id: string) {
        const user = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return `Successfully deleted user with id ${id}`
    }
}