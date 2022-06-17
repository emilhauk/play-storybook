import Test from './test.js';

export default {
  title: 'Headers',
};

const Template = (args) => Test(args.name);

export const Greeting = Template.bind({});
Greeting.args = {
  name: 'Emil',
};
