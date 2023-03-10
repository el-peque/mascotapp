import { Body, Controller, Get, Param, ParseIntPipe, ParseUUIDPipe, Post } from '@nestjs/common';
import { postDTO } from './dto/posts.dto';
import { PostService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postService: PostService) {}

    @Get()
    findAll() {
        return this.postService.getAll();
    }    

    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
        return this.postService.findOne(id);
    }

    @Post()
    createCat(@Body() postDTO: postDTO){
        return this.postService.createOne(postDTO);
    }
}
