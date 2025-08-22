import { BadRequestException } from '@nestjs/common';

export class AlreadyExistsException extends BadRequestException {
  constructor(message: string) {
    super({
      statusCode: 400,
      message: message,
      error: 'AlreadyExists',
    });
  }
}
