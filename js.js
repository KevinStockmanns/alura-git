const d = document


d.addEventListener("DOMContentLoaded",e=>{

    const $indicator = d.querySelector(".indicator"),
        $sections = d.querySelectorAll(".section")
        console.log($indicator)


    const cb = (entries) =>{
        entries.forEach(entry=>{
            let id = entry.target.id
            if(entry.isIntersecting){
                // console.log(d.querySelector(`.nav-link[href="#${id}"]`).getBoundingClientRect())
                d.querySelector(`.nav-link[href="#${id}"]`).classList.add("visible")
                $indicator.style.width = `${d.querySelector(`.nav-link[href="#${id}"]`).getBoundingClientRect().width}px`
            }else{
                d.querySelector(`.nav-link[href="#${id}"]`).classList.remove("visible")
            }

        })
    }

    const observer = new IntersectionObserver(cb, {
        threshold: [.8, .9]
    })
    $sections.forEach(el=> observer.observe(el))
})