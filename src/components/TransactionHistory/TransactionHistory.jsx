import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    return (
        <div className={css.container}>
       <table className={css.table}>
  <thead>
    <tr className={css.title}>
      <th className={css.header}>Type</th>
      <th className={css.header}>Amount</th>
      <th className={css.header}>Currency</th>
    </tr>
  </thead>

   <tbody>
        {items.map((item) => {
          return (
            <tr key={item.id}>
              <td className={css.row}>{item.type}</td>
              <td className={css.row}>{item.amount}</td>
              <td className={css.row}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
            </table>
            </div>
  );
};
export default TransactionHistory;