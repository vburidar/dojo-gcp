import { Controller, Get, Post } from '@nestjs/common';
import { CloudProvider } from './cloudProvider.entity';
import { CloudProviderService } from './cloudProvider.service';

@Controller('cloud-provider')
export class CloudProviderController {
  constructor(private readonly cloudProviderService: CloudProviderService) {}

  @Get()
  async getCloudProviders(): Promise<CloudProvider[]> {
    return this.cloudProviderService.getCloudProviders();
  }

  @Post()
  async addCloudProvider(): Promise<string> {
    return await this.cloudProviderService.addCloudProvider();
  }
}
