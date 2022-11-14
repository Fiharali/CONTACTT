import React, { Component } from 'react';
import AddContact from './AddContact';
import ContactItem from './ContactItem';


class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      contact:[
        {
          "name":"ali",
          "id":20,
          "gmail":"ali&"
      },
      {
          "name":"lisg",
          "id":45,
          "gmail":"alssi&"
      },
      {
          "name":"JSN",
          "id":25,
          "gmail":"hcj&"
      }
      ]
    }
  }
  addContact = (contact) => {
    let newContact = this.state.contact;
    newContact.push(contact);
    this.setState({contact: newContact})
  }
    render() {
        return (
            <div className="container">
            <AddContact addContact={this.addContact}/>
            <div className="row my-5">
              <div className="col-md-5 mx-auto">
                <table className="table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>NAME</th>
                      <th>GMAIL</th>
                      <th>action</th>
                    </tr>
                  </thead>
                    {this.state.contact.map((contact ,id) => (
                        <ContactItem key={id} contact={contact}/>
                    ))}
                </table>
              </div>
            </div>
          </div>
        );
    }
}


export default Contact;
