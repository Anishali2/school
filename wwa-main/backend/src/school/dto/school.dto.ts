import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateSchoolDto {
  @ApiProperty({ default: 'School Name' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ default: true })
  @IsBoolean()
  @IsNotEmpty()
  isActive: boolean;
}
