import { Component, OnInit } from '@angular/core';
import {
  accessorDecorator, classDecorator, factoryDecorator, logFactorialFactoryDecorator, methodDecorator, propertyDecorator
} from './decorators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@classDecorator
export class AppComponent implements OnInit {

  @propertyDecorator
  public title: string = 'decorators';

  @propertyDecorator
  public subTitle: string = 'Assignment';

  @propertyDecorator
  public factorial: number;

  @accessorDecorator
  get isSetTitles(): boolean {
    return !!(this.title && this.subTitle);
  }

  constructor() {}

  public ngOnInit() {
    this.factorial = this.getFactorial(6);
  }

  @factoryDecorator(true)
  @methodDecorator
  public getTitles(): string {
    return `${this.title} ${this.subTitle}`;
  }

  // @logFactorialDecorator
  @logFactorialFactoryDecorator
  public getFactorial(number: number): number {
    return number !== 1 ? this.getFactorial(number - 1) * number : number;
  }

}
