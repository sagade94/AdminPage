import React,{useRef,useState,useEffect} from 'react'
import Footer from './Footer'
import { Header } from './Header'


function OrganizationalUnit() {
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()
    const [datas, setdatas] = useState([])
    
    
    useEffect(() => {
      inputRef1.current.focus()  
    },[])

    const sumbitD=(e)=>{
        e.preventDefault()
        let name=inputRef1.current.value
        let size = inputRef2.current.value
        let decription = inputRef3.current.value

        let data = {name,size,decription}        
        
        setdatas([...datas,{name:data.name,size:data.size,decription:data.decription}])
        inputRef1.current.focus()
    }
    
    const deleteD=(index)=>{
        // let i = index
        let data = datas
        data.splice(index,1);
        setdatas([...data])
    }
    return (
        <div>
            <Header/>
            <form onSubmit={sumbitD}>
            <div class="form-group">
                <label >Enter Organization name </label>
                <input class="form-control" ref={inputRef1} />
                </div>
                <div class="form-group">
                <label>Select Size of Organization</label>
                <select class="form-control" ref={inputRef2}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
                </div>
                <div class="form-group">
                <label>Decription</label>
                <textarea ref={inputRef3} class="form-control" rows="4"></textarea>
                </div>
                <div><button type="submit" className="btn btn-primary" >Sumbit</button>
                </div>
                </form>

            <table className="table table-stripped">
            <tr>
                <th>Name</th>
                <th>Size</th>
                <th>Decription</th>
                <th>Action</th>
            </tr>
            {datas.length>0?(
                datas.map((dd,index)=>
                    <tr key={index+1}>
                        <td>{dd.name}</td>
                        <td>{dd.size}</td>
                        <td>{dd.decription}</td>
                        <td><button className="btn btn-danger" onClick={()=>deleteD(index)}>Delete</button></td>

                    </tr>
                )    
            ):null}
            </table>
            <Footer/>
        </div>
    )
}

export default OrganizationalUnit
