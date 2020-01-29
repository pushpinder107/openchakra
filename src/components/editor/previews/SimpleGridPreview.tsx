import React from "react";
import { SimpleGrid } from "@chakra-ui/core";
import { useInteractive } from "../../../hooks/useInteractive";

const SimpleGridPreview: React.FC<{ component: IComponent }> = ({
  component
}) => {
  const { props, ref } = useInteractive(component);
  return (
    <SimpleGrid ref={ref} {...props}>
      {component.props.children || "Lorem Ipsum"}
    </SimpleGrid>
  );
};

export default SimpleGridPreview;