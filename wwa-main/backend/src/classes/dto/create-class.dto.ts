// src/classes/dto/create-class.dto.ts

import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';

export enum ClassType {
  CO_EDUCATION = 'Co-Education',
  BOYS = 'Boys',
  GIRLS = 'Girls',
}
// src/classes/dto/create-class.dto.ts

// import { IsString, IsNotEmpty, IsOptional, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
// import { ClassType } from '../enums/class-type.enum';

export class CreateClassDto {
  @ApiProperty({ example: 'Math', description: 'The name of the class' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    enum: ClassType,
    description: 'The type of class',
    example: ClassType.CO_EDUCATION,
  })
  @IsEnum(ClassType)
  @IsNotEmpty()
  type: ClassType;

  @ApiProperty({
    description: 'A short description of the class',
    required: false,
  })
  @IsOptional()
  @IsString()
  description?: string;
}
