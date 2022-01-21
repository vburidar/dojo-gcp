import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CloudProvider } from './cloudProvider.entity';

@Injectable()
export class CloudProviderService {
  constructor(
    @InjectRepository(CloudProvider)
    private cloudProviderRepository: Repository<CloudProvider>,
  ) {}

  async getCloudProviders(): Promise<CloudProvider[]> {
    return await this.cloudProviderRepository.find();
  }

  async addCloudProvider(): Promise<string> {
    await this.cloudProviderRepository.save({ name: 'GCP' });
    return 'done';
  }
}
