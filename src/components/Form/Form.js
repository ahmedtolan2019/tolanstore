import React, { Component } from "react";
import { validateData } from "./Validator";
import {
  Container,
  Wrapper,
  FormWrapper,
  ActionsWrapper,
  FormControlWrapper,
  ControlWrapper,
  ErrorsWrapper,
  Control,
  Label,
  Erorr,
  SaveAction,
  CancelAction,
} from "./Form.css";

let formControls = [
  {
    as: "input",
    type: "text",
    name: "name",
    label: "input",
    placeHolder: "Enter your name",
    rules: { required: true, minLength: 3, alpha: true },
    focus: true,
  },
  {
    as: "input",
    type: "email",
    name: "email",
    label: "input",
    placeHolder: "Enter your email",
    rules: { required: true, email: true },
  },
];
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.formControls = this.props.formControls || formControls;
    this.formRules = () => {
      let result = {};
      this.formControls.forEach((cont) => {
        result = { ...result, [cont.name]: cont.rules };
      });
      return result;
    };
    this.formInitial = () => {
      let result = {};
      this.formControls.forEach((cont) => {
        result = { ...result, [cont.name]: "" };
      });
      return result;
    };
    this.formInitialErrors = () => {
      let result = {};
      this.formControls.forEach((cont) => {
        result = { ...result, [cont.name]: [] };
      });
      return result;
    };
    this.inputRef = React.createRef();
    this.state = {
      formData: this.formInitial(),
      formErrors: this.formInitialErrors(),
      dirty: {},
      processing: false,
    };
  }
  handleChange = (ev) => {
    this.setState(
      (state) => {
        state.formData[ev.target.name] = ev.target.value;

        return state;
      },
      () => {
        this.setState((state) => {
          state.dirty[ev.target.name] = true;
        });
        this.setState({
          formErrors: validateData(this.state.formData, this.formRules()),
        });
      }
    );
  };
  saveCallback = () => {
    let formData = {
      ...this.state.formData,
      cart: this.props.cart,
      cartItems: this.props.cartItems,
      cartPrice: this.props.cartPrice,
    };

    this.props.placeOrder(formData);
    this.setState({ processing: true });
    setTimeout(() => {
      this.props.history.push("/shop/checkout/ordercomplete");
      this.props.clearCart();
      this.setState({ processing: false });
    }, 1000);
  };
  cancelCallback = () => {
    let formData = this.state.formData;
    this.props.cancelCallback(formData);
  };
  render() {
    return (
      <Container>
        <Wrapper>
          <FormWrapper>
            {this.formControls.map((cont) => {
              return (
                <FormControlWrapper key={cont.name}>
                  <ControlWrapper>
                    <Label>{cont.label}</Label>
                    <Control
                      name={cont.name}
                      ref={cont.focus ? this.inputRef : null}
                      value={this.state.formData[cont.name]}
                      onChange={this.handleChange}
                      as={cont.as}
                      type={cont.type}
                      placeholder={cont.placeHolder}
                    />
                  </ControlWrapper>
                  <ErrorsWrapper>
                    {this.state.dirty[cont.name] &&
                      this.state.formErrors[cont.name] &&
                      this.state.formErrors[cont.name].map((err) => {
                        return <Erorr key={cont.name}>{err}</Erorr>;
                      })}
                  </ErrorsWrapper>
                </FormControlWrapper>
              );
            })}
          </FormWrapper>
          <ActionsWrapper>
            <SaveAction onClick={this.saveCallback}>
              {this.state.processing ? "Processing..." : "Save"}
            </SaveAction>
            <CancelAction onClick={this.cancelCallback}>Cancel</CancelAction>
          </ActionsWrapper>
        </Wrapper>
      </Container>
    );
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }
}
