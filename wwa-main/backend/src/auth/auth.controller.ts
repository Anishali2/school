import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { JwtAuthGuard } from './guards/jwt.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { LoginDto, RegisterDto } from './dto/auth.dto';

@ApiBearerAuth()
@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() registerPayload: RegisterDto) {
    return this.authService.registerUser(registerPayload);
  }

  @Post('login')
  async login(@Body() loginPayload: LoginDto) {
    const token = await this.authService.login(loginPayload);
    return JSON.stringify(token);
  }

  @Get('/all')
  @UseGuards(JwtAuthGuard)
  getAll(@Req() req: Request) {
    return req.user;
  }
}
