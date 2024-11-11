import 'express';
import { JWtDto } from './auth/dto/auth.dto';

declare module 'express-serve-static-core' {
  interface Request {
    user?: JWtDto;
  }
}
