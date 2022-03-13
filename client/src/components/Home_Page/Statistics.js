import React from 'react';
import Figure from './Figure';
import './Statics.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faIdCard, faUserGraduate, faUsers, faUserTie} from '@fortawesome/free-solid-svg-icons'

export default function Statistics() {
	let students={
		num:100,
		Icon: <FontAwesomeIcon icon={faUsers} />,
		item:'Student'
	}
	
	let Staff={
		num:200,
		Icon:<FontAwesomeIcon className='Icons' icon={faUserTie}/>,
		item:'Staff'
	}
	let Under_graduated_stu={
		num:300,
		Icon:<FontAwesomeIcon   icon={faUserGraduate}/>,
		item:'Under graduated Student'
	}
	let employee={
		num:400,
		Icon:<FontAwesomeIcon  icon={faIdCard}/>,
		item:'Employees'
	}
return <section className='Statics'>
    <div className='Title'>
        <h1>Statistics</h1>
	</div>
	<div className='Organize'>
	    <Figure item={employee.item}
		        Icon={employee.Icon}
			    num={employee.num} />
	    <Figure item={Staff.item} 
		        Icon={Staff.Icon} 
				num={Staff.num}/>
		<Figure item={Under_graduated_stu.item} 
		        Icon={Under_graduated_stu.Icon} 
				num={Under_graduated_stu.num}/>
		<Figure item={students.item} 
		        Icon={students.Icon}
			    num={students.num}/>
	</div>
	
	
</section>;
}
