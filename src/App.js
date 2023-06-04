import { Component } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import SignInPage from './pages/AuthPages/SignInPage/SignInPage';
import SignUpPage from './pages/AuthPages/SignUpPage/SignUpPage'
import Logout from './functions/Logout.js'


import './App.css';





import MainPage from './pages/MainPage/MainPage';
import AdminPage from './pages/AdminPage/AdminPage';

export class App extends Component {
  render() {
      return (
          <BrowserRouter>
            <div>
              <Routes>
                <Route path="/" element={<MainPage/>} />
                <Route path="/admin" element={<AdminPage/>} />
                <Route path="/signin" element={<SignInPage/>} />
                <Route path="/signup" element={<SignUpPage/>} />
                <Route path="/logout" element={<Logout/>} />


              </Routes>
            </div>
          </BrowserRouter>
      )
  }
}

export default App

// function App() {


//   const [users,setUsers] = useState(null)

//   const [modalVisible,setModalVisible] = useState(true)

//   // const handleModalClick = () => { setModalVisible(!modalVisible)}
//   const handleModalClose = () => { setModalVisible(false)}

//   useEffect(() => {
//     const getData = async () => {
//       const docRef = doc(db, "users", "0fzYH87kAJ9YrWhILkEk");
//       const docSnap = await getDoc(docRef);
//       if (docSnap.exists()) {
//         setUsers(docSnap.data());
//       } else {
//         console.log("No such document!");
//       }
//     }
//     return () => {getData()}
//   },[])

//   console.log(users)

//   return (

//     <div className='App'>
//       <div>hello</div>

//       <AnimatePresence>
//             { modalVisible && <UserModal 
//                 showModal={modalVisible}
//                 handleClose={handleModalClose}
//                 /> }
//         </AnimatePresence>
//     </div>
//   );
// }

// export default App;
