import React from "react";
import Tag from "./tag"

export default ({name, onClick, highlighted}) => {
  return <Tag value={name} onClick={onClick} highlighted={highlighted}>{name}</Tag>
}
