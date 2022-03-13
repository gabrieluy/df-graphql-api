import { Injectable } from '@nestjs/common';
import { MockDatabaseService } from '../mock-database/mock-database.service';
import { ValidationResponse } from './models/validation-response.model';

@Injectable()
export class ValidationResponseService {
  constructor(private _db: MockDatabaseService) { }

  async getMany(offset, limit): Promise<ValidationResponse[]> {
    return this._db.find(offset, limit);
  }

  async createValidOne(brokerId, message): Promise<ValidationResponse> {
    const validation = { brokerId, message, valid: true };
    const response = await this._db.save<ValidationResponse>(validation);
    return response;
  }

  async createInvalidOne(brokerId, message, error): Promise<ValidationResponse> {  
    const validation = { brokerId, message, error, valid: false };
    const response = await this._db.save<ValidationResponse>(validation);
    return response;
  }
}
