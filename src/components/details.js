import React, {useState} from 'react'
import { Link } from "gatsby";


const Details = (props) => {
    
    const [isCollapsed, setIsCollapsed] = useState(true);
  
    return (
      <div>
        <button className='md:block hidden font-cabinet font-medium text-mobile mb-mob-work text-left ml-mob-sides mr-mob-sides md:flex-col md:ml-0 md:mr-0'>
          <Link to='projects'>
          <span>{props.prjName}</span>
          <span className='block'> Various</span>
          <span className='block'> 2021</span>
          </Link>
        </button>
        <button
          className="block font-cabinet font-medium text-mobile mb-mob-work text-left ml-mob-sides mr-mob-sides md:flex-col md:ml-0 md:mr-0 md:hidden"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          <span>{props.prjName}</span>
        </button>
        <div
          className={`${isCollapsed ? 'hidden' : 'block md:hidden'}`}
        >
            <Link to='projects'>
            <img className='w-screen mb-mob-work' src={props.prjImage} alt='Project Visuals'/>
            </Link>
        </div>
      </div>
    );
  };

  export default Details