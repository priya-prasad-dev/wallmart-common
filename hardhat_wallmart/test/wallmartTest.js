// const { expect } = require("chai");
const { ethers, waffle } = require("hardhat");
// const web3 = require("web3");
let assert = require("chai").assert;
const provider = waffle.provider;

describe("Wallmart testing", function () {
  let contract;
  let supplier, wallmart, customer;

  beforeEach(async function () {
    if (!contract) {
      if (!supplier) {
        [supplier, wallmart, customer] = await ethers.getSigners();
      }

      const Wallmart = await ethers.getContractFactory("Wallmart", {
        signer: supplier,
      });
      const wallmartContract = await Wallmart.deploy(wallmart.address);
      contract = await wallmartContract.deployed();
    }
  });

  it("Add Product", async function () {
    let productName = "Parle G";
    await contract.connect(supplier).addProductBySupplier(0, productName, 100, 1, 2);
    await contract.connect(supplier).addProductBySupplier(0, "Hide&Seek", 200, 1, 4);

    assert.equal((await contract.getProduct(1)).name, productName);
  });

  it("Request from wallmart to supplier", async function () {
    await contract.connect(wallmart).requestFromWallmart(1, 10);

    assert.equal((await contract.wallmartRequest(1)).quantity, 10);
  });

  it("supplier response to wallmart request", async function () {
    await contract.connect(supplier).sellerResponseToRequest(1, true);
    assert.equal((await contract.wallmartRequest(1)).status, 2); // Approved status
    console.log(
      "Initial Supplier balance/quantity ",
      await contract.balanceOf(supplier.address, 1)
    );
    console.log(
      "Initial Wallmart balanceOf / quantity ",
      await contract.balanceOf(wallmart.address, 1)
    );
    console.log(
      "Before purchase Amount(Ether) of Supplier & Wallmart:: ",
      await provider.getBalance(supplier.address),
      await provider.getBalance(wallmart.address)
    );
  });
  it("wallmart purchase from seller after approval", async function () {
    await contract.connect(wallmart).purchaseByWallmart(1, 3, {
      value: ethers.utils.parseEther("0.000000000000000020"),
    });
      console.log("sell",await contract.viewProductForSale());
    console.log(
      "Supplier balance ",
      await contract.balanceOf(supplier.address, 1)
    );
    console.log(
      "Wallmart balance ",
      await contract.balanceOf(wallmart.address, 1)
    );
    console.log(
      "Ether Before :: ",
      await provider.getBalance(supplier.address),
      await provider.getBalance(wallmart.address)
    );
  });

  it("Listing of all the Products", async function () {
    let productName = 'Parle G';
    //     await contract.connect(supplier).addProductBySupplier(0, productName, 100, 1, 2);
    //     await contract.connect(supplier).addProductBySupplier(0, 'Hide&Seek', 200, 1, 4);
    let products = await contract.getAllProducts();
    assert.equal(products[0].name,productName);

    assert(await contract.balanceOf(wallmart.address, 1), 10);
    assert(await contract.balanceOf(wallmart.address, 2), 0);
    await contract.connect(customer).requestProductByCustomer(1, 5);
    assert.equal((await contract.customerRequest(1)).quantity, 5);
    assert.equal((await contract.customerRequest(1)).status, 0);
  });

  it("Wallmart Accept Customer Request", async function () {
    await contract.connect(wallmart).shipForCustomerRequest(1, true);
    assert.equal((await contract.customerRequest(1)).status, 2);
    console.log(
      "Wallmart Check Amount(Ether) of Customer and Wallmart :: ",
      await provider.getBalance(customer.address),
      await provider.getBalance(wallmart.address)
    );
  });

  it("Customer receive Product", async function () {
    await contract.connect(customer).customerReceiveProduct(1, {
      value: ethers.utils.parseEther("0.000000000000000015"),
    });
    console.log(
      "Customer Check Amount(Ether) of Customer and Wallmart After Purchasing :: ",
      await provider.getBalance(customer.address),
      await provider.getBalance(wallmart.address)
    );
    assert.equal((await contract.customerRequest(1)).status, 3);
    assert.equal(await contract.balanceOf(supplier.address, 1), 90);
    assert.equal(await contract.balanceOf(wallmart.address, 1), 5);
    assert.equal(await contract.balanceOf(customer.address, 1), 5);
  });
});