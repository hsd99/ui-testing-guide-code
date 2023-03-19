import React from "react";
import { TaskList } from "./TaskList";
import Task from "./Task.stories";

export default {
  component: TaskList,
  title: "TaskList",
  argTypes: {
    ...Task.argTypes,
  },
};
const Template = (args) => <TaskList {...args} />;

export const Default = Template.bind({});
Default.args = {
  tasks: [
    { id: "1", state: "TASK_INBOX", title: "Build a date picker" },
    { id: "2", state: "TASK_INBOX", title: "QA dropdown" },
    {
      id: "3",
      state: "TASK_INBOX",
      title: "Write a schema for account avatar component",
    },
    { id: "4", state: "TASK_INBOX", title: "Export logo" },
    { id: "5", state: "TASK_INBOX", title: "Fix bug in input error state" },
    { id: "6", state: "TASK_INBOX", title: "Draft monthly blog to customers" },
  ],
};
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/hoYgD8YUzvigjwDhWveBbf/TestStorybook?node-id=4-23&t=gjkACJvUMEfNYpAR-0",
  },
};

export const WithPinnedTasks = Template.bind({});
WithPinnedTasks.args = {
  tasks: [
    { id: "6", title: "Draft monthly blog to customers", state: "TASK_PINNED" },
    ...Default.args.tasks.slice(0, 5),
  ],
};

export const Loading = Template.bind({});
Loading.args = {
  tasks: [],
  loading: true,
};
Loading.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/hoYgD8YUzvigjwDhWveBbf/TestStorybook?node-id=4-20&t=gjkACJvUMEfNYpAR-0",
  },
};

export const Empty = Template.bind({});
Empty.args = {
  ...Loading.args,
  loading: false,
};
Empty.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/hoYgD8YUzvigjwDhWveBbf/TestStorybook?node-id=4-17&t=gjkACJvUMEfNYpAR-0",
  },
};
