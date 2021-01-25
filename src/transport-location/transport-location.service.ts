import { Injectable } from '@nestjs/common';
import { TransportLocation } from './models/transport-location.model';
import { Aircraft, Car, Vehicle } from './models/vehicle.model';

@Injectable()
export class TransportLocationService {
  private readonly data: TransportLocation[] = [
    new TransportLocation('Liszt Ferenc Airport', 'Budapest', [
      new Aircraft('747', 10000, 250, ['Andras', 'Balazs']),
      new Car('VW ID3', 300, 5, 'Avis'),
    ]),
  ];

  public async getAll(): Promise<TransportLocation[]> {
    return Promise.resolve(this.data);
  }
}
