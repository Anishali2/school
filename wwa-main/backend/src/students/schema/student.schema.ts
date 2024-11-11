// src/students/schemas/student.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StudentDocument = Student & Document;
export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}
class Parents {
  father?: string;
  mother?: string;
  contact: string;
  address: string;
}

@Schema()
export class Student {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  dob: string;

  @Prop({ required: true })
  identity: string;

  @Prop({ required: false, enum: Gender, default: Gender.MALE })
  gender: Gender;

  @Prop({ type: Object, required: false })
  parents: Parents;

  @Prop({ required: true, ref: 'Class' })
  classId: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
