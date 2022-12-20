import "./list.css";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { NavLink } from 'react-router-dom';



const List = () => {

  return (
    <div className="products">
      <div className="productHeader">
        <Typography variant="h6">Products</Typography>
      </div>

      <div className="main">
        <div className="nav">
          <div className="left">
            <div className="search">
              <div className="seaText">
                <form action="/">
                  <input
                    type="text"
                    placeholder="Search for products"
                    name="search"
                  />
                  <Button>
                    <SearchIcon />
                    Search
                  </Button>
                </form>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="btns" style={{ gap: "10px" }}>
              <NavLink to="/admin/create"><Button className="nbtn">
                New Product
              </Button></NavLink>
              <Button variant="outlined">
                <NavLink to="/admin/favourite"><StarBorderIcon style={{ color: "#001EB9" }} /></NavLink>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="table">
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="thead" style={{width: "150px"}}>SKU</TableCell>
                <TableCell className="thead" style={{width: "250px"}} align="center">Image</TableCell>
                <TableCell className="thead" style={{width: "350px"}} align="center">Product Name</TableCell>
                <TableCell className="thead" style={{width: "150px"}} align="center">Price</TableCell>
                <TableCell className="thead" align="center"></TableCell>
              </TableRow>
            </TableHead>
            
            <TableBody>
            <TableRow key="sku"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell style={{width: "150px"}}>CA123</TableCell>
                <TableCell align="center" style={{width: "250px"}}><img style={{width: "50px", height: "50px"}} src="https://th.bing.com/th/id/R.7abc9f21f48f26a1a1dad1070b9030d8?rik=dJgl5XPp73rNKA&riu=http%3a%2f%2freciperhapsody.files.wordpress.com%2f2010%2f11%2fmocha-crunch-cake-11-14-10.jpg&ehk=KH8PgXHONggWqm%2bM6KEYx2QOFqKjcvj3VOXcvfu6Kis%3d&risl=&pid=ImgRaw&r=0" /></TableCell>
                <TableCell align="center" style={{width: "350px"}}>Cake</TableCell>
                <TableCell align="center">$24</TableCell>
                <TableCell align="center">
                    <NavLink to=""><Button><DeleteIcon style={{ color: "#001EB9" }} /></Button></NavLink>
                    <NavLink to="/admin/edit/:id"><Button><EditIcon style={{ color: "#001EB9" }} /></Button></NavLink>
                    <NavLink to="/admin/favourite"><Button><StarBorderIcon style={{ color: "#001EB9" }} /></Button></NavLink>
                </TableCell>
            </TableRow>
            <TableRow key="sku"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell style={{width: "150px"}}>CA124</TableCell>
                <TableCell align="center" style={{width: "250px"}}><img style={{width: "50px", height: "50px"}} src="https://th.bing.com/th/id/R.d8e31a120678b44aca7e0fa61b50a8d0?rik=B%2fcko1fS4yv%2bfA&pid=ImgRaw&r=0" /></TableCell>
                <TableCell align="center" style={{width: "350px"}}>Ice Cream</TableCell>
                <TableCell align="center">$10</TableCell>
                <TableCell align="center">
                    <NavLink to=""><Button><DeleteIcon style={{ color: "#001EB9" }} /></Button></NavLink>
                    <NavLink to="/admin/edit/:id"><Button><EditIcon style={{ color: "#001EB9" }} /></Button></NavLink>
                    <NavLink to="/admin/favourite"><Button><StarBorderIcon style={{ color: "#001EB9" }} /></Button></NavLink>
                </TableCell>
            </TableRow>
            <TableRow key="sku"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell style={{width: "150px"}}>CA125</TableCell>
                <TableCell align="center" style={{width: "250px"}}><img style={{width: "50px", height: "50px"}} src="https://th.bing.com/th/id/OIP.Bo-HRLoEO0ahTTDr8CbpLwHaGe?pid=ImgDet&rs=1" /></TableCell>
                <TableCell align="center" style={{width: "350px"}}>Books</TableCell>
                <TableCell align="center">$24</TableCell>
                <TableCell align="center">
                    <NavLink to=""><Button><DeleteIcon style={{ color: "#001EB9" }} /></Button></NavLink>
                    <NavLink to="/admin/edit/:id"><Button><EditIcon style={{ color: "#001EB9" }} /></Button></NavLink>
                    <NavLink to="/admin/favourite"><Button><StarBorderIcon style={{ color: "#001EB9" }} /></Button></NavLink>
                </TableCell>
            </TableRow>
            <TableRow key="sku"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell style={{width: "150px"}}>CA126</TableCell>
                <TableCell align="center" style={{width: "250px"}}><img style={{width: "50px", height: "50px"}} src="https://www.allaboutlean.com/wp-content/uploads/2018/12/All-Pens.jpg" /></TableCell>
                <TableCell align="center" style={{width: "350px"}}>Cake</TableCell>
                <TableCell align="center">$24</TableCell>
                <TableCell align="center">
                    <NavLink to=""><Button><DeleteIcon style={{ color: "#001EB9" }} /></Button></NavLink>
                    <NavLink to="/admin/edit/:id"><Button><EditIcon style={{ color: "#001EB9" }} /></Button></NavLink>
                    <NavLink to="/admin/favourite"><Button><StarBorderIcon style={{ color: "#001EB9" }} /></Button></NavLink>
                </TableCell>
            </TableRow>
            </TableBody>
            
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default List;
