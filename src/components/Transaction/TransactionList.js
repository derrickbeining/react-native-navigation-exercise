import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import {Card, CardSection, TransactionItem, ButtonDefault} from '../../components';


class TransactionList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      transactions: [],
    }
  }


  componentWillMount() {

  }

  loadTransactions() {

  }

  render() {
    return (
      <Card>
        <ScrollView>
          <TransactionItem />
        </ScrollView>
        <CardSection>
          <ButtonDefault
            content="Get Transactions"
            onPress={this.loadTransaction}
          />
        </CardSection>
      </Card>
  )
}
}

export default TransactionList;
