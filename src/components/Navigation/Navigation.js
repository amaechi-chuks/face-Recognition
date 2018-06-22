import React from 'react';



const Navigation = ({onRouteChange, isSignIn}) => {
    if (isSignIn) { 
        return ( 
     <nav style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px', border: '3px', borderRadius: '10px', fontWeight: '10%' }}>
            <p onClick={() => onRouteChange('SignOut')}
            className=' f3 br5 b5 dim black pa3 pointer'>SignOut</p>
        </nav>
        )
        }else{ 
            return(
        <nav style={{ display: 'flex', justifyContent: 'flex-end', paddingRight: '20px', border: '3px', borderRadius: '10px', fontWeight: '10%' }}>
        <p onClick={() => onRouteChange('SignIn')}className=' f3 br5 b5 dim black pa3 pointer'>SignIn</p>
        <p onClick={() => onRouteChange('Register')} className=' f3 br5 b5 dim black pa3 pointer'>Register</p>
        
    </nav>
  
        );

        }
    
}
export default Navigation;