import { coinFlips, countFlips } from './modules/coin.mjs';
import minimist from 'minimist';

const args = minimist(process.argv.slice(1));
const number = args['number'] | 1;

const flips = coinFlips(number);
console.log(flips);
console.log(countFlips(flips))
