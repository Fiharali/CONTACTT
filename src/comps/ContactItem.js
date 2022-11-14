import React, { Component } from 'react';


class ContactItem extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <th>{this.props.contact.id}</th>
                    <td>{this.props.contact.name}</td>
                    <td>{this.props.contact.gmail}</td>
                    <td style={{cursor:'pointer',color:'red'}}><i className="fa fa-trash" aria-hidden="true"></i></td>
                </tr>
            </tbody>
        );
    }
}

export default ContactItem;
