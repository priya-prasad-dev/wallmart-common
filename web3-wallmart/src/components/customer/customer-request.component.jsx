import React, { useRef } from "react";
import Web3 from "web3";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import { abi, address } from "../../contract/config";
const CustomerRequest = () => {
    const tokenId = useRef();
    const quantity = useRef();
   
  const CustomerVal = async () => {
    const mydata = {
        _tokenId: tokenId.current.value,
        _quantity: quantity.current.value,
      };
      console.log("data", mydata);
    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(abi, address);
    const Accounts = await web3.eth.getAccounts();
    const request = await contract.methods
    .requestByCustomer(mydata._tokenId,mydata._quantity)
    .send({ from: Accounts[0] })
    console.log(request);
  };
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h4" align="center">
      Customer Request 
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  type="text"
                  inputRef={tokenId}
                  label="customerRequestID"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>             
              <Grid xs={12} item>
                <TextField
                  type="text"
                  inputRef={quantity}
                  label="quantity"
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
                  onClick={CustomerVal}
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

export default CustomerRequest;
