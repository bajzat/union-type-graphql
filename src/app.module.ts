import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TransportLocationModule } from './transport-location/transport-location.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useFactory: () => {
        return {
          introspection: true,
          playground: {
            endpoint:
              process.env.IS_NOT_SLS === 'true'
                ? '/graphql'
                : `/${process.env.STAGE}/graphql`,
          },
          debug: true,
          autoSchemaFile: true,
          sortSchema: true,
        };
      },
    }),
    TransportLocationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
