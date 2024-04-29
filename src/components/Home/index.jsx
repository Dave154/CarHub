import TaskBar from '../TaskBar'
import SideBar from '../sideBar'
import CarPage from '../carpage'


const Home =()=>{
	return<>
	<TaskBar/>
	<section className='temp_section flex' >
	<SideBar/>
  	 <CarPage/>
	</section>

	</>
}
export default Home