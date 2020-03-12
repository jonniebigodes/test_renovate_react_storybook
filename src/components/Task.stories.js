
import React from 'react';
import { action } from '@storybook/addon-actions';

import Task from './Task';

export default {
  component: Task,
  title: 'Task',
  parameters: {
    assets: [
      "./image_1.jpg",
      "./image_2.jpg",
      "./image_3.jpg"
    ]
  },
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: '1',
  title: 'Test Task',
  state: 'TASK_INBOX',
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
  onPinTask: action('onPinTask'),
  onArchiveTask: action('onArchiveTask'),
};

export const Default = () => {
  return <Task task={{ ...taskData }} {...actionsData} />;
};

export const Pinned = () => <Task task={{ ...taskData, state: 'TASK_PINNED' }} {...actionsData} />;

export const Archived = () => (
  <Task task={{ ...taskData, state: 'TASK_ARCHIVED' }} {...actionsData} />
);