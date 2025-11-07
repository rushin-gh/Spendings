const Body = () => {
  return (
    <div id="body">
      {/*@TODO - Input box to take expense*/}
      <table id="expense-table">
        <thead>
          <tr>
            <th>Sr.</th>
            <th>Expense</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Chai</td>
            <td>12</td>
          </tr>
          <tr>
            <td>1</td>
            <td>Sutta</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Body;
