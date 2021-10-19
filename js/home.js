$(document).ready(function(){
    console.log('REady');
})

const accountSettingsBtn=document.getElementById('account');
accountSettingsBtn.addEventListener('click',function (){
    console.log('clicked');
    const settings=document.getElementById('accountSettings');
    if(settings.className==='hide'){
        settings.className='showSettings';
    }else{
        settings.className="hide";

    }
});

const menuBtn=document.getElementById('menuIcon');
menuBtn.addEventListener('click',function(){
    const sideBarLinks=document.getElementById('sideNavBarLinks');
    const sideBarTitles=document.getElementById("sideNavBarTitles");

   if( sideBarLinks.className==='hideTitles' && sideBarTitles.className==='hideTitles'){
    sideBarLinks.className='showTitles';
    sideBarTitles.className='showTitles';
    // document.getElementById("sideNavBar").style.width = "18%";
    document.getElementById("sideNavBar").style.animation = "showNavBar 1s";
        document.getElementById("sideNavBar").style.width = "18%";



   }
   else{
        document.getElementById("sideNavBar").style.animation = "hideNavBar 1s";
        document.getElementById("sideNavBar").style.width = "4%";
        sideBarLinks.className='hideTitles';
        sideBarTitles.className='hideTitles';
        document.getElementById('accountSettings').className='hide';
   }
});