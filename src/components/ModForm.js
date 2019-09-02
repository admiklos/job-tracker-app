import React from 'react';


class ModForm extends React.Component {
	constructor(props) {
		super(props);
		let posting = this.props.routeInfo.location.state.post;
		this.state = {
			id           : posting.id,
			filter       : posting.filter,
			postType     : posting.postType,
			btn1Type     : posting.btn1Type,
			btn2Type     : posting.btn2Type,
			company      : posting.compName,
			street       : posting.compSA,
			cityState    : posting.compCS,
			zipCode      : posting.compZip,
			phone        : posting.cNumber,
			contactName  : posting.cName,
			interviewDate: posting.invwDate,
			phoneCallDate: posting.pcDate,
			position     : posting.posTitle,
			website      : posting.posUrl,
			salary       : posting.salary,
			deadline     : posting.posDead,
			date         : posting.date
		}
	}

	onSubmit = (event) => {
		event.preventDefault();
		let thisPost = this.state;
		this.props.editPost(thisPost);
		this.setState({
			company: "",
			street: "",
			cityState: "",
			zipCode: "",
			phone: "",
			contactName: "",
			interviewDate: "",
			phoneCallDate: "",
			position: "",
			website: "",
			salary: "",
			deadline: ""
		});
		this.props.routeInfo.history.push("/");
	}

	onChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

    // date is expected in the following format: 'Thu, 01 Jan 1970 00:00:00'
    render() {
    	return (
    		<div className="Form">
	    		<form onSubmit={this.onSubmit} action="/">
	    		<h3>Update Post: </h3>
		    		<label>Company:</label><div><input type="text" name="company" placeholder="Company Name" value={this.state.company} onChange={this.onChange} required/></div>
		    		<label>Address:</label><div><input type="text" name="street" placeholder="Street Address" value={this.state.street} onChange={this.onChange} /></div>
		    		<label>City & State:</label><div><input type="text" name="cityState" placeholder="City,State" value={this.state.cityState} onChange={this.onChange} /></div>
		    		<label>Zipcode:</label><div><input type="number" name="zipCode" placeholder="Zip Code" value={this.state.zipCode} onChange={this.onChange} /></div>
		    		<label>Contact Name:</label><div><input type="text" name="contactName" placeholder="Contact Name" value={this.state.contactName} onChange={this.onChange} /></div>
		    		<label>Contact Number:</label><div><input type="text" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.onChange} required/></div>
		    		<label>Interview Date:</label><div><input type="datetime-local" name="interviewDate" placeholder="Interview Date" value={this.state.interviewDate} onChange={this.onChange} /></div>
		    		<label>Called Date:</label><div><input type="date" name="phoneCallDate" placeholder="Phone Call Date" value={this.state.phoneCallDate} onChange={this.onChange} /></div>
		    		<label>Position:</label><div><input type="text" name="position" placeholder="Desired Position" value={this.state.position} onChange={this.onChange} required/></div>
		    		<label>Website:</label><div><input type="text" name="website" placeholder="Website URL" value={this.state.website} onChange={this.onChange}/></div>
		    		<label>Salary:</label><div><input type="text" name="salary" placeholder="Salary" value={this.state.salary} onChange={this.onChange} /></div>
		    		<label>Job Posting Deadline:</label><div><input type="date" name="deadline" placeholder="Deadline" value={this.state.deadline} onChange={this.onChange} /></div>
		    		<input type="submit" className="submit-btn" value="Submit"/>
	    		</form>
    		</div>
    		);
    }
}

export default ModForm;
