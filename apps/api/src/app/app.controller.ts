import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

/*JUST PRETEND THIS FILE WAS NEVER THERE*/

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get('hello')
  // getData(): Message {
  //   return this.appService.getData();
  // }
}
