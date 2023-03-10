import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { dogDTO } from './dto/dog.dto';
import { Dog } from './entities/dog.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class DogsService {
    private dogs: Dog[] = [
        {
            id: uuid(),
            name: 'Poppy',
            age: 2,
            owner: 'Jhon',
        },
    ]

    async getAll() {
        const dogs = await this.dogs;
        return dogs;
    }

    async findOne(id: string) {
        const dog = await this.dogs.find(dog => dog.id === id);
        if (!dog)
            throw new NotFoundException(`Dog with id ${id} not found`);
        return dog;
    }

    async createOne(dogDTO: dogDTO) {
        if (isNaN(+dogDTO.age)){
            throw new BadRequestException(`Age should be a number`);
        }
        if (+dogDTO.age < 0){
            throw new BadRequestException(`Age should be higher than 0`);
        }
        const dog: Dog = {
            id: uuid(),
            ...dogDTO,
            age: +dogDTO.age
        }
        await this.dogs.push(dog);
        return dog;
    }
}
