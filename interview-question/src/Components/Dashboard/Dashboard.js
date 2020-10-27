import React, { Component } from 'react'
import axios from "axios";

export default class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            accounts: {},
            assets: {},
            customers: {},
            datapoints: {},
            devices: {},
            documents: {},
            forms: {},
            invites: {},
            media: {},
            messages: {},
            namespaces: {},
            orders: {},
            patients: {},
            relationships: {},
            rules: {},
            templates: {},
            users: {},
            workflows: {},
        };
    }
    componentDidMount() {
        this.fetchAPI()
        
    }

    fetchAPI() {
        let accountsResponses = {};
        let assetsResponses = {};
        let customerResponses = {};
        let datapointsResponses = {};
        let devicesResponses = {};
        let documentsResponses = {};
        let formsResponses = {};
        let invitesResponses = {};
        let mediaResponses = {};
        let messagesResponses = {};
        let namespacesResponses = {};
        let ordersResponses = {};
        let patientsResponses = {};
        let relationshipsResponses = {};
        let rulesResponses = {};
        let templatesResponses = {};
        let usersResponses = {};
        let workflowsResponses = {};
        axios
            .get("https://api.factoryfour.com/accounts/health/status")
            .then((res) => this.setState({ accounts: res.data }));
        axios
            .get("https://api.factoryfour.com/assets/health/status")
            .then(res => this.setState({ assets: res.data}))
        axios
            .get("https://api.factoryfour.com/customers/health/status")
            .then((res) => this.setState({ customers: res.data }));
        axios
            .get("https://api.factoryfour.com/datapoints/health/status")
            .then(res => this.setState({ datapoints: res.data}))
        axios
            .get("https://api.factoryfour.com/devices/health/status")
            .then((res) => this.setState({ devices: res.data }));
        axios
            .get("https://api.factoryfour.com/documents/health/status")
            .then((res) => this.setState({ documents: res.data }));
        axios
            .get("https://api.factoryfour.com/forms/health/status")
            .then((res) => this.setState({ forms: res.data }));
        axios
            .get("https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/invites/health/status")
            .then((res) => this.setState({ invites: res.data }));
        axios
            .get("https://api.factoryfour.com/media/health/status")
            .then((res) => this.setState({ media: res.data }));
        axios
            .get("https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/messages/health/status")
            .then((res) => this.setState({ messages: res.data }));
        axios
            .get("https://api.factoryfour.com/namespaces/health/status")
            .then((res) => this.setState({ namespaces: res.data }));
        axios
            .get("https://api.factoryfour.com/orders/health/status")
            .then((res) => this.setState({ orders: res.data }));
        axios
            .get("https://api.factoryfour.com/patients/health/status")
            .then((res) => this.setState({ patients: res.data }));
        axios
            .get("https://api.factoryfour.com/relationships/health/status")
            .then((res) => this.setState({ relationships: res.data }));
        axios
            .get("https://api.factoryfour.com/rules/health/status")
            .then((res) => this.setState({ rules: res.data }));
        axios
            .get("https://api.factoryfour.com/templates/health/status")
            .then((res) => this.setState({ templates: res.data }));
        axios
            .get("https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/users/health/status")
            .then((res) => this.setState({ users: res.data }));
        axios
            .get("https://api.factoryfour.com/workflows/health/status")
            .then((res) => this.setState({ workflows: res.data }));
    }
    render() {
        console.log(this.state)
        return (
            <div>
                {this.state.accounts.hostname}
            </div>
        )
    }
}
