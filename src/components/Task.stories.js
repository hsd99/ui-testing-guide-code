import React from "react";
import { Task } from "./Task";

// https://www.figma.com/file/hoYgD8YUzvigjwDhWveBbf/TestStorybook?node-id=4-14&t=gjkACJvUMEfNYpAR-0

export default {
  component: Task,
  title: "Task",
  argTypes: {
    onArchiveTask: { action: "onArchiveTask" },
    onTogglePinTask: { action: "onTogglePinTask" },
    onEditTitle: { action: "onEditTitle" },
  },
};

const Template = (args) => <Task {...args} />;

export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Buy milk",
    state: "TASK_INBOX",
  },
};
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/hoYgD8YUzvigjwDhWveBbf/TestStorybook?node-id=4-8&t=gjkACJvUMEfNYpAR-0",
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    id: "2",
    title: "QA dropdown",
    state: "TASK_PINNED",
  },
};
Pinned.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/hoYgD8YUzvigjwDhWveBbf/TestStorybook?node-id=4-5&t=gjkACJvUMEfNYpAR-0",
  },
};

export const Archived = Template.bind({});
Archived.args = {
  task: {
    id: "3",
    title: "Write schema for account menu",
    state: "TASK_ARCHIVED",
  },
};
Archived.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/hoYgD8YUzvigjwDhWveBbf/TestStorybook?node-id=4-11&t=gjkACJvUMEfNYpAR-0",
  },
};

const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    id: "4",
    title: longTitleString,
    state: "TASK_INBOX",
  },
};
LongTitle.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/hoYgD8YUzvigjwDhWveBbf/TestStorybook?node-id=4-14&t=gjkACJvUMEfNYpAR-0",
  },
};
