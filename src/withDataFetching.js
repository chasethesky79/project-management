import React from "react";

export default function withDataFetching(WrappedComponent) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: [],
                loading: true,
                error: ''
            }
        }

        async componentDidMount() {
            try {
            const tickets = await fetch(this.props.dataSource)
            const ticketsJSON = await tickets.json()
            this.setState({
                data: ticketsJSON,
                loading: false
            })
            } catch(error) {
                this.setState({
                    error: error.message,
                    loading: false
                })
            }
        }

        render() {
            const { data, loading, error } = this.state;
            return (
                <WrappedComponent data={data} error={error} loading={loading} {...this.props}/>
            );
        }
    };
}