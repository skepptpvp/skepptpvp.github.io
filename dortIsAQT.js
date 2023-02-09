document.addEventListener("DOMContentLoaded", function() {
  // Variables
  let aboutSection = document.querySelector("#about");
  let experienceSection = document.querySelector("#experience");
  let skillsSection = document.querySelector("#skills");
  let projectsSection = document.querySelector("#projects");
  
  // Functions
  function sectionAnimations() {
    // About section animation
    aboutSection.style.opacity = "0";
    aboutSection.style.transform = "translateX(-50%)";
    setTimeout(function() {
      aboutSection.style.transition = "all 1s ease";
      aboutSection.style.opacity = "1";
      aboutSection.style.transform = "translateX(0%)";
    }, 500);
    
    // Experience section animation
    experienceSection.style.opacity = "0";
    experienceSection.style.transform = "translateX(50%)";
    setTimeout(function() {
      experienceSection.style.transition = "all 1s ease";
      experienceSection.style.opacity = "1";
      experienceSection.style.transform = "translateX(0%)";
    }, 1000);
    
    // Skills section animation
    skillsSection.style.opacity = "0";
    skillsSection.style.transform = "translateY(-50%)";
    setTimeout(function() {
      skillsSection.style.transition = "all 1s ease";
      skillsSection.style.opacity = "1";
      skillsSection.style.transform = "translateY(0%)";
    }, 1500);
    
    // Projects section animation
    projectsSection.style.opacity = "0";
    projectsSection.style.transform = "translateY(50%)";
    setTimeout(function() {
      projectsSection.style.transition = "all 1s ease";
      projectsSection.style.opacity = "1";
      projectsSection.style.transform = "translateY(0%)";
    }, 2000);
  }
  
  // Event Listeners
  window.addEventListener("load", sectionAnimations);
});
