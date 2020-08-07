import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const typeOrmConfig: TypeOrmModuleOptions  = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'go_proffy',
  entities: [__dirname + '/../modules/**/entities/*.entity.{js,ts}'],
  synchronize: true
}

export default typeOrmConfig;