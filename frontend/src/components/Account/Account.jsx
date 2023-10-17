import React from "react";
import "./Account.scss"

function Account(props) {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">Argent Bank {props.accountTitle}</h3>
        <p className="account-amount">${props.accountAmount}</p>
        <p className="account-amount-description">{props.accountDesc}</p>
        
      </div>
      <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
    </section>
  );
}

export default Account;
