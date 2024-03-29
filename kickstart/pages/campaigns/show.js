import React, { Component } from 'react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import { Card, Grid } from 'semantic-ui-react';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';
import { Button } from 'semantic-ui-react';

class CampaignShow extends Component {

    static async getInitialProps(props) {
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        //   console.log(summary);
        return {
            address: props.query.address,
            minimumContribution: summary[0],
            balance: summary[1],
            requestsCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]
        };
    }

    renderCards() {
        const {
            minimumContribution,
            balance,
            requestsCount,
            approversCount,
            manager
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of manager',
                description: 'Manager created this campaign and can create requests to withdraw money',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute this much wei to become an approver'
            },
            {
                header: requestsCount,
                meta: 'Number of requests',
                description: 'A request tries to withdraw money from Contract if it has required no of approvers'
            },
            {
                header: approversCount,
                meta: 'Number of approvers',
                description: 'No of people who have already donated to this campaign'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign balance',
                description: 'The balance has how much money this campaign has left to spend'
            }
        ];

        return <Card.Group items={items} />
    }


    render() {
        return (
            <Layout>
                <h3>Campaign Show </h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>

                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                        <Link route={`/campaigns/${this.props.address}/requests`}>
                            <a>
                                <Button primary>View Requests</Button>
                            </a>
                        </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }
}

export default CampaignShow;