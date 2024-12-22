const accordianItemHeaders = document.querySelectorAll('.accordian-item-header');

accordianItemHeaders.forEach(accordianItemHeader => {

    accordianItemHeader.classList.add("active");
    const accordianItemBody = accordianItemHeader.nextElementSibling;
    accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
    
    accordianItemHeader.addEventListener("click", event => {
        accordianItemHeader.classList.toggle("active");
        const accordianItemBody =  accordianItemHeader.nextElementSibling;
        if (accordianItemHeader.classList.contains("active")) {
            accordianItemBody.style.maxHeight = accordianItemBody.scrollHeight + "px";
        } else {
            accordianItemBody.style.maxHeight = 0;
        }
    })
})