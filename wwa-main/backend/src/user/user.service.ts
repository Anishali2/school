import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schema/user.schema';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  async getLoggedInUserData(userId: string) {
    const user = await this.userModel.findById(userId).select('-password');

    if (!user) {
      throw new HttpException('User not found', 400);
    }
    const dashboardData = {
      totalStudents: 100,
      totalEmployees: 10,
      revenue: 1500,
      totalProfit: 50000,
      estimatedFee: {
        estimation: 10000,
        collection: 6000,
        remaining: 4000,
      },
      absentsStudentsToday: 4,
      presentEmployeesToday: 5,
      newAdmissionsToday: 2,
    };
    return { user, dashboardData };
  }
}
