import { Injectable } from '@nestjs/common';
import { Response } from 'express';

@Injectable()
export class CookiesService {
  // Set a cookie
  setCookie(res: Response, name: string, value: string, days: number = 7) {
    const expires = new Date();
    expires.setDate(expires.getDate() + days);

    res.cookie(name, value, {
      httpOnly: true, // Ensures cookies are accessible only by the web server
      secure: false, // Set to true if using HTTPS
      sameSite: 'none', // Required for cross-origin requests
      expires, // Set the expiry date for the cookie
    });
  }

  // Get cookies
  getCookie(req: any, name: string) {
    return req.cookies[name] || null;
  }

  // Clear a cookie
  clearCookie(res: Response, name: string) {
    res.clearCookie(name, {
      httpOnly: true,
      sameSite: 'none',
      secure: false,
    });
  }
}
