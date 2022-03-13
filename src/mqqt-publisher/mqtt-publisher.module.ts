import { Module } from '@nestjs/common';
import { MockMqttPublisherService } from './mock-mqtt-publisher.service';

@Module({
  imports: [],
  providers: [MockMqttPublisherService],
  exports: [MockMqttPublisherService],
})
export class MqttPublisherModule { }


