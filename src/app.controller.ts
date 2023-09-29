import { Controller, Get, Post, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index')
  root() {
    return { message: { id: 1, name: 'abc' } };
    // return this.appService.getHello();
  }

  @Post('/login1')
  login1(@Res() res: Response): void {
    console.log(1111111111);
    res.redirect('/');
  }

  @Post('/login2')
  login2(@Res() res: Response): void {
    console.log(22222222222);
    res.redirect('/');
  }
}
