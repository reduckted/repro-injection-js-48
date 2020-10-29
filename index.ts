import 'reflect-metadata';
import { InjectionToken, ReflectiveInjector } from 'injection-js';

let token = new InjectionToken('foo');

let injector = ReflectiveInjector.resolveAndCreate([
    {
        provide: token,
        useFactory: () => ({ name: 'bar' }),
    },
]);

console.log(injector.get(token));
