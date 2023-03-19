import React from "react";
import PropTypes from "prop-types";
import { VStack, Skeleton, Flex, Spacer } from "@chakra-ui/react";
import { CheckIcon, StarIcon } from "@chakra-ui/icons";
import { Task } from "./Task";
import { EmptyState } from "./EmptyState";

const LoadingTask = () => <Flex></Flex>;

export function TaskList({
  loading,
  tasks,
  onTogglePinTask,
  onArchiveTask,
  onEditTitle,
}) {
  return (
    <VStack as="ul" align="stretch" spacing={0} aria-label="tasks"></VStack>
  );
}

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onTogglePinTask: PropTypes.func.isRequired,
  onArchiveTask: PropTypes.func.isRequired,
  onEditTitle: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  loading: false,
};
