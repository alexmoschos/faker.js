var Faker = require('../lib');
var faker = new Faker({ locale: 'el', localeFallback: 'el' });
faker.locales['el'] = require('../lib/locales/el');
faker.locales['el'] = require('../lib/locales/el');
module['exports'] = faker;
