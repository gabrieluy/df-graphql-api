import { Module } from '@nestjs/common';
import { MockDatabaseModule } from '../mock-database/mock-database.module';
import { ValidationResponseResolver } from './validation-response.resolver';
import { ValidationResponseService } from './validation-response.service';

@Module({
  imports: [MockDatabaseModule],
  controllers: [],
  providers: [ValidationResponseService, ValidationResponseResolver],
  exports: [ValidationResponseService],
})
export class ValidationResponseModule {}

