import React from 'react'


class Callback extends React.Component {

    componentDidMount(){
        this.props.auth.handleAuth()
    }

    render(){
        return (
            <div>
                Loading...
            </div>
        )
    }
}

export default Callback
