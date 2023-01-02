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

const WallmartApprove = () => {
    const customerRequestID = useRef();
    const isApproved = useRef();
    
  const DisplayVal = async () => {
    const mydata = {
        _customerRequestID: customerRequestID.current.value,
        _isApproved: isApproved.current.value,
      };
      console.log("data", mydata);
    const web3 = new Web3(Web3.givenProvider);
    const contract = new web3.eth.Contract(abi, address);
    const Accounts = await web3.eth.getAccounts();
    const request = await contract.methods
    .wallmartResponseToCustomer(mydata._customerRequestID,mydata._isApproved)
    .send({ from: Accounts[0] })
    console.log(request);
  };
  return (
    <React.Fragment>
      <Typography gutterBottom variant="h4" align="center">
      Wallmart Approve
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Grid container spacing={1}>
              <Grid xs={12} item>
                <TextField
                  type="text"
                  inputRef={customerRequestID}
                  placeholder="tokenId=0"
                  label="customerRequestID"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              
              <Grid xs={12} item>
                <TextField
                  type="text"
                  inputRef={isApproved}
                  label="Approved"
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

export default WallmartApprove;
