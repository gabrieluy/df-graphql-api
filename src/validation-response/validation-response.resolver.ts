import { Args, Query, Resolver, Subscription } from '@nestjs/graphql';
import { ValidationResponse } from './models/validation-response.model';
import { ValidationResponseService } from './validation-response.service';
import { PaginationArgs } from '../common/argument-types/pagination.args'
import { PubSubEngine } from 'graphql-subscriptions';
import { Inject } from '@nestjs/common';
import { CREATE_VALIDATION_EVENT_NAME } from './consts/create-validation-topic.const';
import { PUB_SUB } from '../common/consts/pub-sub.const';
@Resolver(() => ValidationResponse)
export class ValidationResponseResolver {

  constructor(private _service: ValidationResponseService, @Inject(PUB_SUB) private _pubSub: PubSubEngine) {}

  @Query(() => [ValidationResponse])
  async getValidationResponses(@Args() pagination: PaginationArgs): Promise<ValidationResponse[]> {
    const { offset, limit } = pagination;
    return await this._service.getMany(offset, limit);
  }

  @Subscription(() => ValidationResponse,{ name: CREATE_VALIDATION_EVENT_NAME})
  subscribeToValidationAdded() {
    return this._pubSub.asyncIterator(CREATE_VALIDATION_EVENT_NAME);
  }
}
