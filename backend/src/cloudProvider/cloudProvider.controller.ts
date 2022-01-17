import { Controller, Get } from '@nestjs/common';
import { CloudProvider, CloudProviderService } from './cloudProvider.service';

@Controller('cloud-provider')
export class CloudProviderController {
  constructor(private readonly cloudProviderService: CloudProviderService) {}

  @Get()
  getCloudProviders(): CloudProvider[] {
    return this.cloudProviderService.getCloudProviders();
  }
}
