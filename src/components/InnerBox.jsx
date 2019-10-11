import React, { type Node } from "react";
import Box from "@material-ui/core/Box";

const InnerBox = ({ children, ...props }: { children: Node }) => (
  <Box
    display="flex"
    flexGrow={1}
    flexDirection="column"
    justifyContent="space-between"
    {...props}
  >
    {children}
  </Box>
);

export default InnerBox;
