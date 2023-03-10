import { Module } from '@nestjs/common';
import { CatsModule } from './cats/cats.module';
import { DogsModule } from './dogs/dogs.module';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { CatsController } from './cats/cats.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      database: 'MascotappDB',
      username: 'postgres',
      password: 'dbpassword',
      autoLoadEntities: true,
      synchronize: true,
    }), 
    CatsModule,
    DogsModule,
    UsersModule,
    PostsModule
  ],  
})
export class AppModule {}
