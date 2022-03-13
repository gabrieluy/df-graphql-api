import { Injectable } from '@nestjs/common';
import { ValidationException } from '../common/exceptions/validation.exception';

@Injectable()
export class MockMqttPublisherService {
  /*
    Simulates that there is an error in the communication with the broker. 
    In a real context, the errors would have to be captured and the correct
    exception would have to be sent according to the data.
  */
  async publish(data: any): Promise<any> {
    if(Math.floor(Math.random() * 2) === 1){
      throw new ValidationException();
    } else {
      return { brokerId: data.brokerId, message: data.message };
    }
  }
}
