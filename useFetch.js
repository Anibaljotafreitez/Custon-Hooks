import React, { useEffect, useState } from 'react'


const localCache={};

export const useFetch = (url) => {


  const [state, setState] = useState({
    data:null,
    isLoading:true,
    hasError:false,
    error:null,
  });

  const setIsloadingUrl=()=>{
    setState({
      data:null,
      isLoading:true,
      hasError:false,
      error:null,
    })
  }

  const getFetch= async()=>{
    if(localCache[url]){
      setState({
        data:localCache[url],
        isLoading:false,
        hasError:false,
        error:null,
      })
      return;
    }

    setIsloadingUrl();

    const resp= await fetch(url);

    await new Promise((resolve=>setTimeout(resolve,500)));

    if(!resp.ok){
      setState({
        data:null,
        isLoading:false,
        hasError:true,
        error:{
          code: resp.status,
          message:resp.statusText,
        }
      })
      return;
    }
    const data= await resp.json();
    setState({
      data:data,
      isLoading:false,
      hasError:false,
      error:null,
    })
    
  // justo aca sera el manejo del cache
    localCache[url]=data;

  }

useEffect(() => {
  
getFetch();


}, [url])



  return {
    data:state.data,
    isLoading:state.isLoading,
    hasError:state.hasError,

  }
}
































// import { useEffect, useState } from "react";


// export const useFetch = (url) => {

// const [state, setState] = useState({
//     data:null,
//     isLoading:true,
//     hasError:false,
//     error:null,

// })

// useEffect(() => { 
//   getFetch()

// }, [url])

// const setIsloadingUrl=()=>{
// setState({
//     data:null,
//     isLoading:true,
//     hasError:false,
//     error:null,
// })
// }

// const getFetch=async()=>{
//   setIsloadingUrl(); 

//     const resp= await fetch(url);
//     if(!resp.ok){
//       setState({
//         data:null,
//         isLoading:false,
//         hasError:true,
//         error:{
//           code:resp.status,
//           message:resp.statusText,
//         },
//       })
//       return;
//     }
//     const data = await resp.json();
//     console.log({data});
//     setState({
//         data:data,
//         isLoading:false,
//         hasError:false,
//         error:null,
//     })

// }
    

//   return {
//     data:state.data,
//     isLoading:state.isLoading,
//     hasError:state.hasError,
//   }
// }
