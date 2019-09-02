import React from 'react';

import '../styles/index.css';
import '../styles/JobTracker.css';
import edit from '../images/pencil.svg';
import lightbulbIcon from '../images/lightbulb.svg';
import phoneIcon from '../images/phone.svg';
import starIcon from '../images/checkmark.svg';

class Post extends React.Component {


  address = (addr, cityState, zip) => {
    let csString = cityState ? ", " + cityState : '';
    let zipcode = zip ? "  " + zip : '';
    if (addr || cityState || zip) {
      return <address>{addr + csString + zipcode}</address>
    } else {
      return
    }
  }


  contact = (name, num) => {
    if (name) {
      return <address>{name + " : " } <a href={"skype:" + num}>{num}</a></address>
    } else {
      return <address><a href={"skype:" + num}>{num}</a></address>
    }
  }


  interviewDate = (interViewDate, interViewTime, pStyle) => {
    if (interViewDate !== "Invalid Date") {
      return <p style={pStyle}>Interview Date: {interViewDate + " " + interViewTime}</p>
    } else {
      return
    }
  }

  phoneCallDate = (callD, pStyle) => {
    if (callD !== "Invalid Date") {
      return <p style={pStyle}>Contacted: {callD}</p>
    } else {
      return
    }
  }

  positionUrl = (url) => {
    if (url) {
      return <a href={"https://www." + url} target={"_blank"}>{url}</a>
    } else {
      return
    }
  }

  positionSalary = (salary, pStyle) => {
    if (salary) {
      return <p style={pStyle}>Salary: {salary}</p>
    } else {
      return
    }
  }

  positionDeadline = (deadline, pStyle) => {
    if (deadline !== "Invalid Date") {
      return <p style={pStyle}>Deadline: {deadline}</p>
    } else {
      return
    }
  }

  // dynamic style!
  listStyle = () => {
    if (this.props.p.postType === "ideas") {
      return { backgroundColor : "#626E60", color: "#fff" };

    } else if (this.props.p.postType === "applied") {
      return { backgroundColor : "#945D60", color: "#fff"  };

    } else if (this.props.p.postType === "contacted") {
      return { backgroundColor : "#AF473C", color: "#fff"  };
    } else {
      return { backgroundColor : "#626E60", color: "#fff" };
    }
    
  }

  getIcon = (iconType) => {
    if (iconType === "ideas") {
      return lightbulbIcon;

    } else if (iconType === "applied") {
      return starIcon;

    } else if (iconType === "contacted") {
      return phoneIcon;
    }
  };
  
  getDateDifference = (date) => {
    let now = Date.now();
    let diff = Math.floor((now - date) / (1000*60*60*24));  // ms - sec - min - hours - days
    if (diff.isNaN) {
      return "unknown date";
    } else {
      return (`${diff} days ago`); 
    }
  }

  getTimeString = (date) => {
    let hh = date.getHours();
    let mm = date.getMinutes();
    let regex = new RegExp("[A-Z](?!.*[(])",'g');
    let tz = date.toTimeString().match(regex).join('');

    let tod = "AM";
    if (hh > 12) { 
      hh = hh - 12;
      tod = "PM";
    }
    return (`${hh}:${mm} ${tod} (${tz})`);
  }
    



  render() { 

    const {id, filter, postType, btn1Type, btn2Type, compName, compSA, compCS, compZip, 
     cNumber, cName, invwDate, pcDate, posTitle, posUrl, 
     salary, posDead, date} = this.props.p;

     let iDate = new Date(invwDate);
     let pDate = new Date(pcDate);
     let dDate = new Date(posDead);
     let aDate = new Date(date);

     const pStyle = { margin: "0px", outline: "none", marginBlockStart: 0, marginBlockEnd: 0};

     
     const btn1Style = {
      backgroundColor: "Transparent",
      backgroundRepeat:"no-repeat",
      border: "none",
      overflow: "hidden",
      outline:"none",
      color : "#fff",
      borderRadius : "20px",
      cursor : "pointer",
      float  : "right",
      padding: "8px 10px",
      marginTop: "7px",
      marginRight: "7px"
    };

    const btn2Style = {
      backgroundColor: "Transparent",
      backgroundRepeat:"no-repeat",
      border: "none",
      overflow: "hidden",
      outline:"none",
      borderRadius : "20px",
      cursor : "pointer",
      float  : "left",
      padding: "4px 5px"
    };

    const btn3Style = {
      backgroundColor: "Transparent",
      backgroundRepeat:"no-repeat",
      border: "none",
      overflow: "hidden",
      outline:"none",
      borderRadius : "20px",
      cursor : "pointer",
      float  : "left",
      padding: "4px 5px",
      marginLeft: "20px",
      marginRight: "5px"
    };

    const btn4Style = {
      backgroundColor: "Transparent",
      backgroundRepeat:"no-repeat",
      border: "none",
      overflow: "hidden",
      outline:"none",
      borderRadius : "20px",
      cursor : "pointer",
      float  : "right",
      padding : "4px 5px",
      marginTop: "60px",
      marginLeft: "3px",
      marginRight: "2px"
    };

      
      let route = this.props.routeInfo;


	    return (
        <div>
	      <li className={ filter ? "nopost" : "post"} style={this.listStyle()}>
          <button onClick={this.props.modifyPost.bind(this, this.props.p, route)} style={btn3Style}><img src={edit} alt={"Modify Post"} style={{width: "25px", height: "25px"}} title={"Modify Post"}/></button>
          <button onClick={this.props.deletePost.bind(this, id)} style={btn1Style} title={"Delete Post"}>X</button>
          <button onClick={this.props.filterPost.bind(this, postType)} style={btn2Style}  title={"Filter Post by Type"}><img className="filterBtn" src={this.getIcon(postType)} alt={"Filter Button"} style={{width: "25px", height: "25px"}}/></button>
          <button onClick={this.props.switchPostType.bind(this, btn1Type, this.props.p)} style={btn4Style} title={"Change Post Type"} ><img src={this.getIcon(btn1Type)} alt={"Move Button"} style={{width: "25px", height: "25px"}}/></button>
          <button onClick={this.props.switchPostType.bind(this, btn2Type, this.props.p)} style={btn4Style}  title={"Change Post Type"} ><img src={this.getIcon(btn2Type)} alt={"Move Button"} style={{width: "25px", height: "25px"}}/></button>
             
         
          <details  style={{ marginLeft: "20px", outline: "none", textAlign: "left"}}>
          <summary style={{marginLeft: "10px", outline: "none", textAlign: "left"}}>{compName}</summary>
          
          {this.address(compSA, compCS, compZip)}
          {this.contact(cName, cNumber)}
          {this.interviewDate(iDate.toDateString(), this.getTimeString(iDate), pStyle)}
          {this.phoneCallDate(pDate.toDateString(), pStyle)}
         
          </details>
  
          <details  style={{marginLeft: "20px", outline: "none", textAlign: "left"}}>
          <summary style={{marginLeft: "10px", outline: "none", textAlign: "left"}}>{posTitle}</summary>
          {this.positionUrl(posUrl)}
          {this.positionSalary(salary, pStyle)}
          {this.positionDeadline(dDate.toDateString(), pStyle)}
          </details>
          <p>{this.getDateDifference(aDate)}</p>
          </li>
          </div>
          );
  }
}

export default Post;
