import { flipACoin } from './modules/coin.mjs'
import minimist from 'minimist';

const args = minimist(process.argv.slice(1));
const call = args['call'];

if (!call) {
  console.error('Error: no input.\nUsage: node guess-flip --call=[heads|tails]\n');
} else if (call != 'heads' && call != 'tails') {
  console.error('Usage: node guess-flip --call=[heads|tails]\n');
} else {
  console.log(flipACoin(call))
}
