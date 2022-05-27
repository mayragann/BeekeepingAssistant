import { useEffect, useState } from "react";
import React from "react";
import { useTable } from "react-table";

import "bootstrap/dist/css/bootstrap.min.css";



const SearchInspections = ({ inspections }) => {
  const [chartData, setChartData] = useState([]);
  
  useEffect(() => {
    const inspectionData = inspections.map((inspection) => {
      
        return{
            "eggs": inspection.eggs,
            "larvae": inspection.larvae,
            "sealed_brood": inspection.sealed_brood,
            "covered_bees": inspection.covered_bees,
            "nectar_honey": inspection.nectar_honey,
            "pollen": inspection.pollen,
            "pest_spotted": inspection.pest_spotted,
            "pest_action": inspection.pest_action,
            "notes_concerns": inspection.notes_concerns,
            "inspection_date": inspection.inspection_date,
    
        }
      
      ;
    });
    setChartData(inspectionData);
  }, [inspections]);

  const columns = React.useMemo(
      () =>[
    {
      Header: "Frames",
      columns: [
        {
          Header: "W/Eggs",
          accessor: "eggs",
        },
        {
          Header: "W/Larvae",
          accessor: "larvae",
        },
        {
          Header: "W/Sealed Brood",
          accessor: "sealed_brood",
        },
        {
          Header: "Covered in Bees",
          accessor: "covered_bees",
        },
        {
          Header: "W/Nectar and/or Honey",
          accessor: "nectar_honey",
        },
        {
          Header: "W/Pollen",
          accessor: "pollen",
        },
        {
          Header: "Pest Spotted",
          accessor: "pest_spotted",
        },
        {
          Header: "Pest Action",
          accessor: "pest_action",
        },
        {
          Header: "Notes or Concerns",
          accessor: "notes_concerns",
        },
        {
          Header: "Inspection Date",
          accessor: "inspection_date",
        },
      ],
    },
  ], []);

  const data = React.useMemo(() => {
    return  [...chartData]
    }, [chartData]);

//   const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//     useTable({
//       columns,
//       data,
//     });

    const Table = ({ columns, data }) => {
        // Use the state and functions returned from useTable to build your UI
        const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow,
        } = useTable({
          columns,
          data,
        })


        return(
            
            <table className="table" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                    <th {...column.getHeaderProps()}>{column.render("Header")}</th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

        )
    }


  return (
    <>
    <Table columns={columns} data={data}></Table>
    {console.log(columns)}
    {console.log(data)}
    </>
  );
};





export default SearchInspections;