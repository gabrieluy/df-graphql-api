import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { SendMessageArgs } from '../broker-message/argument-types/send-message.args';
import { BrokerMessageService } from './broker-message.service';
import { UseInterceptors } from '@nestjs/common';
import { ErrorsInterceptor } from '../interceptors/errors.interceptor';
import { BrokerMessageResponse } from './models/broker-message-response.model';

@Resolver(BrokerMessageResponse)
@UseInterceptors(ErrorsInterceptor)
export class BrokerMessageResolver {
  constructor(private _service: BrokerMessageService) {}

  @Mutation(() => BrokerMessageResponse)
  async sendMessage(@Args() msgArgs : SendMessageArgs) : Promise<BrokerMessageResponse> {
    return this._service.sendMessage(msgArgs);
  }
}
