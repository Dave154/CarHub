import styles from './taskbar.module.css'
import {CiSearch} from 'react-icons/ci'
import {IoIosArrowDown} from 'react-icons/io'
import {FaFilter} from 'react-icons/fa6'
import {IoFilter} from 'react-icons/io5'
import {useGlobe} from '../context.jsx'
import Search from './search.jsx'
import Drop from './searchdropdown.jsx'
import{ NavLink , useNavigate} from "react-router-dom"
const TaskBar=()=>{
	const{
	currentViewListOpen,
	currentView,
	handleCurrentView,
	updateCurrentView,
	isSideOpen,
	toggleSide,
	closeSide,
	handleSubmit,
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
	return<section className={`${styles.taskbar} flex`}>
		<div className={`${styles.task_left} flex`}>
			<div className={`${styles.task_left_min}`} onClick={handleCurrentView}>
			   <span className={styles.currentView}>{currentView}</span>
			   <i><IoIosArrowDown/></i>
			</div>
	<div className={`${styles.task_left_links} ${!currentViewListOpen && styles.task_left_links_hidden }`}>		
		<NavLink to='/'>	
			<button className={styles.buy} onClick={updateCurrentView}>
				Buy Car
			</button>
		</NavLink>
		<NavLink to='/rent'>	

			<button className={styles.rent} onClick={updateCurrentView}>
				Rent Car
			</button>
		</NavLink>
			</div>
		</div>
		<Search 
		id='globesearch'
		type={search}
		drop={searchdropDown}
		placeholder='Find Car Here'
		/>
		<div className={`${styles.filterContainer} flex`}>
			
		<i onClick={toggleSide} ><FaFilter/></i>
	<div className={`${styles.filter} flex` }>
		<button onClick={()=>{
			if (sortOpen) {
				closeSort()
			}else{
			openSort()
				
			}
		}
	} className={`${styles.opensort} flex`}>
			<span>Sort by : </span>
			 <p className={styles.currentSort}>{currentSort}</p>
				<i><IoFilter/></i>
		</button>
		<div className={styles.sortCont}>
		<ul className={`${styles.list} ${!sortOpen && styles.hidden}`}>
			{sortArr.map((item,index)=>{

			return <li key={index} className={styles.list_items} onClick={handleSort}>
				<p>{item.txt}</p>
			</li>
			})}
		</ul>
		</div>
			

		</div>
		</div>
	</section>
}
export default TaskBar