import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { RegisterUserDto } from './dto/registerUserDto';
import { HashService } from './hash/hash.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UserService, 
        private readonly hashService: HashService,
        private readonly jwtService: JwtService

    ) { }

    async registerUser(registerUserDto: RegisterUserDto) {
        const hashedPassword = await this.hashService.hashPassword(registerUserDto.password);
        registerUserDto.password = hashedPassword;

        const createdData = await this.userService.createUser(registerUserDto);

        const payload = { email: createdData.email, role: createdData.role, id:  createdData._id };

        const token = await this.jwtService.signAsync(payload);
        
        return  {
            message: 'User created successfully',
            user: createdData,
            token: token,
            status: 201 
        }
    }
}
