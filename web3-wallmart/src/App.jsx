import { Route, Routes } from "react-router-dom";
import CustomerPurchase from "./components/customer/customer-purchase.component";
import CustomerRequest from "./components/customer/customer-request.component";
import FetchCusProduct from "./components/customer/fetch-custproduct.component";
import MiniDrawer from "./components/drawer/drawer-header.component"
// import HeaderApp from "./components/header/header-app.component"
import SellerApprove from "./components/supplier/approve-walllmart.component";
import SupplierCreate from "./components/supplier/create_product.component";
import FetchSupProduct from "./components/supplier/fetch-product.component";
import View from "./components/view/view-prod-sale.component";
import WallmartRequest from "./components/wallmart/create-request-page.component";
import FetchWalProduct from "./components/wallmart/fetch-walproduct.component";
import Display from "./components/admin/get-allProduct.component";
import WallmartPurchase from "./components/wallmart/purchase-bywallmart.component";
import WallmartApprove from "./components/wallmart/wallmart-response.component";
import Balance from "./components/admin/balanceof.component";
import FunctionWal from "./components/wallmart/button/buy-funcWallmart";
// import SupplierList from "./list/list-sup.component";
// import CustumerList from "./list/list-cus.component";
// import DrawerComponent from "./components/drawer/drawer_header.component";
// import MiniDrawer from "./components/drawer/drawer_header.component";

function App() {

  return (
    <>
      {/* <HeaderApp/> */}
      <MiniDrawer/>
      <Routes>
      
        <Route path="/res" element={<SupplierCreate/>} />
        <Route path="/walreq/:id" element={<WallmartRequest />} />
        <Route path="/sellapp/:id" element={<SellerApprove/>} />
        <Route path="/purwal/:id" element={<WallmartPurchase />} />
        <Route path="/get" element={< Display/>} />
        <Route path="/view" element={<View />} />
        <Route path="/fetchsp" element={<FetchSupProduct />} />
        <Route path="/fetchwp" element={<FetchWalProduct />} />
        <Route path="/fetchcp" element={<FetchCusProduct/>} />
        <Route path="/cusr" element={< CustomerRequest/>} />
        <Route path="/wala" element={< WallmartApprove/>} />
        <Route path="/purc" element={< CustomerPurchase/>} />
        <Route path="/bal" element={<Balance/>} />
        <Route path="/path" element={<FunctionWal/>} />
      </Routes>
    </>
  )
}

export default App


// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="App">
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src="/vite.svg" className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://reactjs.org" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </div>
//   )
// }

// export default App