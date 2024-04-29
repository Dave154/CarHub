import styles from './taskbar.module.css'
import {useGlobe} from '../context.jsx'
const Drop=({type,drop})=>{
	
	const {handleSubmit,searchOnClick,searchIndex,handleKeyDown,listRef} = useGlobe()	
	return<div className={`${styles.searchdropDown} ${type.length === 0 && styles.hidden} ${drop.length === 0 && styles.hidden}`}>
		        <ul className={`${styles.list} `} onKeyDown={handleKeyDown} tabIndex={0} ref={listRef}>
			 		{drop.map((item,index)=>{
						return <li key={index} className={`${styles.list_items} ${index === searchIndex && styles.active}`} onClick={(e)=>searchOnClick(e.target.textContent)}>{item}</li>
					})}
		        </ul>
	</div>
}

export default Drop