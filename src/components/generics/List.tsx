import { ReactNode } from 'react';

type ListProps<T> = {
    items: T[];
    onClick: (value: T) => void;
};

export const List = <T extends { id: number }>({ items, onClick }: ListProps<T>) => {
    return (
        <div>
            <h2>List of Items</h2>
            {items.map((item, index) => (
                <div key={item.id} onClick={() => onClick(item)}>
                    {item.id}
                </div>
            ))}
        </div>
    );
};

    ############################  Also this way of React.FC##########################################
 import React from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

const List: React.FC<ListProps<any>> = ({ items, onClick }) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, i) => {
        return (
          <div style={{ cursor: 'pointer' }} key={i} onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default List;

