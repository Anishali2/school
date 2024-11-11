import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

export enum RolesEnum {
  'ADMIN' = 'ADMIN',
  'TEACHER' = 'TEACHER',
  'STUDENT' = 'STUDENT',
  'ACCOUNTANT' = 'ACCOUNTANT',
  'PRINCIPLE' = 'PRINCIPLE',
  'STORE_MANAGER' = 'STORE_MANAGER',
  'MANAGEMENT_STAFF' = 'MANAGEMENT_STAFF',
}

export enum GenderEnum {
  'MALE' = 'MALE',
  'FEMALE' = 'FEMALE',
}
@Schema()
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: String, enum: RolesEnum, default: 'ADMIN' })
  role: RolesEnum;

  // TODO: replace it with the school ref
  @Prop({ required: true })
  school: string;

  @Prop({ default: true })
  isActive: string;

  @Prop({
    type: {
      mobileNumber: String,
      joinDate: Date,
      salary: Number,
      gender: {
        type: String,
        enum: GenderEnum,
      },
      fatherHusbandName: String,
      experience: String,
      nationalId: String,
      education: String,
      bloodGroup: String,
      dob: Date,
    },
    default: {
      mobileNumber: '',
      joinDate: new Date(),
      salary: 0,
      gender: 'MALE',
      fatherHusbandName: '',
      experience: '',
      nationalId: '',
      education: '',
      bloodGroup: '',
      dob: new Date(),
    },
  })
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

export const UserSchema = SchemaFactory.createForClass(User);
