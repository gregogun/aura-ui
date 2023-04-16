import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './button';

export default {
  title: 'Components/Form/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Default = () => <Button>Button</Button>;
