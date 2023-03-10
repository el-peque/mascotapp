import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { Cat } from './entities/cat.entity';
import { CatRepository } from './repository/cat.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([Cat]),
  ],
  controllers: [CatsController],
  providers: [
    CatsService,
    CatRepository
  ],
  exports: [CatsService]
})
export class CatsModule {}
