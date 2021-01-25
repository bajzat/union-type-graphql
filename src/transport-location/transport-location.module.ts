import { Module } from '@nestjs/common';
import { TransportLocationResolver } from './transport-location.resolver';
import { TransportLocationService } from './transport-location.service';

@Module({
  providers: [TransportLocationResolver, TransportLocationService],
})
export class TransportLocationModule {}
