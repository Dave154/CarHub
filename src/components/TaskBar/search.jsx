import styles from './taskbar.module.css'

import {CiSearch} from 'react-icons/ci'
import {useGlobe} from '../context.jsx'
import Drop from './searchdropdown.jsx'

const Search =({id,type,drop,placeholder})=>{
	const{handleSubmit,handleSearch,handleopendrop}=useGlobe();
	return <form  className={`${styles.search} flex`} onSubmit={(e)=>handleSubmit(e,id)} onKeyDown={handleopendrop}>
			<i className={`${styles.search_icon}`}><CiSearch/></i>
			<input  type="search" autoFocus className={styles.search_box} value={type} onClick={(e)=>{handleSearch(e.target.value,id)}} onChange={(e)=>handleSearch(e.target.value,id)} placeholder={placeholder} />
			<Drop 
			type={type}
			drop={drop}
			/>
		</form>
}

export default Search