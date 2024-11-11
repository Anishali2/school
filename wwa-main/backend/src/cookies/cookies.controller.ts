import { Controller, Get, Res, Req, Query } from '@nestjs/common';
import { Response, Request } from 'express';
import { CookiesService } from './cookies.service';

@Controller('cookies')
export class CookiesController {
  constructor(private readonly cookiesService: CookiesService) {}

  // Set a cookie via an API call
  @Get('set')
  setCookie(
    @Res() res: Response,
    @Query('name') name: string,
    @Query('value') value: string,
  ) {
    this.cookiesService.setCookie(
      res,
      name || 'test_cookie',
      value || 'test_value',
    );
    res.send({ message: `Cookie "${name}" has been set` });
  }

  // Get the value of a cookie
  @Get('get')
  getCookie(@Req() req: Request, @Query('name') name: string) {
    const value = this.cookiesService.getCookie(req, name);
    return { name, value };
  }

  // Clear a specific cookie
  @Get('clear')
  clearCookie(@Res() res: Response, @Query('name') name: string) {
    this.cookiesService.clearCookie(res, name || 'test_cookie');
    res.send({ message: `Cookie "${name}" has been cleared` });
  }
}
