var menuOpen = false;

  function openMenu(){
    if(!menuOpen){
      document.getElementById("nav-mobile-menu").classList.remove("hidden");
      menuOpen = true;
    }
    else{
      document.getElementById("nav-mobile-menu").classList.add("hidden");
      menuOpen = false;
    }
  }