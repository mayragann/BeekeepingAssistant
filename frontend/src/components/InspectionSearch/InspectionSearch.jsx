import { useEffect, useState } from "react";
import React from "react";
import { useTable, useGlobalFilter, useFilters } from "react-table";

import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalFilter } from "./GlobalFilter";
import { ColumnFilter } from "./ColumnFilter";
import { CheckBox } from "./CheckBox";
import './Table.css'



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
          Filter: ColumnFilter
        },
        {
          Header: "W/Larvae",
          accessor: "larvae",
          Filter: ColumnFilter
        },
        {
          Header: "W/Sealed Brood",
          accessor: "sealed_brood",
          Filter: ColumnFilter
          
        },
        {
          Header: "Covered in Bees",
          accessor: "covered_bees",
          Filter: ColumnFilter
        },
        {
          Header: "W/Nectar and/or Honey",
          accessor: "nectar_honey",
          Filter: ColumnFilter
        },
        {
          Header: "W/Pollen",
          accessor: "pollen",
          Filter: ColumnFilter
        },
        {
          Header: "Pest Spotted",
          accessor: "pest_spotted",
          Filter: ColumnFilter
        },
        {
          Header: "Pest Action",
          accessor: "pest_action",
          Filter: ColumnFilter
        },
        {
          Header: "Notes or Concerns",
          accessor: "notes_concerns",
          Filter: ColumnFilter
        },
        {
          Header: "Inspection Date",
          accessor: "inspection_date",
          Filter: ColumnFilter
        },
      ],
    },
  ], []);

  const data = React.useMemo(() => {
    return  [...chartData]
    }, [chartData]);


    const Table = ({ columns, data }) => {
        // Use the state and functions returned from useTable to build your UI
        const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          rows,
          prepareRow,
          state,
          setGlobalFilter,
          allColumns,
          getToggleHideAllColumnsProps,
        } = useTable({
          columns,
          data,
        }, 
        useFilters,
        useGlobalFilter)

        const { globalFilter } = state

        return(
          
            <>
            <div >
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter}/>
            </div>
            <table className="table" {...getTableProps()}>
            <thead>
              {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                  {headerGroup.headers.map((column) => (
                      <th {...column.getHeaderProps()}>{column.render("Header")}
                    <div>{column.canFilter ? column.render('Filter') : null}</div>
                    </th>
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
          <div>
              <h3>Inspection Table</h3>
            <CheckBox {...getToggleHideAllColumnsProps()} /> Toggle All
          </div>
          {allColumns.map(column => (
            <span key={column.id}>
              <label>
                <input type='checkbox' {...column.getToggleHiddenProps()} />{' '}
                {column.Header}
              </label>
            </span>
          ))}
          <br />
          
          </>
        )
    }


  return (
    
    <div>
    <Table columns={columns} data={data}></Table>

    </div>
  );
};





export default SearchInspections;