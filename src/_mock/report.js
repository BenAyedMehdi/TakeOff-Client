import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  name: faker.company.catchPhrase(),
  company: sample([
    'Daily report',
    'Weekly report',
    'Monthly report',
    'Financial report',
    'Progress report',
  ]),
  isVerified: faker.datatype.boolean(),
  status: sample(['yes', 'no']),
  role: faker.datatype.uuid(),
}));

export default users;
