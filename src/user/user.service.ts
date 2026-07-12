import {  Injectable } from '@nestjs/common';
import { RegisterUserDto } from 'src/auth/dto/registerUserDto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './schemas/user.schema';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name)
        private readonly userModel: Model<User>,
    ) {}

    async createUser(registerUserDto: RegisterUserDto) {  

        const createdUser = new this.userModel(registerUserDto);
        await createdUser.save();
        return {
            message: 'User created successfully',
            user: createdUser,
            status: 201 
        }
    }
}
