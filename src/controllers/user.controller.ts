import {get} from '@loopback/rest';
import {Request, RestBindings} from '@loopback/rest';
import {inject} from '@loopback/core';

export class HelloController {
  @get('/hello')
  hello(@inject(RestBindings.Http.REQUEST) request: Request): string {
    return 'Hello world!';
  }
}
