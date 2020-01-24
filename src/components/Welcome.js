import React from "react";

class Welcome extends React.Component {
    render() {
      return (
        <div>
            Welcome {this.props.user}
        </div>
      );
    }
}

const withUser = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            if(this.props.user) {
                return <WrappedComponent {...this.props} />
            }
            return <div>Welcome Guest!</div>
        }
    }
}

export default withUser(Welcome);