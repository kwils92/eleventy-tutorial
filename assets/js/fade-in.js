function fadeIn(sectionId, animationClass){
    const element = document.querySelector(sectionId);
    const observer = new IntersectionObserver(entries => {
    element.classList.toggle( animationClass, entries[0].isIntersecting );
    });
    
    observer.observe( element );
}