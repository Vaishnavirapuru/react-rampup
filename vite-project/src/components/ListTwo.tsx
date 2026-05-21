import react from "react";

const ListTwo = () => {
  const e = [
    {
      name: "e1",
      salary: 20,
      designation: {
        desName: "manager",
      },
    },
    {
      name: "e2",
      salary: 30,
      designation: {
        desName: "dev",
      },
    },
  ];
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>salary</th>
            <th>designation</th>
            <th>designation.des</th>
          </tr>
        </thead>
        <tbody>
          {e.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.salary}</td>

                <td>{item.designation.desName}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ListTwo;
