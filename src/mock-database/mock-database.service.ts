import { Injectable } from '@nestjs/common';
import {v4 as uuidv4} from 'uuid';

/*
  Mock of database to avoid having to install a real one. 
*/
@Injectable()
export class MockDatabaseService {
  listOfData = [];

  async find<T>(offset, limit): Promise<T[]> {
    const copyList = Object.assign([], this.listOfData);
    return copyList.splice(offset, limit);
  }

  async save<T>(data): Promise<T> {
    const dataToStore = { id:uuidv4(),...data }
    this.listOfData.push(dataToStore);
    return dataToStore;
  }
}
