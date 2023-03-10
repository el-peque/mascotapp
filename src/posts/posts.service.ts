import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { postDTO } from './dto/posts.dto';
import { Post } from './entities/post.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class PostService {
    private posts: Post[] = [
        {
            id: uuid(),
            title: 'Little fella',
            body: 'Look how cute my dog looks!',
            category: 'Dogs',
            image: 'cute_dog.jpg',
        },
    ]

    async getAll() {
        const posts = await this.posts;
        return posts;
    }

    async findOne(id: string) {
        const post = await this.posts.find(post => post.id === id);
        if (!post)
            throw new NotFoundException(`Post doesn't exist`);
        return post;
    }

    async createOne(postDTO: postDTO) {
        const extension = postDTO.image.substring(postDTO.image.length - 4)
        if (!(extension === '.jpg' || extension === '.png')) {
            throw new BadRequestException(`${extension} is not a valid file type, make sure it's '.jpg' or '.png'`)
        }
        const post: Post = {
            id: uuid(),
            ...postDTO,
        }
        await this.posts.push(post);
        return post;
    }
}
