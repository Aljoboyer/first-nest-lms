import { Body, ConflictException, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/registerUserDto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async register(@Body() registerUserDto: RegisterUserDto) {
        try {   
            const result = await this.authService.registerUser(registerUserDto);
            return result;
        }catch (error) {   
            throw new ConflictException('User with this email already exists');
         }
    }
}
