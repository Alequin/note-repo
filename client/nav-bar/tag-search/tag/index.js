import React from "react";
import Tag from "./tag"

export default ({name, onClick, highlighted, color}) => {
  return (
    <Tag
      value={name}
      onClick={onClick}
      highlighted={highlighted}
      color={color}
      >
      {name}
    </Tag>
  )
}
