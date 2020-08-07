import { IsNotEmpty } from 'class-validator';

export class ScheduleLessonDto{
  @IsNotEmpty()
  week_day: number;

  @IsNotEmpty()
  from: string;

  @IsNotEmpty()
  to: string;
}