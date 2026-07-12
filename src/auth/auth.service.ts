import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterUserDto } from './dto/registerUserDto';
import { HashService } from './hash/hash.service';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService, private readonly hashService: HashService) { }

    async registerUser(registerUserDto: RegisterUserDto) {
        const hashedPassword = await this.hashService.hashPassword(registerUserDto.password);
        registerUserDto.password = hashedPassword;

       this.userService.createUser(registerUserDto);
    }
}
