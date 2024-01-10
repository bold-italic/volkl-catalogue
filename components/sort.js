import React, { useState } from "react";
import useCustomRouter from "./useCustomRouter";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Sort() {
  const { pushQuery, query } = useCustomRouter();
  const [selectedSort, setSelectedSort] = useState("");

  const handleSortChange = (e) => {
    setSelectedSort(e.target.value);
    pushQuery({ sort: e.target.value });
  };

  return (
    <FormControl sx={{ minWidth: 160 }}>
      <InputLabel>SORT BY:</InputLabel>
      <Select
        value={selectedSort || query.sort || ""}
        onChange={handleSortChange}
        label="SORT BY:"
      >
        <MenuItem value="name">Name A-Z</MenuItem>
        <MenuItem value="-name">Name Z-A</MenuItem>
      </Select>
    </FormControl>
  );
}
