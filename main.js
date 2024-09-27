import lodash from 'lodash';
import chalk from 'chalk'; 
import colors from 'colors';
import { faker } from '@faker-js/faker';
import validator from 'validator';

const array = [1, 4, 2, 3, 1, 4, 5, 2, 3, 2, 1];
const uniqueNums = lodash.uniq(array);
console.log(uniqueNums);

console.log(chalk.blueBright("Hello, with chalk"));