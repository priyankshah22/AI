import React from 'react';
import UploadFile from './UploadFile';
import SelectApp from './SelectApp';
import ChatContainer from './ChatContainer';
import './styles.css';
import ToggleLeftSide from './ToggleLeftSide';
import { useState, useEffect } from 'react';
import RightSideUpload from './RightSideUpload';

const App = () => {
  const [showLeftSide, setShowLeftSide] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1026) {
        setShowLeftSide(false);
      } else {
        setShowLeftSide(true);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>

      <main className="container">
        <div className="leftContainer">
          <ToggleLeftSide onClick={() => setShowLeftSide(!showLeftSide)} isOpen={showLeftSide} />
          {showLeftSide && (<>
            <div className="leftSide">


              <div>
                <SelectApp />
              </div>
              <div >
                <UploadFile />
              </div>


            </div>
          </>
          )}
        </div>


        {/* LEFT VS RIGHT */}
        <div className="rightSide">
          <h1 className="title">Automated AI Assistant</h1>
          <div >
            <ChatContainer />
          </div>
        </div>

      </main>

    </>

  );
}
export default App;