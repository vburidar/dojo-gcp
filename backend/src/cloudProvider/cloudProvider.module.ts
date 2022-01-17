import { Module } from '@nestjs/common';
import { CloudProviderController } from './cloudProvider.controller';
import { CloudProviderService } from './cloudProvider.service';

@Module({
  imports: [],
  controllers: [CloudProviderController],
  providers: [CloudProviderService],
})
export class CloudProviderModule {}
