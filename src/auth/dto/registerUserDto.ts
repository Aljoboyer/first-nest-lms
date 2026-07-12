import { UserRole } from "src/user/user.type"

export class RegisterUserDto {
    email!: string
    password!: string
    firstName!: string
    lastName!: string
    role!: UserRole
}