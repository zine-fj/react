import React,{Component} from "react"
import './pro-list.css'
class ProList extends Component {
    render() {
        return (
            <ul className="pro-list">
                {
                    this.props.listData.map((ele,index)=>(
                        <li key={index} className="pro-item">
                            <img src={ele.goodsListImg} alt=""/>
                            <p>{ele.goodsName}</p>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default ProList