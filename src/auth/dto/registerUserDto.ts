import { IsEmail, IsEnum, IsString } from "class-validator"
import { UserRole } from "src/user/user.type"

export class RegisterUserDto {
    @IsEmail()
    email!: string
    @IsString()
    password!: string
    firstName!: string
    lastName!: string
    @IsEnum(UserRole)
    role!: UserRole
}