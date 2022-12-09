import {ApiProperty} from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({example: 'aboba@gmail.com', description: 'email address'})
  readonly email: string;
  @ApiProperty({example: 'secret_password', description: 'password'})
  readonly password: string;
}