
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserRole } from '../user.type';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
    @Prop({required: true, unique: true})
    email!: string;

    @Prop({required: true})
    password!: string;

    @Prop({required: true})
    firstName!: string;

    @Prop()
    lastName?: string;

    @Prop({required: true,  enum: UserRole, default: UserRole.STUDENT})
    role!: UserRole;
}

export const UserSchema = SchemaFactory.createForClass(User);
