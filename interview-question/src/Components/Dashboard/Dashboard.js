import React, { Component } from 'react'
import axios from "axios";
import CardContainer from './CardContainer';

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
        try {
            setInterval(async () => {
                this.fetchAPI();
            }, 15000);
            } catch (e) {
            console.log(e);
        }
        
        
    }

    fetchAPI() {
        axios
            .get("https://api.factoryfour.com/accounts/health/status")
            .then((res) => this.setState({ accounts: res.data }))
            .catch((error) => {this.setState({ accounts: {success: false, message:'error'}})});
        axios
            .get("https://api.factoryfour.com/assets/health/status")
            .then(res => this.setState({ assets: res.data}))
            .catch((error) => {this.setState({ assets: {success: false, message:'error'}})});
        axios
            .get("https://api.factoryfour.com/customers/health/status")
            .then((res) => this.setState({ customers: res.data }))
            .catch((error) => {this.setState({ customers: {success: false, message:'error'}})});
        axios
            .get("https://api.factoryfour.com/datapoints/health/status")
            .then(res => this.setState({ datapoints: res.data}))
            .catch((error) => {this.setState({ datapoints: {success: false, message:'error'}})});
        axios
            .get("https://api.factoryfour.com/devices/health/status")
            .then((res) => this.setState({ devices: res.data }))
            .catch((error) => {this.setState({ devices: {success: false, message:'error'}})});
        axios
            .get("https://api.factoryfour.com/documents/health/status")
            .then((res) => this.setState({ documents: res.data }))
            .catch((error) => {this.setState({ documents: {success: false, message:'error'}})});
        axios
            .get("https://api.factoryfour.com/forms/health/status")
            .then((res) => this.setState({ forms: res.data }))
            .catch((error) => {this.setState({ forms: {success: false, message:'error'}})});
        axios
            .get("https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/invites/health/status")
            .then((res) => this.setState({ invites: res.data }))
            .catch((error) => {this.setState({ invites: {success: false, message:'error',error: error.response}})});
        axios
            .get("https://api.factoryfour.com/media/health/status")
            .then((res) => this.setState({ media: res.data }))
            .catch((error) => {this.setState({ media: {success: false, message:'error'}})});
        axios
            .get("https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/messages/health/status")
            .then((res) => this.setState({ messages: res.data }))
            .catch((error) => {this.setState({ messages: {success: false, message:'error',error: error.response}})});
        axios
            .get("https://api.factoryfour.com/namespaces/health/status")
            .then((res) => this.setState({ namespaces: res.data }))
            .catch((error) => {this.setState({ assets: {success: false, message:'error'}})});
        axios
            .get("https://api.factoryfour.com/orders/health/status")
            .then((res) => this.setState({ orders: res.data }))
            .catch((error) => {this.setState({ orders: {success: false, message:'error'}})});
        axios
            .get("https://api.factoryfour.com/patients/health/status")
            .then((res) => this.setState({ patients: res.data }))
            .catch((error) => {this.setState({ patients: {success: false, message:'error'}})});
        axios
            .get("https://api.factoryfour.com/relationships/health/status")
            .then((res) => this.setState({ relationships: res.data }))
            .catch((error) => {this.setState({ relationships: {success: false, message:'error'}})});
        axios
            .get("https://api.factoryfour.com/rules/health/status")
            .then((res) => this.setState({ rules: res.data }))
            .catch((error) => {this.setState({ rules: {success: false, message:'error'}})});
        axios
            .get("https://api.factoryfour.com/templates/health/status")
            .then((res) => this.setState({ templates: res.data }))
            .catch((error) => {this.setState({ templates: {success: false, message:'error'}})});
        axios
            .get("https://cors-anywhere.herokuapp.com/https://api.factoryfour.com/users/health/status")
            .then((res) => this.setState({ users: res.data }))
            .catch((error) => {this.setState({ users: {success: false, message:'error',error: error.response}})});
        axios
            .get("https://api.factoryfour.com/workflows/health/status")
            .then((res) => this.setState({ workflows: res.data }))
            .catch((error) => {this.setState({ workflows: {success: false, message:'error'}})});

    }

    render() {
        return (
            <CardContainer data={this.state}></CardContainer>
        )
    }
}
