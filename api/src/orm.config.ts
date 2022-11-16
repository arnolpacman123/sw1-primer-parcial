import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const config: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgres://hwvlsftpovhdgw:1d77e85be830fc308fb569950605247b2c42c089108ac37009013bfcd373f5ed@ec2-34-194-73-236.compute-1.amazonaws.com:5432/d6t5tum2fqjn87',
  synchronize: true,
  entities: ['dist/**/*.entity.{ts,js}'],
  autoLoadEntities: true,
  ssl: {
    rejectUnauthorized: false,
  },
};
