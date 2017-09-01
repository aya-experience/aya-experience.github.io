import React, {Component} from 'react';

export const delayComponentDisplaying = (time, className) => {
  return WrappedComponent => {
    return class extends Component {
      constructor(props) {
        super(props);
        this.state = {displayComponent: false};
      }

      componentDidMount() {
        setTimeout(() => {
          this.setState({
            displayComponent: true
          });
        }, time);
      }

      render() {
        if (!this.state.displayComponent) {
          return <div className={className}/>;
        }

        return (
          <WrappedComponent
            {...this.props}
            {...this.state}
            />
        );
      }
    };
  };
};
