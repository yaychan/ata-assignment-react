import React, { useState } from "react";
import expandIcon from "../../icons/icons8-expand-arrow-50.png";
import collapseIcon from "../../icons/icons8-greater-than-50.png";
import Warning from "../warning/Warning";

import "./ExpandableTable.css";

const ExpandableTable = ({ data }) => {
  const [expandedRowIndex, setExpandedRowIndex] = useState(null);

  const toggleRow = (index) => {
    setExpandedRowIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <table className="table-style">
        <thead>
          <tr>
            <th>Account</th>
            <th>Operation</th>
            <th>Symbol</th>
            <th className="mobile-hidden">Description</th>
            <th className="mobile-hidden">Qty.</th>
            <th className="mobile-hidden">Filled Qty.</th>
            <th className="mobile-hidden">Price</th>
            <th>Status</th>
            <th className="mobile-hidden">Date</th>
            <th className="mobile-hidden">Expiration</th>
            <th className="mobile-hidden">No Ref</th>
            <th className="mobile-hidden">Ext Ref</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="accent-color fw-bold">
                  {" "}
                  {expandedRowIndex === index ? (
                    <img
                      src={expandIcon}
                      alt="Expanded Icon"
                      className="btn-expand"
                      onClick={() => toggleRow(index)}
                    />
                  ) : (
                    <img
                      src={collapseIcon}
                      alt="Collapsed Icon"
                      className="btn-expand"
                      onClick={() => toggleRow(index)}
                    />
                  )}
                  {row.account}
                </td>
                <td>{row.operation}</td>
                <td>{row.symbol}</td>
                <td className="mobile-hidden">{row.description}</td>
                <td className="mobile-hidden">{row.qty}</td>
                <td className="mobile-hidden">{row.filledQty}</td>
                <td className="mobile-hidden">{row.price}</td>
                <td>{row.status}</td>
                <td className="mobile-hidden">{row.date}</td>
                <td className="mobile-hidden">{row.expiration}</td>
                <td className="mobile-hidden">{row.noRef}</td>
                <td className="mobile-hidden">{row.extRef}</td>
              </tr>
              {expandedRowIndex === index && (
                <tr className="detail-tr">
                  <td colSpan="12">
                    <label className="accent-color fw-bold">
                      {row.details.firstName} {row.details.lastName}
                    </label>
                    <button className="detail-btn ml-8">
                      Full review details
                    </button>
                    <button className="reject-btn ml-8">Reject</button>
                    <button className="accept-btn ml-8">ACCEPT</button>
                  </td>
                </tr>
              )}
              {expandedRowIndex === index && (
                <tr>
                  <td colSpan="12">
                    <div className="detail-flex-container">
                      <div className="detail-flex-item">
                        Net Amount:{" "}
                        <label>
                          {row.details.netAmount} {row.details.currency}
                        </label>
                      </div>
                      <div className="detail-flex-item">
                        Price: <label>{row.details.price}</label>
                      </div>
                      <div className="detail-flex-item">
                        Exchange Rate: <label>{row.details.exchangeRate}</label>
                      </div>
                      <div className="detail-flex-item">
                        O/S Limit: <label>{row.details.osLimit}</label>
                      </div>
                      <div className="detail-flex-item">
                        Reference Number:{" "}
                        <label>{row.details.referenceNumber}</label>
                      </div>
                      <div className="detail-flex-item">
                        Date/Time: <label>{row.details.dataTime}</label>
                      </div>
                      <div className="detail-flex-item">
                        Telephone: <label>{row.details.telephone}</label>
                      </div>
                      <div className="detail-flex-item">
                        User ID: <label>{row.details.userId}</label>
                      </div>
                    </div>
                  </td>
                </tr>
              )}
              {expandedRowIndex === index && (
                <tr className="detail-tr">
                  <td colSpan="12">
                    <Warning />
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpandableTable;
