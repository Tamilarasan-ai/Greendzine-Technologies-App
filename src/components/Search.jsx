import { useState } from "react";
import PropTypes from "prop-types";
import { FaSearch } from "react-icons/fa";

const Data = [
  {
    "EMPID": 1,
    "Name": "Arjun",
    "DOB": "16-11-2000",
    "Role": "Software Engineer",
  },
  {
    "EMPID": 2,
    "Name": "Mahesh",
    "DOB": "15-01-2000",
    "Role": "Web Developer",
  },
  {
    "EMPID": 3,
    "Name": "Priya",
    "DOB": "20-05-1995",
    "Role": "Data Scientist"
  },
  {
    "EMPID": 4,
    "Name": "Rajesh",
    "DOB": "12-08-1998",
    "Role": "Network Engineer"
  },
  {
    "EMPID": 5,
    "Name": "Sara",
    "DOB": "05-03-1992",
    "Role": "UI/UX Designer"
  },
  {
    "EMPID": 6,
    "Name": "Vikram",
    "DOB": "18-09-1997",
    "Role": "Database Administrator"
  },
];

const WithSearch = (WrappedComponent) => {
  return function SearchWrapper() {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };

    return (
      <div>
        <div className="relative mt-4 mb-4 inline-block">
          <input
            onChange={handleSearch}
            value={searchTerm}
            type="text"
            placeholder="Search with name"
            className=" justify-center bg-[#5E5E5E82] border-[#595959] py-3 rounded-2xl w-[130%] text-center"
          />

          <FaSearch
            className="absolute right-[-3rem] top-1/2 transform -translate-y-1/2"
          />
        </div>

        <WrappedComponent searchTerm={searchTerm} />
      </div>
    );
  };
};

const EmployeeCard = (Data) => {
  return (
    <div className="bg-[#131816] relative p-4 mb-4 rounded-md">
         <div className="absolute top-4 right-[1rem] flex items-center justify-center bg-[#191f1e]  text-white w-8 h-8  rounded-full">
        <p className="text-lg font-bold">{Data.EMPID}</p>
      </div>
   <table className=" rounded-lg overflow-hidden">
  <thead>
  <tr>
      <td className="text-sm  text-gray-400 px-6 py-4 ">EMPID:</td>
      <td className="text-sm text-[#b9bbba] px-6 py-4 font-bold">{Data.EMPID}</td>
    </tr>
    <tr>
      <td className="text-sm  text-gray-400 px-6 py-4 ">Name:</td>
      <td className="text-sm text-[#b9bbba] px-6 py-4 font-bold">{Data.Name}</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="text-sm  text-gray-400 px-6 py-4 ">DOB:</td>
      <td className="text-sm text-[#86591d] px-6 py-4 font-bold">{Data.DOB}</td>
    </tr>
    <tr>
      <td className="text-sm  text-gray-400 px-6 py-4 ">Role:</td>
      <td className="text-sm text-[#1f4a28] px-6 py-4 font-bold">{Data.Role}</td>
    </tr>
  </tbody>
</table>


    </div>
  );
};

const EmployeesList = (props) => {
  const { searchTerm } = props;

  EmployeesList.propTypes = {
    searchTerm: PropTypes.string.isRequired,
  };

  return (
    <div>
     
      <div>
        {Data
          .filter(
            (employee) =>
              employee.Name.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0
          )
          .map((employee, index) => (
            <EmployeeCard key={index} {...employee} />
          ))}
      </div>
    </div>
  );
};

const Hoc = WithSearch(EmployeesList);

const Search = () => (
  <div>
    <Hoc />
  </div>
);

export default Search;
