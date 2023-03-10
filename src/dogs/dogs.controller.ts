import { Body, Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, Post } from '@nestjs/common';
import { DogsService } from './dogs.service';
import { dogDTO } from './dto/dog.dto';

@Controller('dogs')
export class DogsController {
    constructor(private readonly dogService: DogsService) {}

    @Get()
    findAll() {
        return this.dogService.getAll();
    }    

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.dogService.findOne(id);
    }

    @Post()
    createCat(@Body() dogDTO: dogDTO){
        return this.dogService.createOne(dogDTO);
    }
}
