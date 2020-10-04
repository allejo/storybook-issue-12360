import React, { Component, HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  /**
   * Something special
   */
  componentClass: string;

  /**
   * This can do something cool? maybe?
   */
  children?: ReactNode;
}

export class Thing extends Component<Props> {
  static readonly defaultProps = {
    componentClass: 'alert',
  };

  render() {
    const { componentClass, children } = this.props;

    return (
      <div className={componentClass}>
        {children || `the snozzberries taste like snozzberries`}
      </div>
    );
  }
}