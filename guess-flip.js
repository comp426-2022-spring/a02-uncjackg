import { flipACoin } from './modules/coin.mjs'
import minimist from 'minimist';

const args = minimist(process.argv.slice(1));
const call = args['call'];

if (!call || (call != 'heads' && call != 'tails')) {
  console.log('Error: no input \nUsage: node guess-flip --call=[heads|tails]');
} else {
  console.log(flipACoin(call))
}
