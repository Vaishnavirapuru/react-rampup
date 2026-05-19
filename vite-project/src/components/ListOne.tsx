const ListOne = () => {
  const employees = [
    {
      Name: "emp1",
      Salary: 1000,
      Age: 20,
    },
    {
      Name: "emp2",
      Salary: 20000,
      Age: 2,
    },
    {
      Name: "emp3",
      Salary: 30000,
      Age: 3,
    },
  ];

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Salary</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.Name}</td>

                <td>{item.Salary}</td>
                <td>{item.Age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListOne;
