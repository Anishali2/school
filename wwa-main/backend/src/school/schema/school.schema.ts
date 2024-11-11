import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SchoolDocument = HydratedDocument<School>;

@Schema()
export class School {
  @Prop({ required: true, type: String })
  name: string;

  @Prop({ required: true, type: Boolean, default: true })
  isActive: boolean;
}

export const SchoolSchema = SchemaFactory.createForClass(School);
