import { Injectable } from '@nestjs/common';
import { MockMqttPublisherService } from '../mqqt-publisher/mock-mqtt-publisher.service';
import { SendMessageArgs } from './argument-types/send-message.args';
import { ValidationResponseService } from '../validation-response/validation-response.service';
import { ValidationException } from '../common/exceptions/validation.exception';
import { BrokerMessageResponse } from './models/broker-message-response.model';

@Injectable()
export class BrokerMessageService {
  constructor(
      private readonly _publisherService: MockMqttPublisherService,
      private readonly _validationService: ValidationResponseService
    ) { }

  async sendMessage(msgArgs: SendMessageArgs): Promise<BrokerMessageResponse> {
    try {
      await this._publisherService.publish(msgArgs);
      this._validationService.createValidOne(msgArgs.brokerId, msgArgs.message)
      return this._createSuccessResponse();
    } catch (ex) {
      if (ex instanceof ValidationException) {
        this._validationService.createInvalidOne(msgArgs.brokerId, msgArgs.message, ex.message)
        return this._createFailResponse(ex.message);     
      }
    }
  }

  private _createSuccessResponse(): BrokerMessageResponse {
    return { success: true }
  }

  private _createFailResponse(errorMsg: string): BrokerMessageResponse {
    return { success: false, error: errorMsg };
  }
}
