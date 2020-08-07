import { 
  BaseEntity, 
  Entity, 
  PrimaryGeneratedColumn, 
  Column,
  ManyToOne,
  JoinColumn
} from "typeorm";

import { Lesson } from "./lesson.entity";

@Entity({name: 'lesson_schedule'})
export class LessonSchedule extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  week_day: number;

  @Column()
  from: number;

  @Column()
  to: number;

  @Column()
  lesson_id: number;

  @ManyToOne(() => Lesson)
  @JoinColumn({ name: 'lesson_id' })
  lesson: Lesson;
}