import useCustomRouter from "./useCustomRouter";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Sort() {
  const { pushQuery, query } = useCustomRouter();

  return (
    <FormControl sx={{minWidth: 140 }}>
      <InputLabel>SORT BY:</InputLabel>
      <Select
        value={query.sort || "name"}
        onChange={(e) => pushQuery({ sort: e.target.value })}
        label="SORT BY:"
      >
        <MenuItem value="name">Name A-Z</MenuItem>
        <MenuItem value="-name">Name Z-A</MenuItem>
      </Select>
    </FormControl>
  );
}
