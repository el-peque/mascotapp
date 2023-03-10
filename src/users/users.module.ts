import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsModule } from 'src/cats/cats.module';
import { User } from './entities/user.entity';
import { UserRepository } from './repository/user.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    CatsModule,
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    UserRepository
  ],
})
export class UsersModule {}
