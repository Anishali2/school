import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  IsEnum,
  IsBoolean,
  IsOptional,
} from 'class-validator';
import { GenderEnum, RolesEnum } from 'src/user/schema/user.schema';
export enum StatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
}
export class RegisterDto {
  @ApiProperty({ default: 'salleh' })
  @IsString()
  name: string;

  @ApiProperty({ default: 'salleh@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ default: '123456789' })
  @IsNotEmpty()
  password: string;

  @ApiProperty({ default: RolesEnum.ADMIN })
  @IsEnum(RolesEnum)
  role: string;

  
  @ApiProperty({
    description: 'The status of the user',
    enum: StatusEnum, // This will create a dropdown in Swagger
  })
  @IsEnum(StatusEnum)
  status: StatusEnum;

  @ApiProperty({ default: '' })
  @IsString()
  @IsNotEmpty()
  school: string;

  @ApiProperty({ default: true })
  @IsBoolean()
  isActive: boolean;

  @ApiProperty({
    default: {
      mobileNumber: '123456789',
      joinDate: new Date(),
      salary: 10000,
      gender: 'MALE',
      fatherHusbandName: 'test',
      experience: 'test experience',
      nationalId: '123456789',
      education: 'BS',
      bloodGroup: 'A+',
      dob: new Date(),
    },
  })
  @IsOptional()
  profile: {
    mobileNumber: string;
    joinDate: Date;
    salary: number;
    gender: GenderEnum;
    fatherHusbandName: string;
    experience: string;
    nationalId: string;
    education: string;
    bloodGroup: string;
    dob: Date;
  };
}

export class LoginDto {
  @ApiProperty({ default: 'salleh@gmail.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ default: '123456789' })
  @IsNotEmpty()
  password: string;
}

export class JWtDto {
  id: string;
  school: string;
  role: RolesEnum;
}
