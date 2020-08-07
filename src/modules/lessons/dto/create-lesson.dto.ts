import { IsNotEmpty } from 'class-validator';
import { ScheduleLessonDto } from './schedule-lesson.dto';

export class CreateLessonDto{
  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  cost: number;

  @IsNotEmpty()
  schedule: ScheduleLessonDto[];
}