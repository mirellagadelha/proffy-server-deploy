import { Controller, Post, Body, Get, ValidationPipe, Query } from '@nestjs/common';

import { LessonsService } from './lessons.service';

import { CreateLessonDto } from './dto/create-lesson.dto';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { GetLessonsFilterDto } from './dto/get-lessons-filter.dto';
import { Lesson } from './entities/lesson.entity';

@Controller('lessons')
export class LessonsController {
  constructor(private lessonsService : LessonsService){}
  @Get()
  getLessons(
    @Query(ValidationPipe) getLessonsFilterDto: GetLessonsFilterDto
  ): Promise<Lesson[]>{
    return this.lessonsService.getLessons(getLessonsFilterDto);
  }

  @Post()
  createLesson(
    @Body() createLessonDto: CreateLessonDto,
    @Body() createUserDto: CreateUserDto
  ): Promise<void>{
    return this.lessonsService.createLesson(createLessonDto, createUserDto);
  }
}