

import React,{useContext,useState,useEffect,useReducer,useRef} from 'react'
const AppContext = React.createContext()
import data from './data.jsx'


const newPrice = (price)=>{
		if(price >= 1000000){
			return (price/1000000).toFixed(2) + 'M'
		}else{
			return price.toLocaleString()
	}

}

const price = data.reduce((prices, item)=>{
	if(item.price > prices.max){
       prices.max = item.price
	}
	if(item.price < prices.min){
		prices.min = item.price
	}
	
	return prices;
},{
	max:-Infinity,
	min:Infinity
})
const reducer =(state,action)=>{
 switch(action.type){
 		
 		case 'SEARCH_VALUE':
 			return{...state, search:action.payload.value,searchdropDown:action.payload.temp.slice(0,4),searchIndex:null}
 			break;
 		
 		case 'SUBMIT_SEARCH':
 			const newCards=state.cards_after_filter.filter(item=>{ 
 				if(item.Make.concat( ' ',item.Model.concat(' ',item['Year of manufacture'])).toLowerCase().includes(state.search.toLowerCase()))
 					return item
 			})
 			return {...state, cards:newCards,searchdropDown:[]}
 			break;
 		case 'SEARCH_ON_CLICK':
 			  const newCards2=state.cards_after_filter.filter(item=>{ 
 				if(item.Make.concat( ' ',item.Model.concat(' ',item['Year of manufacture'])).toLowerCase().includes(action.payload.toLowerCase()))
 					return item
 			})
 			return {...state, cards:newCards2,searchdropDown:[],search:action.payload}
 			break;
 		case 'DOWN':
 			return{...state, searchIndex:state.searchIndex === null ? 0 : Math.min(state.searchIndex + 1, 3)}
 		break;
 	case 'UP':
 		return{...state, searchIndex:state.searchIndex=== null ? 0 : Math.max(state.searchIndex - 1,0)}
 		break;
 	case 'AUTO_COMPLETE':
         const auto_complete = state.searchIndex !== null ? state.searchdropDown[state.searchIndex] : state.search
         console.log(state.searchIndex,  state.searchdropDown[state.searchIndex] )
 		 return{...state,search:auto_complete }
 		 break;
 		case 'AUTOMATIC':
 			return{...state,filterForm:{...state.filterForm,automatic:action.payload}}
 			break;
 		case 'CONDITION':
 			return{...state,filterForm:{...state.filterForm,condition:action.payload}}
 		case 'ALL_BRAND' :
 			return{...state,filterForm:{...state.filterForm,all_brand:action.payload,checkboxes:[]}}
 			break;
 		case 'BRANDS':
 			const updatebrands=state.filterForm.checkboxes.includes(action.payload) ? [...state.filterForm.checkboxes].filter(checkbox=> checkbox !== action.payload): [...state.filterForm.checkboxes,action.payload] 
 			return {...state,filterForm:{...state.filterForm,all_brand:false,checkboxes:updatebrands}}
           break;
       case 'MIN':
       	return {...state,filterForm:{...state.filterForm,minPrice:action.payload}}
       	break;
       case 'MAX':
       	return {...state,filterForm:{...state.filterForm,maxPrice:action.payload}}
       	break;
       case 'RESET' : 
       	return {...state,filterForm:{
       		    condition:'',
				automatic:false,
				minPrice:price.min,
				maxPrice:price.max,
				checkboxes:[],
				all_brand:true,
       	}}
       case 'SORT':
       
       	return{...state,currentSort:action.payload}
       	break;

       case 'OPEN_SORT':

       	return {...state,sortOpen:true}
       	break;
       	  case 'CLOSE_SORT':

       	return {...state,sortOpen:false}
       	break;

       case 'SUBMITFORM' :

       	const temp = state.filterForm
       	const newFilters= [temp.condition !== '' && temp.condition,temp.automatic && 'Automatic',`${newPrice(temp['minPrice'])}--${newPrice(temp['maxPrice'])}`,].filter(item=>item !== false)
        const filteredCards = data.filter(card=>{
	 		return card.price >= temp.minPrice 
	 		 && card.price <=temp.maxPrice
	 		 &&( temp.condition ? card.Condition.toLowerCase() === temp.condition : card.Condition )
	 		 &&  (temp.automatic ? card['gear type'].toLowerCase() === 'automatic' : card['gear type'])
	 		 && (temp.all_brand ? card.Make: temp.checkboxes.find(box=> box === card.Make))

	 
          
       	})

       	return{...state,
       	search:'',
       	filterForm:
       	{...state.filterForm,
       	minPrice:( state.filterForm.minPrice < price.min || state.filterForm.minPrice > price.max ? price.min: state.filterForm.minPrice),
       	maxPrice:( state.filterForm.maxPrice > price.max ||state.filterForm.maxPrice < price.min  ? price.max: state.filterForm.maxPrice)
       },
       	cards:filteredCards,

       	cards_after_filter:filteredCards,
       	filters:newFilters,

       }
       	break;

 		default:
 			throw new Error('NO MATCHING TYPE');
 }

}


