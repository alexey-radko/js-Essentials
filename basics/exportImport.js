let privatVar = 42;
export const color = 'red';

export function compute(a, b) {
  console.log(a + b);
}

// other way to export is

export default {
  log() {
    console.log(privatVar);
  },
};

// export class

//  import file for normal export looks so
import { color, compute } from './module';

console.log(color);
compute(a, b);

//  import file for default export looks so
import Logger, { color, compute } from './module';
Logger.log();

// also a method to import
import * as Module from './module';

Module.color;
Module.compute();
Module.default.log();
