import styles from './taskbar.module.css'
import {CiSearch} from 'react-icons/ci'
import {IoFilter} from 'react-icons/io5'
import {useGlobe} from '../context.jsx'
import Search from './search.jsx'
import Drop from './searchdropdown.jsx'
import{ NavLink , useNavigate} from "react-router-dom"
const TaskBar=()=>{
	const{handleSubmit,
	search,
	handleSearch,
	searchdropDown,
	sortOpen,
	sortArr,
	currentSort,
	handleSort,
	openSort,
	closeSort
				}=useGlobe();
	console.log(sortOpen)
	return<section className={`${styles.taskbar} flex`}>
		<div className={`${styles.task_left} flex`}>
		<NavLink to='/'>	
			<button className={styles.buy}>
				Buy Car
			</button>
		</NavLink>
		<NavLink to='/rent'>	

			<button className={styles.rent}>
				Rent Car
			</button>
		</NavLink>
		</div>
		<Search 
		id='globesearch'
		type={search}
		drop={searchdropDown}
		placeholder='Find Brand Here'
		/>
		<div className={`${styles.filter} flex` }>
		<button onClick={openSort}>
			<span>Sort by : {currentSort}</span>

				<i><IoFilter/></i>
		</button>
		<div className={styles.filterCont}>
		<ul className={`${styles.list} ${!sortOpen && styles.hidden}`}>
			{sortArr.map((item,index)=>{
			return <li key={index} className={styles.list_items} onClick={handleSort}>
				{item}
			</li>
			})}
		</ul>
		</div>
			

		</div>
	</section>
}
export default TaskBar