const initialState = {
	cards_after_filter:data,
	cards:[],
	searchdropDown:[],
	sortArr:['Recommended', 'A to Z', 'Z to A'],
	sortOpen: false,
	currentSort:'Recommended',
	make: [... new Set(data.map(item=>item.Make))],
	search:'',
	filters:[],
	searchIndex:null,
	filterForm:{
				condition:'',
				automatic:false,
				minPrice:price.min,
				maxPrice:price.max,
				checkboxes:[],
				all_brand:true,

	}
}


const AppProvider =({children})=>{
	const [state,dispatch]=useReducer(reducer,initialState)
	const listRef = useRef(null)
    const searchoptions =[... new Set(state.cards_after_filter.map(item=>item.Make)),... new Set(state.cards_after_filter.map(item=>item.Make.concat( ' ',item.Model))),... new Set(state.cards_after_filter.map(item=>item.Make.concat( ' ',item.Model.concat(' ',item['Year of manufacture'])))) ]



const sort =(arr)=>{
  if(state.currentSort === 'A to Z'){
  	return  arr.sort((a,b)=> a.Make.concat( ' ',a.Model.concat(' ',a['Year of manufacture'])).toLowerCase().localeCompare(b.Make.concat( ' ',b.Model.concat(' ',b['Year of manufacture'])).toLowerCase()));
  }else if(state.currentSort === 'Z to A'){
  	return arr.sort((a,b)=> b.Make.concat( ' ',b.Model.concat(' ',b['Year of manufacture'])).toLowerCase().localeCompare(a.Make.concat( ' ',a.Model.concat(' ',a['Year of manufacture'])).toLowerCase())); 		
  }else if(state.currentSort === 'Recommended'){
  	return arr;
  }
}




const handleInputChange=(e)=>{
	const {name ,value,type,checked}= e.target
	if(type ==='checkbox'){
		if(name==='automatic'){
 			dispatch({type:'AUTOMATIC',payload:checked})
		}else if(name === 'all_brand'){
             dispatch({type:'ALL_BRAND' , payload:checked})
		}else{
			dispatch({type:'BRANDS',payload:value})
		}
	}
	if(type === 'radio'){

		dispatch({type:'CONDITION',payload:value})
	}
	if(type === 'number'){
		if(name === 'min'){
		dispatch({type:'MIN',payload:value})	
		}
		if(name === 'max'){
		dispatch({type:'MAX',payload:value})	
		}
	}

} 
	const handleSubmit= (e,id)=>{
		e.preventDefault()
      if(id ==='globesearch'){
		return 	dispatch({type:'SUBMIT_SEARCH'})
		}
			
	}
	const searchOnClick=(value)=>{
		dispatch({type:'SEARCH_ON_CLICK',payload:value})
	}
	const searchkeydown=()=>{

	}
	const handleSearch =(value,id)=>{
	    const temp =searchoptions.filter(item=>{
		 if(item.toLowerCase().includes(value.toLowerCase())){
			return item;
		   } 
	    })


		if(id ==='globesearch'){
			return dispatch({type:'SEARCH_VALUE',payload:{value,temp}})	
		}
	}

	const submitForm=(e)=>{
      e.preventDefault()
      dispatch({type:'SUBMITFORM'})
		
	}
	const reset=()=>{
		dispatch({type:'RESET'})
	}
   const handleopendrop=(e)=>{
   		if (e.key === 'ArrowDown'){
   			if(listRef.current){
   				listRef.current.focus()
   			}
   		}
   }
	const handleKeyDown =(e)=>{
		console.log(state.searchIndex)
		dispatch({type:'AUTO_COMPLETE'})

		if(e.key === 'ArrowDown'){
			console.log('down')
			dispatch({type:'DOWN',payload:state.searchdropDown.length - 1})
		}else if(e.key === 'ArrowUp'){
			dispatch({type:'UP'})
		}else if(e.key === 'Enter'){
			dispatch({type:'SEARCH_ON_CLICK',payload:state.searchdropDown[state.searchIndex]})
		}
	}

	const handleSort=(e)=>{
	dispatch({type:'CLOSE_SORT'})

		dispatch({type:'SORT' ,payload: e.target.textContent})
	}
	const openSort=()=>{
		dispatch({type:'OPEN_SORT'})
	}
	// const closeSort =()=>{
	// }

useEffect(()=>{
	 dispatch({type:'SUBMITFORM'})
	},[])
	return <AppContext.Provider value={
		{...state,
		handleInputChange,
		handleSubmit,
		handleSearch,
		searchOnClick,
		handleKeyDown,
		listRef,
		handleopendrop,
		handleSort,
		openSort,
		sort,
		 submitForm,
		newPrice,
		reset,
	}
}>{children}</AppContext.Provider>
}

const useGlobe=()=>{
	return useContext(AppContext)
}
export {AppContext ,AppProvider , useGlobe}