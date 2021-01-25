import {
  createUnionType,
  Field,
  InterfaceType,
  ObjectType,
} from '@nestjs/graphql';

@InterfaceType({
  resolveType: (vehicle) => {
    if (vehicle.drivers) {
      return Bus;
    }
    if (vehicle.rentingCompany) {
      return Car;
    }

    return Aircraft;
  },
})
export abstract class Vehicle {
  @Field()
  public name: string;
  @Field()
  public range: number;
  @Field()
  public capacity: number;
}

@ObjectType({
  implements: () => [Vehicle],
})
export class Bus implements Vehicle {
  public name: string;
  public range: number;
  public capacity: number;
  @Field(() => [String])
  public drivers: string[];

  constructor(
    name: string,
    range: number,
    capacity: number,
    drivers: string[],
  ) {
    this.name = name;
    this.range = range;
    this.capacity = capacity;
    this.drivers = drivers;
  }
}
@ObjectType({
  implements: () => [Vehicle],
})
export class Car implements Vehicle {
  public name: string;
  public range: number;
  public capacity: number;
  @Field()
  public rentingCompany: string;

  constructor(
    name: string,
    range: number,
    capacity: number,
    rentingCompany: string,
  ) {
    this.name = name;
    this.range = range;
    this.capacity = capacity;
    this.rentingCompany = rentingCompany;
  }
}
@ObjectType({
  implements: () => [Vehicle],
})
export class Aircraft implements Vehicle {
  public name: string;
  public range: number;
  public capacity: number;
  @Field(() => [String])
  public pilots: string[];

  constructor(name: string, range: number, capacity: number, pilots: string[]) {
    this.name = name;
    this.range = range;
    this.capacity = capacity;
    this.pilots = pilots;
  }
}
