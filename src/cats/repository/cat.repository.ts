import { NotFoundException } from "@nestjs/common";
import { updateCatDTO } from "../dto/updateCat.dto";
import { Cat } from "../entities/cat.entity";
import { v4 as uuid } from 'uuid';

export class CatRepository {
    private cats: Cat[] = [
        {
            id: uuid(),
            name: 'Kyo',
            age: 9,
            owner: 'Caleb',
            color: 'black',
        },
    ]

    getAll() {
        const cats = this.cats;
        return cats;
    }

    async findOne(id: string): Promise<Cat> {
        const cat = await this.cats.find(cat => cat.id === id);
        if (!cat)
            throw new NotFoundException(`Cat with id ${id} not found`);
        return cat;
    }

    async createOne(cat: Cat) {
        await this.cats.push(cat);
        return cat;
    }

    async updateOne(id: string, catDTO: updateCatDTO) {
        let catDB = await this.findOne(id);

        this.cats = this.cats.map(cat => {
            if (cat.id === id) {
                catDB = { ...catDB, ...catDTO, id }
                return catDB;
            }
            return cat;
        })   
        return catDB;
    }

    async deleteOne(id: string) {
        const cat = this.findOne(id);
        this.cats = this.cats.filter(car => car.id !== id);
        return `Successfully deleted cat with id ${id}`
    }
}