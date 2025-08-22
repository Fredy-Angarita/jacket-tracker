import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @ApiProperty({
    name: 'username',
    type: String,
    required: true,
    description: 'The username of the user',
    example: 'john_doe',
    uniqueItems: true,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(30)
  username: string;
  @ApiProperty({
    name: 'email',
    type: String,
    required: true,
    description: 'The email address of the user',
    example: 'email@example.com',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty({
    name: 'password',
    type: String,
    required: true,
    description: 'The password for the user account',
  })
  @IsNotEmpty()
  password: string;
}
