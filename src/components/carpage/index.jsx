import styles from './carpage.module.css'
import {CiSearch} from 'react-icons/ci'
import Card from './card.jsx'
import {useGlobe} from '../context.jsx'
import Search from '../TaskBar/search.jsx'
 const CarPage =()=>{
 	const {cards,filters,newPrice,sort}= useGlobe()
	return<section className={styles.carpage}>
	 <div className={`${styles.carpage_top}`}>
	 	<h2 className={styles.no_of_cars}>
			{cards.length} Car{cards.length !== 1 && 's'} Found
		</h2>

		{/*<Search 
		id='search'
		type={search}
		drop={searchdropDown}
		placeholder='Find Car Here'

		/>*/}
		<div className={`${styles.filters} flex`}>

		{filters.map((filter,index)=>{

			return <span className={`${styles.filter} flex`} key={index}>
				{filter}
			</span>
		})}
			
		</div>

	 </div>
<div className={styles.carpage_bottom}>
	 <ul className={styles.carpage_list}>
	 	{sort(cards).map(item=>{
	 		return <Card key={item.car_id} {...item}/>
	 	})}

	 </ul>
</div>
	
		
	</section>
}
export default CarPage
