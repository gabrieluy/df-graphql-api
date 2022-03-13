import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ValidationResponseModule } from './validation-response/validation-response.module';
import { BrokerMessageModule } from './broker-message/broker-message-module';
@Module({
  imports: [
    ValidationResponseModule,
    BrokerMessageModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
    driver: ApolloDriver,
    subscriptions: {
      'graphql-ws': true,
      'subscriptions-transport-ws': true
    },
    autoSchemaFile: 'schema.gql',
    debug: true,
    playground: true
  }),],
  controllers: [],
})
export class AppModule {}



