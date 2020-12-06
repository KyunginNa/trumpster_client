import React, { Component } from "react";
import QuotesData from "./components/QuotesData";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import SearchQuotes from "./components/SearchQuotes";
import SubscriptionPayment from "./components/SubscriptionPayment";
import { Elements } from "react-stripe-elements";
import Header from "./components/Header";
import "./index.css";

class App extends Component {
  state = {
    authenticated: false,
  };

  render() {
    return (
      <div>
        <Header />
        {this.state.authenticated ? (
          <>
            <Elements>
              <SubscriptionPayment />
            </Elements>
            <SearchQuotes />
            {/* <InsultGenerator /> */}
          </>
        ) : (
          <>
            <RegisterForm />
            <LoginForm />
            <QuotesData />
          </>
        )}
      </div>
    );
  }
}

export default App;
