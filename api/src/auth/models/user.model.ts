import { ApiProperty } from '@nestjs/swagger';
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty({
    example: 'roothazard',
    required: true
 })
  @Prop()
  username: string;

  @ApiProperty({
    example: 'bubuebul',
    required: true
 })
  @Prop()
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
