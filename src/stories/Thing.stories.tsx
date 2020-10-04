import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Thing, Props } from '../Thing';

const meta: Meta = {
  title: 'Thing Component',
  component: Thing,
};

export default meta;

const Template: Story<Props> = args => <Thing {...args} />;

export const Default = Template.bind({});

Default.args = {};