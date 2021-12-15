import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CloudProviderController } from './cloudProvider.controller';
import { CloudProviderService } from './cloudProvider.service';
import { CloudProvider } from './cloudProvider.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CloudProvider])],
  controllers: [CloudProviderController],
  providers: [CloudProviderService],
})
export class CloudProviderModule {}
