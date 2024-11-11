import { Body, Controller, Post } from '@nestjs/common';
import { SchoolService } from './school.service';
import { CreateSchoolDto } from './dto/school.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('School')
@Controller('school')
export class SchoolController {
  constructor(private schoolService: SchoolService) {}

  @Post('create')
  async createSchool(@Body() body: CreateSchoolDto) {
    const data = await this.schoolService.createSchool(body);
    return data;
  }
}
