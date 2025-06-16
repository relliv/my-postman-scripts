const moment = require('moment');

pm.environment.set('today', moment().format(("YYYY-MM-DD")));
pm.environment.set('tomorrow', moment().add(1, 'days').format(("YYYY-MM-DD")));
pm.environment.set('yesterday', moment().subtract(1, 'days').format(("YYYY-MM-DD")));
pm.environment.set('nextWeek', moment().add(1, 'weeks').format(("YYYY-MM-DD")));
pm.environment.set('nextMonth', moment().add(1, 'months').format(("YYYY-MM-DD")));
pm.environment.set('nextYear', moment().add(1, 'years').format(("YYYY-MM-DD")));
