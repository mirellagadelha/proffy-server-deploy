import { Repository, EntityRepository } from "typeorm";

import { Lesson } from "../entities/lesson.entity";
import { User } from "src/modules/users/entities/user.entity";
import { LessonSchedule } from "../entities/lesson-schedule.entity";

import { GetLessonsFilterDto } from "../dto/get-lessons-filter.dto";
import convertHourToMinutes from "src/utils/convertHourToMinutes";

@EntityRepository(Lesson)
export class LessonRepository extends Repository<Lesson> {
  async getLessons(getLessonsFilterDto: GetLessonsFilterDto): Promise<Lesson[]>{
    const { subject, week_day, time } = getLessonsFilterDto;

    const timeInMinutes = convertHourToMinutes(time);

    const lessons = this.createQueryBuilder('lesson')
      .select('*')
      .where('lesson.subject = :subject', { subject })
      .innerJoin(LessonSchedule, 'schedule', 'schedule.id = lesson.id')
      .innerJoin(User, 'user', 'user.id = lesson.id')
      .andWhere('schedule.week_day = :week_day', { week_day })
      .andWhere('schedule.from <= :timeInMinutes', { timeInMinutes })
      .andWhere('schedule.to > :timeInMinutes', { timeInMinutes })
      .getRawMany();

    return lessons;
  }
}


