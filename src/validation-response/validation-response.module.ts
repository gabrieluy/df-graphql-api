import { Module } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { PUB_SUB } from '../common/consts/pub-sub.const';
import { MockDatabaseModule } from '../mock-database/mock-database.module';
import { ValidationResponseResolver } from './validation-response.resolver';
import { ValidationResponseService } from './validation-response.service';

@Module({
  imports: [MockDatabaseModule],
  controllers: [],
  providers: [
    ValidationResponseService, 
    ValidationResponseResolver,
    {
      provide: PUB_SUB,
      useValue: new PubSub(),
    },
  ],
  exports: [ValidationResponseService],
})
export class ValidationResponseModule {}

