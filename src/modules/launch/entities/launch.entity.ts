import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Launch extends Document {
  @Prop()
  name: string;

  @Prop()
  srcImage: string;

  @Prop({ type: Date })
  dateLaunch: Date;

  @Prop({ type: Date, default: Date.now })
  creationDate: Date;

  @Prop({ type: Date, default: Date.now })
  updateDate: Date;
}

export const LaunchSchema = SchemaFactory.createForClass(Launch);
