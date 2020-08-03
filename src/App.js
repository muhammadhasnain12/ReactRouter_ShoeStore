
import React from "react";
import './App.css'
import { GlobalProvider } from './context/GlobalState'

import {Header} from './components/Header'
import { Balanace } from './components/Home.js'
// import {IncomeExpense} from './components/IncomeExpense'
import {LaunchStore} from './components/Launch_Store'
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // Outlet,
  // useParams
} from "react-router-dom";

export default function App() {
  
  return (
    <div className="body">
     
    <Router>
       {/* <nav className="text-center">
        <Link to="/" className="btn btn-success m-3">Home</Link>
        <Link className="btn btn-primary m-3" to="/launch">Launch</Link>
      </nav>  */}
      
      <Header/>
     {/* <Balanace/> */}
     {/* <TransactionList/> */}
    
     <GlobalProvider>
     
     
                            <br />
        <Routes>
        <Route path="/" element={<Balanace />} />
        <Route path="launch" element={<LaunchStore/>}/>
          {/* <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </GlobalProvider>
      
    </Router>
    {/* <Transaction/> */}
    </div>
  );
}

function NotFound() {
  return (
    <div>
      <h1>Not found!</h1>
      <p>Sorry your page was not found!</p>
    </div>
  );
}

// function Home() {
//   return (
//     <div>
//       <h1>Welcome Home!</h1>
//     </div>
//   );
// }

// function Launch() {
//   return (
//     <div className="body">
//       <h1>Launch</h1>

//       <Outlet />
//     </div>
//   );
// }

// function LaunchIndex() {
//   return (
//     <ul>
//       {Object.entries(shoes).map(([slug, { name, img }]) => (
       
//         <li key={slug}>
//           <Link to={`/launch/${slug}`}>
//             <h2>{name}</h2>
//             <img src={img} alt={name} style={{width: '10%'}}/>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// }

// function LaunchShoe() {
//   const { slug } = useParams();
//   const shoe = shoes[slug];
//   console.log(slug)
//   if (!shoe) {
//     return <h2>Not Found!</h2>;
//   }

//   const { name, img } = shoe;

//   return (
//     <div>
//       <h2>{name}</h2>
//       <img src={img} alt={name} style={{width: '10%'}} />
//     </div>
//   );
// }

