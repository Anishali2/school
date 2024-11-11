// src/classes/schemas/class.schema.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ClassType } from '../dto/create-class.dto';

export type ClassDocument = Class & Document;

@Schema()
export class Class {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, enum: ClassType })
  type: ClassType;

  @Prop({ required: false })
  description: string;
}

export const ClassSchema = SchemaFactory.createForClass(Class);
