import React from "react";
import "./App.css";
import {CountryData} from "./data";

export const Country =() => {
    return (
    <>
        <HomePageHeader />
        <div className="Country-details">{CountryData.map((data,key)=>{
            return(
                <div key={key}>
                    <Country
                    key={key}
                Country={data.Country}
                capital={data.Capital}
                Currency={data.Currency}
                Language={data.Language}
                Religion={data.Religion}
                />
                </div>
           );
         })}
        </div>
     </>
    );
};

const HomePageHeader = () => {
    return (
        <header className="header"><h2>your Country Information Tracker</h2></header>
    );
};
// eslint-disable-next-line
const Countrys = ({ Country, capital, Currency, Language, Religion }) => {
    if (!Country) return <div />;
    return (
      <table>
        <tbody>
          <tr>
            <td>
              <h5>{Country}</h5>
            </td>
            <td>
              <h5>{capital}</h5>
            </td>
            <td>
              <h4>{Currency}</h4>
            </td>
            <td>
              <p>{Language}</p>
            </td>
            <td>
              <h5>{Religion}</h5>
            </td>
          </tr>
        </tbody>
      </table>
    );
  };