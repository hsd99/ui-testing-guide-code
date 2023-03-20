import React from "react";
import PropTypes from "prop-types";
import { Box } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { useTasks } from "./useTasks";

const FrownIcon = (props) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M16 16s-1.5-2-4-2-4 2-4 2M9 9h.01M15 9h.01" />
  </Icon>
);

export const InboxScreen = ({ error }) => {
  const [tasks, dispatch] = useTasks();

  return <Box p={4} bg="brand.300"></Box>;
};

InboxScreen.propTypes = {
  error: PropTypes.string,
};

InboxScreen.defaultProps = {
  error: null,
};
