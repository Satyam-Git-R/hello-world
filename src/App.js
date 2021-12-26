import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Join from "./components/Join/Join";
import Home from "./components/Home/Home";

function App() {

  return (
    <div className="App">
      <Router>
    <Routes>
        <Route exact path="/" element={<Join />} />
        <Route path="/home" element={<Home />} />
    </Routes>
      </Router>
    </div>
  );
}

export default App;
// import React from 'react';
// import './App.css';
// import {Pie, Doughnut} from 'react-chartjs-2';

// const state = {
//   labels: ['January', 'February', 'March',
//            'April', 'May'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       backgroundColor: [
//         '#B21F00',
//         '#C9DE00',
//         '#2FDE00',
//         '#00A6B4',
//         '#6800B4'
//       ],
//       hoverBackgroundColor: [
//       '#501800',
//       '#4B5000',
//       '#175000',
//       '#003350',
//       '#35014F'
//       ],
//       data: [65, 59, 80, 81, 56]
//     }
//   ]
// }

// export default class App extends React.Component {
//   render() {
//     return (
//       <div className="frm">
//       <div className="chart">
//         <Pie
//           data={state}
//           options={{
//             title:{
//               display:true,
//               text:'Average Rainfall per month',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//         </div>
//         <div className="chart">

//         <Doughnut
//           data={state}
//           options={{
//             title:{
//               display:true,
//               text:'Average Rainfall per month',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//       </div>
//       </div>  
//     );
//   }
// }


// import React from 'react'
// import './App.css';
// import React from 'react';
// import {Bar} from 'react-chartjs-2';

// const state = {
//   labels: ['January', 'February', 'March',
//            'April', 'May'],
//   datasets: [
//     {
//       label: 'Rainfall',
//       backgroundColor: 'rgba(75,192,192,1)',
//       borderColor: 'rgba(0,0,0,1)',
//       borderWidth: 2,
//       data: [65, 59, 80, 81, 56]
//     }
//   ]
// }

// export default class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Bar
//           data={state}
//           options={{
//             title:{
//               display:true,
//               text:'Average Rainfall per month',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//       </div>
//     );
//   }
// }

