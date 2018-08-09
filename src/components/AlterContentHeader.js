import React, { Component } from 'react';
import { Card, Icon } from '@blueprintjs/core'
import { typeToText } from '../utils/functions'

class AlterContentHeader extends Component {
    state = {
        component: null
    }

    componentDidMount = () => {
        if(this.props.transaction){
            this.setState({ component: "transaction" })
        }
    }

    render() {
        return (
            <div>
                { this.state.component === 'transaction' ? (
                    <Card className='contentHeader_transaction'>
                        <h4 className={this.props.transaction.type}>{typeToText(this.props.transaction.type)}</h4>
                        <div className="contentHeader_balance">
                            <span className={this.props.transaction.type}>
                                {this.props.transaction.balance} Btc. 
                                <Icon 
                                    className="contentHeader_balance_icon"
                                    // DEPENDING ON TYPE ASIGN PROPER ICON
                                    icon={ this.props.transaction.type === 'incoming' ? 'arrow-left' : 'arrow-right'}
                                    iconSize='11'
                                />
                            </span>
                        </div>
                    </Card>
                ):(
                    <Card>
                        <h4>{this.props.title}</h4>
                    </Card>
                )}
            </div>
        );
    }
}

export default AlterContentHeader;