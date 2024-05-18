import styles from './taskbar.module.css'

import {CiSearch} from 'react-icons/ci'
import {useGlobe} from '../context.jsx'
import Drop from './searchdropdown.jsx'
import {FiArrowLeft} from 'react-icons/fi'
const Search =({id,type,drop,placeholder})=>{
	const{handleSubmit,handleSearch,handleopendrop,openSearch,closeSearch,searchActive}=useGlobe();
	return <section className={`${styles.searchContainer} ${searchActive && styles.active}`}>	
	 <form  className={`${styles.search} flex`} onSubmit={(e)=>handleSubmit(e,id)} onKeyDown={handleopendrop}>
		<div onClick={openSearch} className='flex'>
			
			<i className={`${styles.search_icon}`} ><CiSearch/></i>
			<input  type="search" autoFocus className={`${styles.search_box} ${searchActive && styles.search_box_active}`} value={type} onClick={(e)=>{handleSearch(e.target.value,id)}} onChange={(e)=>handleSearch(e.target.value,id)} placeholder={placeholder} />
		</div>
			<Drop 
			type={type}
			drop={drop}
			/>
		<i onClick={closeSearch} className={`${!searchActive && styles.closeSearch_hidden} ${styles.closeSearch}`}>Cancel</i>
		</form>
	</section>
}

export default Search