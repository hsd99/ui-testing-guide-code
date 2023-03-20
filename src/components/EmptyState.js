import React from "react";
import PropTypes from "prop-types";
import { Flex } from "@chakra-ui/react";

export const EmptyState = ({ Icon, title, subtitle, ...props }) => (
  <Flex
    bg="white"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    {...props}
  ></Flex>
);

EmptyState.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
