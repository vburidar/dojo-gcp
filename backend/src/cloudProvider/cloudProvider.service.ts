import { Injectable } from '@nestjs/common';

export type CloudProvider = {
  name: string;
  grade: number;
};

@Injectable()
export class CloudProviderService {
  getCloudProviders(): CloudProvider[] {
    return [
      {
        name: 'GCP',
        grade: 10,
      },
      {
        name: 'AWS',
        grade: 1,
      },
    ];
  }
}
