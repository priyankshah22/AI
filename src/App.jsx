import React from 'react';
import TopMenu from './TopMenu';
import UploadFile from './UploadFile';
import SelectApp from './SelectApp';
import './styles.css';
import SearchBox from './SearchBox';
import { useState, useEffect } from 'react'
import ToggleLeftSide from './ToggleLeftSide';
import Messages from './Messages';
import Suggestion from './Suggestion';

const App = () => {
  const [showSuggestion, setShowSuggestion] = useState(true);
  const [showSideNav, setShowSideNav] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1026) {
        setShowSideNav(false);
      } else {
        setShowSideNav(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const handleSendMessages = async () => {
    const response = "response fpioewfopeifwpeoifewfiewpoitest";
    setMessages([
      ...messages,
      { text: input, isUser: true },
      { text: response, isUser: false },
    ]);
    setInput("");
    setShowSuggestion(false);

  };
  return (
    <>
      <main className="mainContainer">
        <div className="topMenu">
          <ToggleLeftSide onClick={() => setShowSideNav(!showSideNav)} isOpen={showSideNav} />
          <TopMenu />
        </div>

        <div className="pageBody">
          {showSideNav && (<>
            <div className="sideNav">
              <SelectApp />
              <UploadFile />

            </div>
          </>)}

          <div className="chatWindow">
            <div className="conversationContainer">
              {showSuggestion && <Suggestion />}
              <Messages messages={messages} />
            </div>
            <div className="promptContainer">
              <SearchBox onSend={handleSendMessages} input={input} setInput={setInput} />
            </div>

          </div>
        </div>
      </main>
    </>
  );

}

export default App;




























// import UploadFile from './UploadFile';
// import SelectApp from './SelectApp';
// import ChatContainer from './ChatContainer';
// import './styles.css';
// import ToggleLeftSide from './ToggleLeftSide';
// import { useState, useEffect } from 'react';
// import RightSideUpload from './RightSideUpload';

// const App = () => {
//   //handle left side menu state
//   const [showLeftSide, setShowLeftSide] = useState(true);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 1026) {
//         setShowLeftSide(false);
//       } else {
//         setShowLeftSide(true);
//       }
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);


//   return (
//     <>
//       <main className="mainContainer">
//         <div className="TopMenu">

//         </div>
//         .


// </main>


//     </>
//   );
// }

// //   return (
// //     <>

// //       <main className="container">
// //         <div className="leftContainer">
// //           <ToggleLeftSide onClick={() => setShowLeftSide(!showLeftSide)} isOpen={showLeftSide} />
// //           {showLeftSide && (<>
// //             <div className="leftSide">
// //               <div>
// //                 <SelectApp />
// //               </div>
// //               <div >
// //                 <UploadFile />
// //               </div>


// //             </div>
// //           </>
// //           )}
// //         </div>


// //         {/* LEFT VS RIGHT */}
// //         <div className="rightSide">
// //           <h1 className="title">Automated AI Assistant</h1>
// //           <div >
// //             <ChatContainer />
// //           </div>
// //         </div>

// //       </main>

// //     </>

// //   );
// // }
// export default App;