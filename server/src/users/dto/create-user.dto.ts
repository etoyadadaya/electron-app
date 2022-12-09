import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'aboba@gmail.com', description: 'email address' })
  @IsString({ message: 'Should be a string' })
  @IsEmail({}, { message: 'Incorrect email' })
  readonly email: string;

  @ApiProperty({ example: 'secret_password', description: 'password' })
  @IsString({ message: 'Should be a string' })
  @Length(5, 50, { message: 'Should be > 4 and < 51' })
  readonly password: string;
}
