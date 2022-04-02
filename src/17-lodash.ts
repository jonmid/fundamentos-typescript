// var _ = require('lodash');
import _ from 'lodash';

const data = [
  {
    username: 'moe',
    role: 'admin',
  },
  {
    username: 'valentina',
    role: 'seller',
  },
  {
    username: 'zulema',
    role: 'admin',
  },
  {
    username: 'santiago',
    role: 'customer',
  },
];

const rta = _.groupBy(data, (item) => item.role);

console.log(rta);
