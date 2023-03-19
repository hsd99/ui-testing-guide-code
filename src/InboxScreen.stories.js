import React from "react";
import { rest } from "msw";
import { InboxScreen } from "./InboxScreen";
import { Default as TaskListDefault } from "./components/TaskList.stories";

import { within, userEvent, findByRole } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

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
  design: {
    type: "figma",
    url: "https://www.figma.com/file/hoYgD8YUzvigjwDhWveBbf/TestStorybook?node-id=4-26&t=nBnsgiWYSUNwwE7P-0",
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
  design: {
    type: "figma",
    url: "https://www.figma.com/file/hoYgD8YUzvigjwDhWveBbf/TestStorybook?node-id=4-29&t=gjkACJvUMEfNYpAR-0",
  },
};

export const PinTask = Template.bind({});
PinTask.parameters = Default.parameters;
PinTask.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  const getTask = (name) => canvas.findByRole("listitem", { name });

  // Find the task to pin
  const itemToPin = await getTask("Export logo");

  // Find the pin button
  const pinButton = await findByRole(itemToPin, "button", { name: "pin" });

  // Click the pin button
  await userEvent.click(pinButton);

  // Check that the pin button is now a unpin button
  const unpinButton = within(itemToPin).getByRole("button", { name: "unpin" });
  await expect(unpinButton).toBeInTheDocument();
};
