import styles from './sidebar.module.css'
import {LiaShipSolid} from 'react-icons/lia'
import {TbCurrencyNaira} from 'react-icons/tb'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import {FiArrowLeft} from 'react-icons/fi'
import {useGlobe} from '../context.jsx'
import {useState} from 'react'

const SideBar = ()=>{
	const{isSideOpen,closeSide,submitForm,make,newPrice,filterForm,handleInputChange,reset}= useGlobe()
   const {automatic,condition,minPrice,maxPrice,checkboxes,all_brand} =filterForm

	const [showMore,setShowMore] = useState(false)
const toggleShowMore=()=>{
	setShowMore(!showMore)
}

	return <aside className={`${styles.sideBar} ${!isSideOpen && styles.sideBar_hidden}`}>
	<form>
		
		<div className={`${styles.filter_reset} flex`}>
		    <i onClick={closeSide} className={styles.closeSide}><FiArrowLeft/></i>
			<h4>Filter </h4>
			<button type='reset' onClick={reset}>Reset</button>
		</div>
		<div className={`${styles.automatic} flex`}>
			<span className='flex'><LiaShipSolid className={styles.ship}/><p>Automatic</p></span> 
			<label htmlFor="automatic" className={styles.switch}>
				<input
			    type="checkbox" 
				id='automatic'  
				name='automatic'  
				checked={automatic} 
				onChange={handleInputChange}/>
				<span className={styles.slider}></span>
			</label>
		</div>
		<div className={`${styles.car_types}`}>	
			<h4>Type of Car</h4>
			<div className={`${styles.button} flex`}>

			<input type="radio" 
			id='nigerian' 
			name='condition' 
			value='nigerian used'
			checked={condition === 'nigerian used'}
			onChange={handleInputChange}
			/>
			<label htmlFor="nigerian">Nigerian Used </label>

			<input 
			  type="radio"
			  id='foreign'
			  name='condition' 
			  value='foreign used'
			  checked={condition === 'foreign used'}
			  onChange={handleInputChange}
			  />
			<label htmlFor="foreign">Foreign Used</label>
			</div> 
		</div>
		<div className={`${styles.brand_container}`}>
			<h4>Brand</h4>
			<div className={styles.brands}>
				<span className={`${styles.brand} flex`}>
					<p>All Brand</p>
					<input
					 type="checkbox" 
					 name='all_brand'  
					 checked={all_brand}
					 onChange={handleInputChange}
					 />				
				</span >
				{make.slice(0, showMore ? make.length:3).map((item,index)=>{ 			 	      
				return <span key={index} className={`${styles.brand} flex`}>
					<p>{item}</p>
					<input
					 type="checkbox"
					 name='brand' 
					 value={item} 
					 checked={checkboxes.includes(item)}				
					 onChange={handleInputChange} 
					 />
			</span>
				})}
				<span className={styles.showMore} onClick={toggleShowMore}>{showMore ? <p>Less Brand <i><IoIosArrowUp/></i></p> : <p>More Brand <i><IoIosArrowDown/></i></p>}</span>
			</div>
		</div>
		<div className={styles.price_range}>
		<h4>Price Range</h4>
		<div className={`${styles.minmax} flex`}>
		  <span>	

			<label htmlFor="min"><TbCurrencyNaira className={styles.naira}/></label>
			<input type="number" id='min'name='min' value={minPrice} onChange={handleInputChange}/>
		  </span>
		  <span>	

			<label htmlFor="max"><TbCurrencyNaira className={styles.naira}/></label>
			<input type="number" id='max'name='max' value={maxPrice} onChange={handleInputChange}/>
		  </span>
		</div>
	    
		</div>
		
		<button type='submit' className={styles.apply} onClick={submitForm}>Apply</button>
	</form>
	</aside>
}

export default SideBar