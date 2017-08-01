import React, {Component} from 'react';

export const getComponentSize = functionName => {
  return WrappedComponent => {
    return class extends Component {
      componentDidMount() {
        this.props[functionName](this.cmpRef.getBoundingClientRect());
      }

      render() {
        return (
          <WrappedComponent
            {...this.props}
            refToSize={cmp => {
              this.cmpRef = cmp;
            }}
            />
        );
      }
    };
  };
};
