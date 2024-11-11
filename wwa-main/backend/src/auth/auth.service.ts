import { HttpException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JWtDto, LoginDto, RegisterDto } from './dto/auth.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/user/schema/user.schema';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    @InjectModel(User.name) private userModel: Model<User>,
  ) {}

  async registerUser(payload: RegisterDto) {
    const alreadyExits = await this.userModel.exists({ email: payload.email });
    if (alreadyExits) {
      throw new HttpException('User already exists', 400);
    }
    const hashPassword = await this.hashPassword(payload.password);
    const user = await this.userModel.create({
      email: payload.email,
      isActive: payload.isActive,
      name: payload.name,
      password: hashPassword,
      role: payload.role,
      school: payload.school,
    });
    return user;
  }

  async login(payload: LoginDto) {
    const user = await this.userModel.findOne({ email: payload.email });
    if (!user) {
      throw new HttpException('User not found', 400);
    }
    const isMatch = await this.verifyPassword(payload.password, user.password);
    if (!isMatch) {
      throw new HttpException('Wrong password', 400);
    }
    const token = this.generateToken({
      id: user.id,
      school: user.school,
      role: user.role,
    });
    return token;
  }

  generateToken(payload: JWtDto) {
    return this.jwtService.sign(payload);
  }

  hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }
  verifyPassword(password: string, hashedPassword: string) {
    return bcrypt.compare(password, hashedPassword);
  }
}
