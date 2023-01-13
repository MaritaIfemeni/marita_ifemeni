import React from "react";
import { DataGrid, GridRowProps, GridColDef } from "@mui/x-data-grid";

function Home() {
  const rows: GridRowsProp = [
    { id: 1, col1: "Kokeilu", col2: "Osaanko" },
    { id: 2, col1: "Tehdä", col2: "tämän" },
  ];

  const columns: GridColDef[] = [
    { field: "col1", headerName: "Sarake 1", width: 150 },
    { field: "col2", headerName: "Sarake2", width: 150 },
  ];

  return (
    <div>
      <div>Tämä on home, harjoitellaan gridiä</div>
      <div style={{ height: 300, width: "100%" }}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default Home;
