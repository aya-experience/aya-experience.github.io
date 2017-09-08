import React, {Component} from 'react';

export const withRefs = numberOfRef => {
  const refsFunction = {};
  const refs = {};

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
          newState[key] = refs[keyFunc];
        }

        setTimeout(() => this.setState(newState), 1000);
      }

      render() {
        if (Object.keys(refsFunction).length !== numberOfRef) {
          for (let i = 0; i < numberOfRef; i++) {
            const key = `refFunc${i}`;
            refsFunction[key] = cmp => {
              refs[key] = cmp;
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
