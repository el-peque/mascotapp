import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { updateUserDTO } from './dto/updateUsers.dto';
import { userDTO } from './dto/users.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        ) {}

    async getAll() {
        try {
            return await this.userRepository.find();            
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }

    async findOne(id: string) {
        try {
            const user = await this.userRepository.findOneBy({
                id: id,
            })
            if (!user)
                throw new NotFoundException(`User with id ${id} not found`)
            return user   
        } catch (error) {
            throw new InternalServerErrorException()
        }
    }

    async createOne(userDTO: userDTO) {
        try {
            const user =  this.userRepository.create(userDTO);
            await this.userRepository.save(user)
            return user
        } catch (error) {
            console.log(error);
            throw new InternalServerErrorException()
        }
    }

    async updateOne(id: string, userDTO: updateUserDTO) {
        try {
            const user = await this.userRepository.preload({
                id: id,
                ...userDTO
            });
            if (!user)
                throw new NotFoundException(`User with id ${id} not found`)
            await this.userRepository.save(user)
            return user
        } catch (error) {
            throw new InternalServerErrorException()
        }      
    }

    async deleteOne(id: string) {
        try {
            const user = await this.userRepository.findOneBy({
                id: id,
            })
            this.userRepository.remove(user) 
            return
        } catch (error) {
            throw new InternalServerErrorException()
        }      
    }
}
