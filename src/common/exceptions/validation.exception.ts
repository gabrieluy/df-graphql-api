import { HttpException, HttpStatus } from "@nestjs/common";

export class ValidationException extends HttpException {
  constructor() {
    super('Validation Error', HttpStatus.BAD_REQUEST);
  }
}
