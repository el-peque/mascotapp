import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Post } from './entities/post.entity';
import { PostsController } from './posts.controller';
import { PostService } from './posts.service';

@Module({
  imports : [
    TypeOrmModule.forFeature([Post]),
  ],
  controllers: [PostsController],
  providers: [PostService]
})
export class PostsModule {}
