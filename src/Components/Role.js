import React, { Component } from 'react'
import Footer from './Footer'
import { Header } from './Header'

class Role extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
             RoleName:"",
             nameError:"",
             Decription:"",
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
        var arr = JSON.parse(localStorage.getItem("Roles"))
        if(arr == null){
            arr = []
        }
        this.setState({
            allData:arr
        })
    }
       
    displayData=()=>{
        var arr = JSON.parse(localStorage.getItem("Roles"))
        if(arr == null){
            arr=[]
        }
        return this.state.allData.map((rr,i)=>{
            return(
                <tr key={i}>
                    <td>{i+1}</td>
                    <td>{rr.n}</td>
                    <td>{rr.d}</td>
                    <td><button className="btn btn-danger" onClick={()=>this.deleteD(i)}>Delete</button></td>
                </tr>
            )
        })
    }
    sumbitD=(e)=>{
       
        var arr = JSON.parse(localStorage.getItem("Roles"))
        if(arr == null){
            arr = []
        }
        let obj = {n:this.state.RoleName,d:this.state.Decription}
        arr.push(obj);
        localStorage.setItem("Roles",JSON.stringify(arr))
        this.refreshD()
        
    }
    
    deleteD=(i)=>{
        var arr = JSON.parse(localStorage.getItem("Roles"))
        arr.splice(i,1);
        localStorage.setItem("Roles",JSON.stringify(arr))
        this.refreshD()
        
    }
    componentDidMount(){
        this.refreshD()
    }
    render() {
        return (
            <div className="container">
                <Header/>
                <form >
                <div class="form-group">
                <label>Select Role</label>
                <select class="form-control" value={this.state.RoleName} onChange={this.changeH} name="RoleName">
                <option value="ABC">ABC</option>
                <option value="XYZ">XYZ</option>
                <option value="PQR">PQR</option>
                <option value="LMN">LMN</option>
                <option value="EFG">EFG</option>
                </select>
                </div>
                <div class="form-group">
                <label>Decription</label>
                <textarea value={this.state.Decription} onChange={this.changeH} name="Decription" class="form-control" rows="4"></textarea>
                </div>
                <div><button className="btn btn-primary" onClick={this.sumbitD}>Sumbit</button>
                </div>
                </form>

                <br></br>
                <table className="table table-stripped">
                <thead>
                <th>Sr no</th>
                <th>Role</th>
                <th>Decription</th>
                <th>Action</th>
                </thead>
                <tbody>{this.displayData()}</tbody>
                </table>
                <Footer/>
            </div>

        )
    }
}
export default Role