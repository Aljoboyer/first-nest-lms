import { Module } from '@nestjs/common';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';
import { AuthModule } from 'src/auth/auth.module';
import { RolesGuard } from 'src/auth/roles.guard';

@Module({
  imports: [AuthModule],
  controllers: [CourseController],
  providers: [CourseService],
})
export class CourseModule {}
