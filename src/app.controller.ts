import { Controller, Get, Post, Render, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  root(@Res() res: Response) {
    return res.render(this.appService.getViewName(), {
      fleet: [
        { id: 1, name: 'Ship 1' },
        { id: 2, name: 'Ship 2' },
        { id: 3, name: 'Ship 3' },
        { id: 4, name: 'Ship 4' },
        { id: 5, name: 'Ship 5' },
      ],
    });
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
