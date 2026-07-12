import { Body, ConflictException, Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterUserDto } from './dto/registerUserDto';
import { AuthGuard } from './auth.guard';
import { UserService } from 'src/user/user.service';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService,
        private readonly userService: UserService,
    ) { }

    @Post('register')
    async register(@Body() registerUserDto: RegisterUserDto) {
        try {   
            const result = await this.authService.registerUser(registerUserDto);
            return result;
        }catch (error) {   
            throw new ConflictException(error);
         }
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    async getProfile(@Request() req) {
        console.log('check ===>', req.user?.id);
        const userId = req.user?.id;
        const user = await this.userService.getUserById(userId);
        return { message: 'User Profile Fetch successfully', user: user };
    }
}
