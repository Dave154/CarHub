import styles from './carpage.module.css'
import {TbCurrencyNaira} from 'react-icons/tb'
import {BsBookmarkDashFill} from 'react-icons/bs'
import {useGlobe} from '../context.jsx'
import testPhoto from '../../assets/testphoto.jpg'
 const Card =({Make,Model,price,car,"Year of manufacture":Year,'gear type':gear,image})=>{
 	
    const {newPrice}=useGlobe()

 	return <article className={`${styles.card}`}>
 		<div  className={styles.card_content}>
 			<div className={styles.name}>
 			<span>
 				<h4> {Make} {Model} {Year}</h4>
 			{car && <span className={styles.tag}>{car}</span>	}
 			</span>
 			<span>
 				<i className={styles.bookmark}><BsBookmarkDashFill/></i>
 			</span>
 			</div>
 			<div className={styles.card_image}>
 				<img src={image ? image : testPhoto} alt="" />
 			</div>
 			<div className={styles.card_bottom}>
 				<span className={styles.tag}><i></i>{gear}</span>

	 		<span className={styles.price}> 
	 			<i><TbCurrencyNaira/></i> 
	 			<h3>{newPrice(price)}</h3>
	 		</span>
 			</div>
 		</div>
 	</article>
 }
 export default Card