import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name: 'users'})
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  avatar: string;

  @Column()
  whatsapp: string;

  @Column()
  bio: string;
}