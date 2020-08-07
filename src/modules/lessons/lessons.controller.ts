import { Controller, Post, Body } from '@nestjs/common';

import { LessonsService } from './lessons.service';

import { CreateLessonDto } from './dto/create-lesson.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';

@Controller('lessons')
export class LessonsController {
  constructor(private lessonsService : LessonsService){}

  @Post()
  createLesson(
    @Body() createLessonDto: CreateLessonDto,
    @Body() createUserDto: CreateUserDto
  ): Promise<void>{
    return this.lessonsService.createLesson(createLessonDto, createUserDto);
  }
}