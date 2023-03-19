import React from "react";
import PropTypes from "prop-types";
import {
  Checkbox,
  Flex,
  IconButton,
  Input,
  Box,
  VisuallyHidden,
} from "@chakra-ui/react";
import { BellIcon } from "@chakra-ui/icons";

export const Task = ({
  task: { id, title, state },
  onArchiveTask,
  onTogglePinTask,
  onEditTitle,
  ...props
}) => (
  <Flex   
    {...props}
  >
  </Flex>
);

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func.isRequired,
  onTogglePinTask: PropTypes.func.isRequired,
  onEditTitle: PropTypes.func.isRequired,
};
