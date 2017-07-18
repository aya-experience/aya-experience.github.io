import React, {Component} from 'react';

export const withRefs = numberOfRef => {
  const refsFunction = {};

  return WrappedComponent => {
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {};
      }

      componentDidMount() {
        const newState = {};
        for (let i = 0; i < numberOfRef; i++) {
          const key = `ref${i}`;
          const keyFunc = `refFunc${i}`;
          newState[key] = this[keyFunc];
        }

        this.setState(newState);
      }

      render() {
        if (Object.keys(refsFunction).length !== numberOfRef) {
          for (let i = 0; i < numberOfRef; i++) {
            const key = `refFunc${i}`;
            refsFunction[key] = cmp => {
              this[key] = cmp;
            };
          }
        }

        return (
          <WrappedComponent
            {...this.props}
            {...refsFunction}
            {...this.state}
            />
        );
      }
    };
  };
};
