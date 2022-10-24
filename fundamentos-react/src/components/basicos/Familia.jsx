import React, { cloneElement } from 'react';

export default props => {

  {/* Com o map é adicionado a todos os filhos o CloneElement*/}
    // React.Children.map(props.children, (el) => {
    //   return cloneElement(el, props);
    // }) OU =>>>> */}
  return (
    <div>
        {props.children.map((child, i) => {
          return cloneElement(child, {...props, key: i});
        })}
    </div>
  );
};

