import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudProviderModule } from './cloudProvider/cloudProvider.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT, 10),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_DATABASE,
      entities: ['dist/**/*.entity.js'],
      synchronize: process.env.DATABASE_SYNCHRONIZE === 'true',
    }),
    CloudProviderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
