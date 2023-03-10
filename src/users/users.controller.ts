import { Body, Controller, Delete, Get, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { updateUserDTO } from './dto/updateUsers.dto';
import { userDTO } from './dto/users.dto';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService) {}

    @Get()
    findAll() {
        return this.userService.getAll();
    }    

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.userService.findOne(id);
    }

    @Post()
    createCat(@Body() userDTO: userDTO){
        return this.userService.createOne(userDTO);
    }

    @Patch(':id')
    updateCat(@Param('id', ParseUUIDPipe) id: string, @Body() catDTO: updateUserDTO){
        return this.userService.updateOne(id, catDTO);
    }

    @Delete(':id')
    deleteCat(@Param('id', ParseUUIDPipe) id: string){
        return this.userService.deleteOne(id);
    }

}
