import React from "react";
import { Header, Content, Footer } from "../../components/public";
import {Link} from "react-router-dom"
import "./list-page.css";

class ClassList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idIndex: 0
    }
  }
  changeClass(id, index) {
    console.log("狗狗品种：", id, index);
    this.props.getProDataFn(id);
    this.setState({
      idIndex: index
    })
  }
  render() {
    const { dogList } = this.props;
    const {idIndex} = this.state;
    return (
      <ul className="class-list">
        {dogList.map((ele, index) => {
          return (
            <li className={idIndex === index ? 'red' : ''} key={ele} onClick={() => this.changeClass(ele, index)}>
              {ele}
            </li>
          );
        })}
      </ul>
    );
  }
}

class ProList extends React.Component {
  render() {
    const { dogProList } = this.props;
    return (
      <ul className="pro-list">
        {dogProList.map((ele) => {
          return <Link to={`/detail?src=${ele}&id=1`}  key={ele}><img src={ele} alt="" /></Link>;
        })}
      </ul>
    );
  }
}

class ListPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dogClassList: [],
      dogProList: [],
    };
    this.getProDataFn = this.getProDataFn.bind(this);
  }

  getProDataFn(id) {
    fetch(`https://dog.ceo/api/breed/hound/${id}/images/random/6`)
      .then((res) => res.json())
      .then((res) => {
        console.log("狗狗图片: ", res);
        this.setState({
          dogProList: res.message,
        });
      });
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breed/hound/list")
      .then((res) => res.json())
      .then((res) => {
        console.log("狗狗列表：", res);
        this.getProDataFn(res.message[0] || "basset");
        this.setState({
          dogClassList: res.message,
        });
      });
  }
  render() {
    const { dogClassList, dogProList } = this.state;
    return (
      <div className="list-page">
        <Header>商品列表</Header>
        <Content>
          <ClassList dogList={dogClassList} getProDataFn={this.getProDataFn} />
          <ProList dogProList={dogProList} />
        </Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default ListPage;
