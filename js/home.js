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
   if( sideBarLinks.className==='hideTitles'){
    sideBarLinks.className='showTitles';
    // document.getElementById("sideNavBar").style.width = "18%";
    document.getElementById("sideNavBar").style.animation = "showNavBar 1s";
        document.getElementById("sideNavBar").style.width = "18%";



   }
   else{
        document.getElementById("sideNavBar").style.animation = "hideNavBar 1s";
        document.getElementById("sideNavBar").style.width = "8%";
        sideBarLinks.className='hideTitles';
   }
});