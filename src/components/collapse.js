import React from 'react'
import "./collapse.css"


const Collapse = (props) => {
    
    const [isCollapsed, setIsCollapsed] = React.useState(true);
  
    return (
      <>
        <button
          className="block w-full font-cabinet font-medium text-mobile mb-mob-work text-left ml-mob-sides mr-mob-sides"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {props.prjName}
        </button>
        <div
          className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
          aria-expanded={isCollapsed}
        >
            <img className='w-screen mb-mob-work' src={props.prjImage}/>
        </div>
      </>
    );
  };

  export default Collapse