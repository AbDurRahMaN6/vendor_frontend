import { Typography } from "@mui/material";
import Header from "../../component/Header/Header";
import "./create.css";
import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/base/TextareaAutosize";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useState } from "react";
import useFetch from "../../hooks/userFatch"

const Create = () => {
  const breadcrumbs = [
    <Link color="#162427" fontWeight="900" fontSize="30px" href="/admin/products">
      Products
    </Link>,

    <Typography color="#001EB9">Add new Product</Typography>,
  ];
  const theme = createTheme({
    typography: {
      htmlFontSize: 15,
    },
  });

  const [inpVal, setVal] = useState({
    sku: "",
    pname: "",
    qty: "",
    desc: "",
    image: "",
  });

  const setData = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setVal((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const { data, loading, error } = useFetch("/admin/products")

  // const addData = async(e) => {
  //   e.preventDefault();

  //   const {sku,pname,qty,desc,image} = inpVal;
  //   const res = await fetch("/admin/products",{
  //     method: "POST",
  //     headers:{
  //       "Content-Type":"application/json"
  //     },
  //     body: JSON.stringify({
  //       sku,pname,qty,desc,image
  //     })
  //   } );
  //   const data = await res.json();
  //   console.log(data);

  //   if(res.status === 404 || !data){
  //     alert("error");
  //     console.log("error ");
  //   }else{
  //     alert("data added");
  //     console.log("data added")
  //   }
  // }

  return (
    <div>
      <Header />

      {loading ? ( "Loading Please wait"):(
        <div className="createProducts">
        <div className="create">
          <div className="heads">
            <Breadcrumbs
              separator={<NavigateNextIcon fontSize="small" color="#162427" />}
              aria-label="breadcrumb"
            >
              {breadcrumbs}
            </Breadcrumbs>
          </div>
          <ThemeProvider theme={theme}>
            <div className="sku">
              <Typography>SKU</Typography>
              <input
                type="text"
                value={inpVal.sku}
                onChange={setData}
                id="sku"
                name="sku"
              />
            </div>
            <div className="qtys">
              <div className="pname">
                <Typography>Name</Typography>
                <input
                  type="text"
                  value={inpVal.pname}
                  onChange={setData}
                  id="pname"
                  name="pname"
                />
              </div>
              <div className="qty">
                <Typography>QTY</Typography>
                <input
                  type="number"
                  value={inpVal.qty}
                  onChange={setData}
                  id="qty"
                  name="qty"
                />
              </div>
            </div>
            <div className="descr">
              <Typography>Product Description</Typography>
              <br />
              <label>A samll description about the product</label>
              <div className="textarea">
                <TextareaAutosize
                  value={inpVal.desc}
                  onChange={setData}
                  id="desc"
                  name="desc"
                  aria-label="empty textarea"
                  minRows={10}
                  style={{
                    width: 930,
                    backgroundColor: "#f7f7f7",
                    border: "none",
                  }}
                />
              </div>
            </div>
            <div className="images">
              <Typography>Product Images</Typography>
              <div
                className="para"
                id="image"
                name="image"
                value={inpVal.image}
                onChange={setData}
              >
                <p>JPEG, PNG, SVG or GIF (Maximum file size 50MB)</p>
              </div>
            </div>
            <div className="button">
              <Button
                type="submit"
                style={{
                  backgroundColor: "#001EB9",
                  color: "#fff",
                  width: "200px",
                }}
              >
                Save Changed
              </Button>
            </div>
          </ThemeProvider>
        </div>
      </div>)}
    </div>
  );
};

export default Create;
