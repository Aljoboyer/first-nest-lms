import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from 'src/auth/dto/registerUserDto';

@Injectable()
export class UserService {

    createUser(registerUserDto: RegisterUserDto) {  
        console.log('registerUserDto:', registerUserDto);
    }
}
