import { subDays, format } from 'date-fns';

// 0 = enero, 1 = febrero, ... 11 = diciembre
const date = new Date(1998, 1, 28);
const rta = subDays(date, 30);
const str = format(rta, 'yyyy/MM/dd');

console.log(str);
