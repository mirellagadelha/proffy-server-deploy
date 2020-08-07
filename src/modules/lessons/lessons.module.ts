import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { LessonsService } from './lessons.service';
import { LessonsController } from './lessons.controller';
import { UserRepository } from '../users/user.repository';
import { LessonRepository } from './repositories/lesson.repository';
import { LessonSchedule } from './entities/lesson-schedule.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      UserRepository,
      LessonRepository,
      LessonSchedule
    ])
  ],
  providers: [LessonsService],
  controllers: [LessonsController]
})
export class LessonsModule {}
