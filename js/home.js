$(document).ready(function () {
    console.log('REady');
})

const accountSettingsBtn = document.getElementById('account');
accountSettingsBtn.addEventListener('click', function () {
    console.log('clicked');
    const settings = document.getElementById('accountSettings');
    if (settings.className === 'hide') {
        settings.className = 'showSettings';
    } else {
        settings.className = "hide";

    }
});

const menuBtn = document.getElementById('menuIcon');
menuBtn.addEventListener('click', function () {
    const sideBarLinks = document.getElementById('sideNavBarLinks');
    const sideBarTitles = document.getElementById("sideNavBarTitles");
    const linkTitles = document.getElementsByClassName("linkTitle");
    if (sideBarTitles.className === 'hideTitles') {
        sideBarLinks.className = 'showTitles';
        sideBarTitles.className = 'showTitles';
        for (let link of linkTitles) {
            console.log(link);
            link.style.display = 'block';
        } document.getElementById("sideNavBar").style.animation = "showNavBar 1s";
        document.getElementById("sideNavBar").style.width = "18%";



    }
    else {
        document.getElementById("sideNavBar").style.animation = "hideNavBar 1s";
        document.getElementById("sideNavBar").style.width = "6%";
        // sideBarLinks.className = 'hideTitles';
        sideBarTitles.className = 'hideTitles';
        for (let link of linkTitles) {
            console.log(link);
            link.style.display = 'none';
        }
        document.getElementById('accountSettings').className = 'hide';
        const icons = document.getElementsByClassName('material-icons-outlined');
        for (let icon of icons) {
            icon.style.fontSize = '250%';
        }
    }
});