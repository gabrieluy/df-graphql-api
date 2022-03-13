import { Args, Query, Resolver } from '@nestjs/graphql';
import { ValidationResponse } from './models/validation-response.model';
import { ValidationResponseService } from './validation-response.service';
import { PaginationArgs } from '../common/argument-types/pagination.args'

@Resolver(() => ValidationResponse)
export class ValidationResponseResolver {
  constructor(private _service: ValidationResponseService) {}

  @Query(() => [ValidationResponse])
  async getValidationResponses(@Args() pagination: PaginationArgs): Promise<ValidationResponse[]> {
    const { offset, limit } = pagination;
    return await this._service.getMany(offset, limit);
  }
}
