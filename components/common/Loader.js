import { CircularProgress } from "@mui/material";

const Loader = () => {
  return(
    <div style={{
      width: "100%",
      height:"inherit",
      display:'flex',
      justifyContent:"center",
      alignItems:"center"
    }}>
      <CircularProgress />
    </div>
  )
}

export default Loader