import React from "react";
import { rest } from "msw";
import { InboxScreen } from "./InboxScreen";
import { Default as TaskListDefault } from "./components/TaskList.stories";

export default {
  component: InboxScreen,
  title: "InboxScreen",
};

const Template = (args) => <InboxScreen {...args} />;

export const Default = Template.bind({});
Default.parameters = {
  msw: {
    handlers: [
      rest.get("/tasks", (req, res, ctx) => {
        return res(ctx.json(TaskListDefault.args));
      }),
    ],
  },
};
Default.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/hoYgD8YUzvigjwDhWveBbf/TestStorybook?node-id=4-17&t=gjkACJvUMEfNYpAR-0",
  },
};

export const Error = Template.bind({});
Error.args = {
  error: "Something",
};
Error.parameters = {
  msw: {
    handlers: [
      rest.get("/tasks", (req, res, ctx) => {
        return res(ctx.json([]));
      }),
    ],
  },
};
Error.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/hoYgD8YUzvigjwDhWveBbf/TestStorybook?node-id=4-29&t=gjkACJvUMEfNYpAR-0",
  },
};
