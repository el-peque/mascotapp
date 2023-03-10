import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { catDTO } from './dto/cat.dto';
import { updateCatDTO } from './dto/updateCat.dto';
import { Cat } from './entities/cat.entity';
import { CatRepository } from './repository/cat.repository';


@Injectable()
export class CatsService {
    constructor(private readonly catRepository: CatRepository) {}

    getAll() {
        return this.catRepository.getAll();
    }

    findOne(id: string) {
        return this.catRepository.findOne(id);
    }

    async createOne(catDTO: catDTO) {
        if (isNaN(+catDTO.age)){
            throw new BadRequestException(`Age should be a number`);
        }
        const cat: Cat = {
            id: uuid(),
            ...catDTO,
            age: +catDTO.age
        }
        return await this.catRepository.createOne(cat);
    }

    async updateOne(id: string, catDTO: updateCatDTO) {
        if (catDTO.name) {
          catDTO.name = catDTO.name.toLocaleLowerCase()
        }
        return await this.catRepository.updateOne(id, catDTO);      
    }

    async deleteOne(id: string) {
        return await this.catRepository.deleteOne(id);      
    }
}
