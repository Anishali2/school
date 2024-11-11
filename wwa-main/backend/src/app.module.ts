import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { SchoolModule } from './school/school.module';
import { StudentsModule } from './students/students.module';
import { ClassesModule } from './classes/class.module';
import { CookiesModule } from './cookies/cookies.module';
import { FeesModule } from './fees/fees.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      // 'mongodb+srv://admin:admin@cluster0.9gdajg2.mongodb.net/school-management?retryWrites=true&w=majority&appName=Cluster0',
      'mongodb+srv://ansihali1221:YTwR%40LgH%2AL7c7%2Ac@school-cluster.2jhlt.mongodb.net/school?retryWrites=true&w=majority&appName=School-Cluster',
    ),
    AuthModule,
    ClassesModule,
    UserModule,
    StudentsModule,
    SchoolModule,
    CookiesModule,
    FeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
