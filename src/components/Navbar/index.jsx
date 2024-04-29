import {FaCar} from 'react-icons/fa6'
import {IoMdNotifications} from 'react-icons/io'
import {BiSolidMessageSquareDots} from 'react-icons/bi'
import {IoIosArrowDown} from 'react-icons/io'
import styles from './navbar.module.css'
import testProfile from '../../assets/testphoto.jpg'
import {useGlobe} from '../context.jsx'
const Nav = ()=>{
	const {handleSubmit}=useGlobe()
	return <header className={`${styles.header}`}>
		<nav className={`${styles.nav} flex` }>
			 <div className={styles.nav_left}>
			 	Something Goes Here
			 </div>
			 <a href="#" className={`${styles.logo} flex`}>
			 	<span className={styles.logo_car}>{<FaCar/>}</span>
			 	<h1>CarHub</h1>
			 </a>
			 <div className={`${styles.nav_right} flex`}>
			 	<span className={styles.message}>
			 	<p className='flex'>	4</p>
			 	<BiSolidMessageSquareDots/>
			 	</span>
			 	<span className={styles.notification}>
			 	<p className='flex'>4</p>
			 	<IoMdNotifications/>
			 	</span>
			 	<div className={`${styles.profile} flex`}>
			 		<span className={styles.profile_photo}>
			 			<img src={testProfile} alt=""/>
			 		</span>
			 		<span className={styles.arrow}><IoIosArrowDown/></span>
			 	</div>
			 	<button className={styles.need_help}>
			 		Need Help?
			 	</button>
			 </div>
		</nav>
	</header>


}
export default Nav