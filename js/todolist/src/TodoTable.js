import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

function TodoTable(props) {
  return (
    <div>
      <div
        className="ag-theme-material"
        style={{ height: 600, width: 600, margin: "auto" }}
        suppressRowDrag={false}
      >
        <AgGridReact rowData={props.todos} animateRows={true}>
          <AgGridColumn
            field="description" 
            sortable={false}
            filter={true}
            lockPosition={true}
          ></AgGridColumn>
          <AgGridColumn
            field="date"
            sortable={true}
            filter={true}
            ockPosition={true}
          ></AgGridColumn>
          <AgGridColumn
            field="status"
            sortable={true}
            filter={true}
            lockPosition={true}
          ></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
}

export default TodoTable;
