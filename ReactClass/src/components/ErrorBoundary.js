import React, { Component } from "react";
//Error Boundary is Possible only with class based components
class ErrorBoundary extends Component{
    constructor(){
        super();
        this.state = { hasError: false};
    }

    componentDidCatch(error){
        this.setState({ hasError: true });
    }

    render(){
        if(this.state.hasError){
            return <p>Something went Wrong !!</p>
        }
        return this.props.children;
    }
}

export default ErrorBoundary;