import {AuthService} from "./auth.service";
import {Body, Controller, Post} from "@nestjs/common";
import {CreateUserDto} from "../users/dto/create-user.dto";
import {RefreshDto} from "./dto/refresh.dto";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post("/login")
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @Post("/registration")
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }

  @Post("/refresh")
  refresh(@Body() refreshDto: RefreshDto) {
    return this.authService.refresh(refreshDto);
  }
}
