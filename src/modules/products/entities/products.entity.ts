import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
@Schema()
export class Product extends Document {
  @Prop()
  title: string;

  @Prop()
  brand: string;

  @Prop()
  srcImage: string;

  @Prop()
  characteristics: string;

  @Prop()
  description: string;

  @Prop({ default: true })
  active: boolean;

  @Prop({ type: Number })
  price: number;

  @Prop({ default: false })
  offerDiscount: boolean;

  @Prop({ default: false })
  shippingFree: boolean;

  @Prop()
  stock: number;

  @Prop({ type: Date, default: Date.now })
  creationDate: Date;

  @Prop({ type: Date, default: Date.now })
  updateDate: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
