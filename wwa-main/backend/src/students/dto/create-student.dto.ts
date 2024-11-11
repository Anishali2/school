// src/students/dto/create-student.dto.ts

import {
  IsString,
  IsNumber,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class ParentsDto {
  @IsString()
  @IsNotEmpty()
  fatherName: string;

  @IsString()
  @IsNotEmpty()
  motherName: string;

  @IsString()
  @IsNotEmpty()
  contact: string;

  @IsString()
  @IsNotEmpty()
  address: string;
}

export class CreateStudentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  dob: string;

  @IsString()
  @IsNotEmpty()
  identity: string;

  @IsString()
  @IsNotEmpty()
  gender: string;

  @ValidateNested()
  @Type(() => ParentsDto)
  parents: ParentsDto;

  @IsString()
  @IsNotEmpty()
  classId: string;
}
