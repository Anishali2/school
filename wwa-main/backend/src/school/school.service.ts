import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { School } from './schema/school.schema';
import { Model } from 'mongoose';
import { CreateSchoolDto } from './dto/school.dto';

@Injectable()
export class SchoolService {
  constructor(@InjectModel(School.name) private schoolModel: Model<School>) {}

  async createSchool(payload: CreateSchoolDto) {
    const alreadyExits = await this.schoolModel.exists({ name: payload.name });
    if (alreadyExits) {
      throw new HttpException('School already exists', 400);
    }
    const school = await this.schoolModel.create(payload);
    return school;
  }
}
