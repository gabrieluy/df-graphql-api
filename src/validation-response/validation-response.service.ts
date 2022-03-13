import { Inject, Injectable } from '@nestjs/common';
import { PubSubEngine } from 'graphql-subscriptions';
import { PUB_SUB } from '../common/consts/pub-sub.const';
import { MockDatabaseService } from '../mock-database/mock-database.service';
import { CREATE_VALIDATION_EVENT_NAME } from './consts/create-validation-topic.const';
import { ValidationResponse } from './models/validation-response.model';

@Injectable()
export class ValidationResponseService {
  constructor(private _db: MockDatabaseService, @Inject(PUB_SUB) private _pubSub: PubSubEngine) { }

  async getMany(offset, limit): Promise<ValidationResponse[]> {
    return this._db.find(offset, limit);
  }

  async createValidOne(brokerId, message): Promise<ValidationResponse> {
    const validation = { brokerId, message, valid: true };
    const response = await this._db.save<ValidationResponse>(validation);
    this._publishResponse(response);
    return response;
  }
  
  async createInvalidOne(brokerId, message, error): Promise<ValidationResponse> {  
    const validation = { brokerId, message, error, valid: false };
    const response = await this._db.save<ValidationResponse>(validation);
    this._publishResponse(response);
    return response;
  }

  private _publishResponse(response: ValidationResponse) {
    this._pubSub.publish(CREATE_VALIDATION_EVENT_NAME, { [CREATE_VALIDATION_EVENT_NAME]: response });
  }
}
