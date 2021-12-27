import React from 'react'
import "./collapse.css"
import { Link } from "gatsby";


const Collapse = (props) => {
    
    const [isCollapsed, setIsCollapsed] = React.useState(true);
  
    return (
      <>
        <button
          className="block font-cabinet font-medium text-mobile mb-mob-work text-left ml-mob-sides mr-mob-sides"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {props.prjName}
        </button>
        <div
          className={`collapse-content ${isCollapsed ? 'collapsed' : 'expanded'}`}
          aria-expanded={isCollapsed}
        >
            <Link to='projects'>
            <img className='w-screen mb-mob-work' src={props.prjImage} alt='Project Visuals'/>
            </Link>
        </div>
      </>
    );
  };

  export default Collapse