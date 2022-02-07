import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CloudProvider } from './cloudProvider.entity';
import { CloudProviderDto } from './cloudProviderDto.type';

@Injectable()
export class CloudProviderService {
  constructor(
    @InjectRepository(CloudProvider)
    private cloudProviderRepository: Repository<CloudProvider>,
  ) {}

  async getCloudProviders(): Promise<CloudProvider[]> {
    return await this.cloudProviderRepository.find();
  }

  async addCloudProvider(cloudProviderDto: CloudProviderDto): Promise<string> {
    await this.cloudProviderRepository.save(cloudProviderDto);
    return 'done!';
  }
}
