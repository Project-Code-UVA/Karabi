// __tests__/ContactContainer.test.js
import React from 'react';
import renderer from 'react-test-renderer';
import ContactContainer from '../../components/contacts/ContactContainer';

test('it renders correctly', () => {
  const tree = renderer
    .create(<ContactContainer contact={{ name: 'John Doe', phone: '123-456-7890', email: 'john.doe@example.com' }} onSetReminder={() => console.log("Worked")} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
