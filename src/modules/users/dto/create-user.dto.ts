import { IsNotEmpty } from 'class-validator';

export class CreateUserDto{
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  avatar: string;

  @IsNotEmpty()
  whatsapp: string;

  @IsNotEmpty()
  bio: string;
}