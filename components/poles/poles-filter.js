import { useState } from "react";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// Crates pole length array
const lengths = [];
for (let i = 70; i <= 135; i += 5) {
  lengths.push(String(i));
}

export default function PolesFilter() {
  const [poleLength, setPoleLength] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPoleLength(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel>POLE LENGTH</InputLabel>
      <Select
        multiple
        value={poleLength}
        onChange={handleChange}
        input={<OutlinedInput label="POLE LENGTH" />}
        renderValue={(selected) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {lengths.map((length) => (
          <MenuItem key={length} value={length}>
            <Checkbox checked={poleLength.indexOf(length) > -1} />
            <ListItemText primary={length} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
