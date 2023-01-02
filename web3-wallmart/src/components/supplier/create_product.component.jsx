import React, { useRef } from "react";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { getAbiAddress, getCurrentAccount } from "../../helpers/helper";
const SupplierCreate = () => {
    const tokenId = useRef();
    const name = useRef();
    const quantity = useRef();
    const productexpireydate = useRef();
    const supplierprice = useRef();
  const DisplayVal = async () => {
    const mydata = {
        _tokenId: tokenId.current.value,
        _name: name.current.value,
        _quantity: quantity.current.value,
        _productExpiryDate: productexpireydate.current.value,
        _supplierPrice: supplierprice.current.value,
      };
      console.log("data", mydata);

    const contract = await getAbiAddress();
    const currentAccount = await getCurrentAccount();
    const add_info = await contract.methods
    .addProductBySupplier(mydata._tokenId,mydata._name,mydata._quantity,mydata._productExpiryDate,mydata._supplierPrice)
    .send({ from: currentAccount })
    console.log(add_info);
  };
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h4" align="center">
        Create Product
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid xs={6} item>
                <TextField
                  type="text"
                  inputRef={tokenId}
                  placeholder="tokenId=0"
                  label="TokenId"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  type="string"
                  inputRef={name}
                  label="name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  type="text"
                  inputRef={quantity}
                  name="mint"
                  label="quantity"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={6} item>
                <TextField
                  type="text"
                  inputRef={productexpireydate}
                  label="productexpireydate"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="text"
                  inputRef={supplierprice}
                  label="supplierprice"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={DisplayVal}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </React.Fragment>
  );
};

export default SupplierCreate;
