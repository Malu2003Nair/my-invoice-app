import React from "react";

const Invoice = () => {
  const data = {
    party: {
      gstin: "09AMYPK1749C1ZO",
      legal_name: "NEERAJ KUMAR",
      trade_name: "M/S NEERAJ INDUSTRIES",
      principal_address: {
        address1: "PRATAP GANJ",
        address2: "Kanpur Nagar",
        pincode: "208022",
        city: "Kanpur",
        state: "UP",
        country: "IN",
      },
      shipping_address: {
        address1: "E 83/A, Panki Site 5",
        address2: "Kanpur Nagar",
        pincode: "208022",
        city: "Kanpur",
        state: "UP",
        country: "IN",
      },
    },
    quantities: [801.0],
    hsn_details: [
      {
        hsn_code: 7801,
        product_info: "UNWROUGHT LEAD",
        cgst: "9%",
        sgst: "9%",
        unit: "Kgs",
      },
    ],
    rates: [172],
  };

  const totalValue = data.quantities[0] * data.rates[0];
  const tax = (totalValue * 9) / 100;
  const grandTotal = totalValue + tax * 2;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", border: "1px solid black", width: "80%", margin: "auto" }}>
      <h2 style={{ textAlign: "center", textDecoration: "underline" }}>TAX INVOICE</h2>
      <p><strong>GSTIN:</strong> {data.party.gstin}</p>
      <p><strong>Invoice No:</strong> 2024-25/01</p>
      <p><strong>Invoice Date:</strong> 13/08/2024</p>
      <hr />
      <h3>Details of Receiver (Billed To)</h3>
      <p><strong>Name:</strong> {data.party.legal_name}</p>
      <p><strong>Address:</strong> {data.party.principal_address.address1}, {data.party.principal_address.city}, {data.party.principal_address.state} - {data.party.principal_address.pincode}</p>
      <p><strong>GSTIN/UIN:</strong> {data.party.gstin}</p>
      <hr />
      <h3>Details of Consignee (Shipped To)</h3>
      <p><strong>Name:</strong> {data.party.trade_name}</p>
      <p><strong>Address:</strong> {data.party.shipping_address.address1}, {data.party.shipping_address.city}, {data.party.shipping_address.state} - {data.party.shipping_address.pincode}</p>
      <p><strong>GSTIN/UIN:</strong> {data.party.gstin}</p>
      <hr />
      <table border="1" width="100%" style={{ marginTop: "10px", borderCollapse: "collapse", textAlign: "center" }}>
        <thead>
          <tr>
            <th>Description</th>
            <th>HSN Code</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Total</th>
            <th>CGST</th>
            <th>SGST</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.hsn_details[0].product_info}</td>
            <td>{data.hsn_details[0].hsn_code}</td>
            <td>{data.quantities[0]} {data.hsn_details[0].unit}</td>
            <td>{data.rates[0]}</td>
            <td>{totalValue.toFixed(2)}</td>
            <td>{tax.toFixed(2)}</td>
            <td>{tax.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
      <h3 style={{ textAlign: "right", marginTop: "10px" }}>Grand Total: ₹{grandTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Invoice;
