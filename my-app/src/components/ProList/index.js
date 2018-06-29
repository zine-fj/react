import React,{Component} from "react"
import './pro-list.css'
import {Link} from "react-router"

class ProList extends Component {
    render() {
        return (
            <ul className="pro-list">
                {
                    this.props.listData.map((ele,index)=>(
                        <li key={index} className="pro-item">
                            <Link to={'/detail/'+ ele.goodsID}>
                                <img src={ele.goodsListImg} alt=""/>
                                <p>{ele.goodsName}</p>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default ProList