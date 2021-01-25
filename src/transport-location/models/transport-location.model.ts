import { Field, ObjectType } from '@nestjs/graphql';
import { Aircraft, Bus, Car, Vehicle, VehicleUnion } from './vehicle.model';

@ObjectType()
export class TransportLocation {
  @Field()
  public name: string;
  @Field()
  public city: string;
  @Field(() => [Vehicle])
  public availableVehicles: Vehicle[];

  constructor(name: string, city: string, availableVehicles: Vehicle[]) {
    this.name = name;
    this.city = city;
    this.availableVehicles = availableVehicles;
  }
}
