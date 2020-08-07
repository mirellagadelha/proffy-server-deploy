import { Injectable } from '@nestjs/common';

import { User } from './entities/user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    public readonly userRepository: UserRepository,
  ){}

  async createUser(createUserDto: CreateUserDto): Promise<User>{
    const { name, avatar, whatsapp, bio } = createUserDto;

    const user = this.userRepository.create({
      name,
      avatar,
      whatsapp,
      bio
    });

    await this.userRepository.save(user);

    return user;
  }
}
