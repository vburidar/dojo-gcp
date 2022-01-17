import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CloudProviderModule } from './cloudProvider/cloudProvider.module';

@Module({
  imports: [CloudProviderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
