import { Resolver, Query } from '@nestjs/graphql';
import { TransportLocation } from './models/transport-location.model';
import { TransportLocationService } from './transport-location.service';

@Resolver(() => TransportLocation)
export class TransportLocationResolver {
  constructor(
    private readonly transportLocationService: TransportLocationService,
  ) {}

  @Query(() => [TransportLocation])
  public async getAllTransportLocation(): Promise<TransportLocation[]> {
    return this.transportLocationService.getAll();
  }
}
