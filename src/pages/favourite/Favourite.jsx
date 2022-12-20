import { Typography } from "@mui/material"
import Header from "../../component/Header/Header"
import "./favourite.css"


const Favourite = () => {
    return(
        <div>
            <Header />
            <div className="favourite">
            <div className="favouriteHeader">
        <Typography variant="h6">Favourite Products</Typography>
      </div>
            </div>
        </div>
    )
}

export default Favourite