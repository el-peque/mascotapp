import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { catDTO } from './dto/cat.dto';
import { updateCatDTO } from './dto/updateCat.dto';

@Controller('cats')
export class CatsController {
    constructor(private readonly catService: CatsService) {}

    @Get()
    findAll() {
        return this.catService.getAll();
    }    

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.catService.findOne(id);
    }

    @Post()
    createCat(@Body() catDTO: catDTO){
        return this.catService.createOne(catDTO);
    }

    @Patch(':id')
    updateCat(@Param('id', ParseUUIDPipe) id: string, @Body() catDTO: updateCatDTO){
        return this.catService.updateOne(id, catDTO);
    }

    @Delete(':id')
    deleteCat(@Param('id', ParseUUIDPipe) id: string){
        return this.catService.deleteOne(id);
    }
}
