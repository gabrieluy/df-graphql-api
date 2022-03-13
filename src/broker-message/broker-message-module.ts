import { Module} from '@nestjs/common';
import { ValidationResponseModule } from '../validation-response/validation-response.module';
import { MqttPublisherModule } from '../mqqt-publisher/mqtt-publisher.module';
import { BrokerMessageResolver } from './broker-message.resolver';
import { BrokerMessageService } from './broker-message.service';

@Module({
  imports: [MqttPublisherModule, ValidationResponseModule],
  controllers: [],
  providers: [BrokerMessageService, BrokerMessageResolver],
})
export class BrokerMessageModule {}

