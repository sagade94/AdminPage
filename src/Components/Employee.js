import React, { Component } from 'react'
import Footer from './Footer'
import { Header } from './Header'

class Employee extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             Name:"",
             Email:"",
             Role:"",
             nameError:"",
             emailError:"",
             Oragnization:"",
             index:" ",
             allData:[]
        }
    }
    changeH=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    refreshD=()=>{
        var arr = JSON.parse(localStorage.getItem("pppp"))
        if(arr == null){
            arr = []
        }
        this.setState({
            allData:arr
        })
    }
    validateForm=()=>{
        console.log(this.state.Name.length)
        var isvalid=true;
       if(this.state.Name.length==0){
            this.setState({
                nameError:"Name should Not Empty"
            })
            isvalid=false;

        }
        else if(this.state.Name.length>1){
            //alert("in else");
            this.setState({
                nameError:""
            })
            isvalid=true;
        }
        if(!this.state.Email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)){
            this.setState({
                emailError:'Email should contain @ and .'
            })
            isvalid=false;
        }
        else if(this.state.Email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)){
            this.setState({
                emailError:''
            })
            isvalid=true;
        }

        return isvalid;
    }
   
    displayData=()=>{
        var arr = JSON.parse(localStorage.getItem("pppp"))
        if(arr == null){
            arr=[]
        }
        return this.state.allData.map((dd,i)=>{
            return(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{dd.n}</td>
                    <td>{dd.e}</td>
                    <td>{dd.r}</td>
                    <td>{dd.o}</td>
                    <td><button className="btn btn-danger" onClick={()=>this.deleteD(i)}>Delete</button></td>
                </tr>
            )
        })
    }
    sumbitD=(e)=>{
        var isvalid = this.validateForm();
        //alert(isvalid +"isvalid");
        var arr = JSON.parse(localStorage.getItem("pppp"))
        if(arr == null){
            arr = []
        }
        let obj = {n:this.state.Name,e:this.state.Email,r:this.state.Role,o:this.state.Oragnization}
        if(isvalid==true){
            arr.push(obj);
            localStorage.setItem("pppp",JSON.stringify(arr))
            this.refreshD()
        }
        // else{
        //     alert("Somthing went Wrong. Check Name or Email")
        // }
        
        
    }
    
    deleteD=(i)=>{
        var arr = JSON.parse(localStorage.getItem("pppp"))
        arr.splice(i,1);
        localStorage.setItem("pppp",JSON.stringify(arr))
        this.refreshD()
        
    }
    componentDidMount(){
        this.refreshD()
    }
    render() {
        return (
            <div>
                <Header/>
                <form>
                    <table>
                    <tr>
                    <th><label>Enter your name : </label></th>
                    <td><input type="text" className="form-control" placeholder="Enter Full Name" name="Name" 
                    value={this.state.Name} onChange={this.changeH}/></td>
                    <span className="text-danger">{this.state.nameError} </span>
                    </tr>
                    <tr>
                    <th><label>Enter your Email : </label></th>
                    <td><input type="text" className="form-control" name="Email" value={this.state.Email}  placeholder="Enter Email" onChange={this.changeH}/></td>
                    <span className="text-danger">{this.state.emailError} </span>
                    </tr>
                    <tr>
                    <th><label>Enter your Role : </label></th>
                    <td><input type="text" placeholder="Enter Role" className="form-control" name="Role" value={this.state.Role} onChange={this.changeH}/></td>
                    </tr>
                    <tr>
                    <th><label>Enter your Oragnization : </label></th>
                    <td><input type="text" placeholder="Enter Oragnization" className="form-control" name="Oragnization" value={this.state.Oragnization} onChange={this.changeH}/></td>
                    </tr>
                    <div><button className="btn btn-primary" onClick={this.sumbitD}>Sumbit</button>
                    </div>
                    </table>
                </form>
                
                <br></br>
                <table className="table table-stripped">
                <thead>
                <th>Sr no</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Oragnization</th>
                <th>Action</th>
                </thead>
                <tbody>{this.displayData()}</tbody>
                </table>

                <Footer/>
            </div>
        )
    }
}
export default Employee