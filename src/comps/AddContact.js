import React, { Component } from 'react';

class AddContact extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name:"",
            id:"",
            gmail:"",
        }

}
    ssubmitForm = (event) =>{
        event.preventDefault();
        const contact = {
        name: this.state.name,
        id: this.state.id,
        gmail: this.state.gmail, 
        };
        this.props.addContact(contact);

    }
    render() {
      
        return (

            <div className="row my-2">
                <div className="col-md-5 mx-auto card bg-primary">
                    <form  onSubmit={(event) => this.ssubmitForm(event)} method='post' className="form-group ">
                        <label htmlFor="id" />your id
                        <input type="text" name="id" className="form-control"
                         autoComplete='off'
                        onChange={(event) => this.setState({id : event.target.value})}
                        style={{ color:'black',backgroundColor:'rgb(189, 177, 226)' }} />
                        <label htmlFor="name" /> name
                        <input type="text" name="name" className="form-control"
                         autoComplete='off' 
                        onChange={(event) => this.setState({name : event.target.value})}
                        style={{ color:'black',backgroundColor:'rgb(189, 177, 226)' }}/>
                        <label htmlFor="gmail" />gmail
                        <input type="text" name="gmail" className="form-control"
                         autoComplete='off'
                        onChange={(event) => this.setState({gmail : event.target.value})}
                        style={{ color:'black',backgroundColor:'rgb(189, 177, 226)' }} />
                        <label htmlFor="" />
                        <input type="submit"  className="form-control" 
                         style={{ backgroundColor:'black',color:'rgb(189, 177, 226)' }}/>
                    </form>
                </div>
            </div>


        );
    }
}

export default AddContact;
