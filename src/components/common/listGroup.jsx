import React, { Component } from "react";
const ListGroup = (props) => {
  const { items, textProperty, valueProperty, selectedItem, onItemselect } =
    props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          onClick={() => onItemselect(item)}
          key={item[valueProperty]}
          className={
            item === selectedItem
              ? "list-group-item active"
              : "list-group-item "
          }
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
