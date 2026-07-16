import { IsNumber, IsString } from "class-validator";

export class CreateCourseDto {
    @IsString()
    name!: string

    @IsString()
    content!: string

    @IsString()
    courseCode!: string

    @IsString()
    courseTeacherName!: string

    @IsNumber()
    courseDuration!: number
}
