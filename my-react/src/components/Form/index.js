import React, { Component } from "react";
import "./index.css";

class InputItem extends Component {
  state = {
    value: "",
  };
  componentWillMount() {
    console.log("willmount");
    this.setState({
      value: this.props.value,
      testVal: "",
    });
  }
  componentWillReceiveProps(nextProps, val2) {
    console.log("componentWillReceiveProps");
    if (nextProps.value !== this.state.value) {
      this.setState({
        value: nextProps.value,
      });
      console.log(nextProps, val2);
    }
  }
  testValue(ev) {
    const { pattern, tit } = this.props;
    var re = pattern.test(ev.target.value);
    this.setState({
      testVal: re ? "" : `您输入的${tit}格式不正确`,
    });
  }
  changeValue(ev) {
    const { onChange } = this.props;
    let val = ev.target.value;
    this.setState({
      value: ev.target.value,
    });
    onChange && onChange(val);
  }

  render() {
    const { value, testVal } = this.state;
    const { tit, type, placeholder } = this.props;
    return (
      <div>
        <div className="lm-input-item">
          {tit ? <span className="lm-input-tit">{tit}</span> : ""}
          <input
            className="lm-input-cont"
            type={type || "text"}
            onBlur={(ev) => this.testValue(ev)}
            placeholder={placeholder || ""}
            value={value}
            onChange={(ev) => this.changeValue(ev)}
          />
        </div>
        <div className="test-val">{testVal}</div>
      </div>
    );
  }
}

export { InputItem };
