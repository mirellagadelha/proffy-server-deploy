import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../users/entities/user.entity';
import { Lesson } from './entities/lesson.entity';
import { LessonSchedule } from './entities/lesson-schedule.entity';

import { UserRepository } from '../users/user.repository';
import { LessonRepository } from './repositories/lesson.repository';

import { CreateLessonDto } from './dto/create-lesson.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { ScheduleLessonDto } from './dto/schedule-lesson.dto';
import convertHourToMinutes from 'src/utils/convertHourToMinutes';
import { GetLessonsFilterDto } from './dto/get-lessons-filter.dto';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(User)
    private userRepository: UserRepository,

    @InjectRepository(Lesson)
    private lessonRepository: LessonRepository,
    
    @InjectRepository(LessonSchedule)
    private lessonScheduleRepository: Repository<LessonSchedule>,
  ){}
  async getLessons(getLessonsFilterDto: GetLessonsFilterDto): Promise<Lesson[]>{
    return this.lessonRepository.getLessons(getLessonsFilterDto);
  }

  async createLesson(
    createLessonDto: CreateLessonDto, 
    createUserDto: CreateUserDto
  ): Promise<void>{
    try {
      const { name, avatar, whatsapp, bio } = createUserDto;
      const { subject, cost, schedule } = createLessonDto;

      const createUser = this.userRepository.create({
        name,
        avatar, 
        whatsapp,
        bio
      });
      const user = await this.userRepository.save(createUser);

      const createLesson = this.lessonRepository.create({
        subject,
        cost,
        user_id: user.id
      })
      const lesson = await this.lessonRepository.save(createLesson);

      const lessonSchedule = schedule.map((scheduleItem: ScheduleLessonDto) => {
        return {
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from),
          to: convertHourToMinutes(scheduleItem.to),
          lesson_id: lesson.id
        }
      });
      const createLessonSchedule = this.lessonScheduleRepository.create(lessonSchedule);
      
      await this.lessonScheduleRepository.save(createLessonSchedule);

    }catch(err) {
      throw new HttpException("Unexpected error while creating new class", 400);
    }
  }
}