import React from "react";

const ListThree = () => {
  const employees = [
    {
      id: 1,
      personalInfo: {
        name: "Rahul",
        age: 25,
        address: {
          city: "Hyderabad",
          pincode: 500001,
        },
      },

      companyDetails: {
        companyName: "TechSoft",
        designation: "Frontend Developer",
        salary: 45000,
      },

      skills: ["React", "JavaScript", "CSS"],

      projects: [
        {
          projectName: "E-Commerce",
          duration: "6 months",
        },
        {
          projectName: "Portfolio Website",
          duration: "2 months",
        },
      ],
    },

    {
      id: 2,
      personalInfo: {
        name: "Sneha",
        age: 27,
        address: {
          city: "Bangalore",
          pincode: 560001,
        },
      },

      companyDetails: {
        companyName: "Infosys",
        designation: "Backend Developer",
        salary: 60000,
      },

      skills: ["Java", "Spring Boot", "MySQL"],

      projects: [
        {
          projectName: "Banking App",
          duration: "1 year",
        },
        {
          projectName: "HR Management",
          duration: "4 months",
        },
      ],
    },

    {
      id: 3,
      personalInfo: {
        name: "Arjun",
        age: 30,
        address: {
          city: "Chennai",
          pincode: 600001,
        },
      },

      companyDetails: {
        companyName: "Wipro",
        designation: "Full Stack Developer",
        salary: 75000,
      },

      skills: ["React", "Node.js", "MongoDB"],

      projects: [
        {
          projectName: "Food Delivery App",
          duration: "8 months",
        },
      ],
    },
  ];
  return (
    <>
      <h1>Employeenames</h1>
      <ul>
        {employees.map((item, index) => (
          <li key={index}>{item.personalInfo.name}</li>
        ))}
      </ul>

      <h1> City and Pincode</h1>
      <table>
       
      </table>
      {
        employess.map(()=>{
            return(
                <tr>
                    <td>{employees.name}</td>
                    <td>{employees.companyDetails.companyName}</td>
                </tr>
            )
        })
      }
      <tr></tr>
                
                

           
      </ul>
    </>
  );
};

export default ListThree;
