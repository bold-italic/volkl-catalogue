import React, { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Sort({ onSortChange }) {
  const [selectedSort, setSelectedSort] = useState("");

  const handleSortChange = (e) => {
    const selectedSort = e.target.value;
    setSelectedSort(selectedSort);
    onSortChange(selectedSort); // Notify parent component of sort change
  };

  return (
    <FormControl sx={{ minWidth: 160 }}>
      <InputLabel>SORT BY:</InputLabel>
      <Select
        value={selectedSort || ""}
        onChange={handleSortChange}
        label="SORT BY:"
      >
        <MenuItem value="name">Name A-Z</MenuItem>
        <MenuItem value="-name">Name Z-A</MenuItem>
      </Select>
    </FormControl>
  );
}
