import { IsNotEmpty } from 'class-validator';

export class GetLessonsFilterDto {
  @IsNotEmpty()
  week_day: number;

  @IsNotEmpty()
  subject: string;

  @IsNotEmpty()
  time: string;
}