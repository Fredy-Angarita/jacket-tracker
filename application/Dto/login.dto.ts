import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class loginDto {
  @ApiProperty({
    name: 'email',
    type: String,
    required: true,
    description: 'The email address of the user',
    example: 'guess@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @ApiProperty({
    name: 'password',
    type: String,
    required: true,
    description: 'The password for the user account',
  })
  @IsNotEmpty()
  @IsString()
  password: string;
}
