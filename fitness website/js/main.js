const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

// Menu show 
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

// Menu hidden 
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}



const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


//header background

const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('bg-header') 
                       : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)




const sections = document.querySelectorAll('section[id]')
    
const scrollActive = () =>{
  	const scrollDown = window.scrollY

	sections.forEach(current =>{
		const sectionHeight = current.offsetHeight,
			  sectionTop = current.offsetTop - 58,
			  sectionId = current.getAttribute('id'),
			  sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

		if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
			sectionsClass.classList.add('active-link')
		}else{
			sectionsClass.classList.remove('active-link')
		}                                                    
	})
}
window.addEventListener('scroll', scrollActive)


const scrollUp = () =>{
	const scrollUp = document.getElementById('scroll-up')
	this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
						: scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)


const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
})

sr.reveal(`.home__data, .footer__container, .footer__group`)
sr.reveal(`.home__img`, {delay: 650, origin: "bottom"})
sr.reveal(`.logos__img, .program__card , .pricing__card`, {interval : 100})
sr.reveal(`.choose__img, .calculate__content`, {origin: "left"})
sr.reveal(`.choose__content, .calculate__img`, {origin: "right"})



const sound1 = new Audio("../img/incorrect.mp3")
const sound2 = new Audio("../img/correct.mp3")
const fat = new Audio("../img/fat.mp3")
const good = new Audio("../img/good.mp3")
const skinny = new Audio("../img/skinny.mp3")
const obese = new Audio("../img/obese.mp3")

// calculate BMI



const calculateForm = document.getElementById("calculate-form"),
        calculateCm = document.getElementById("calculate-cm"),
        calculateKg = document.getElementById("calculate-kg"),
        calculateMessage = document.getElementById("calculate-message")


const calculateBmi = e => {
    e.preventDefault()

    if (calculateCm.value === "" || calculateKg.value === "") {
        calculateMessage.classList.remove("color-green")
        calculateMessage.classList.add("color-red")
        
        calculateMessage.textContent = "Please , Fill in the Height and Weight"
          
          sound1.play()
        setTimeout(()=> {
            calculateMessage.textContent = ""
        },3000)

    } else {
        //BMI
        const cm = calculateCm.value / 100,
            kg = calculateKg.value,
            bmi = Math.round(kg/(cm * cm))

        if(bmi < 18.5) {
            calculateMessage.classList.add("color-red")
            calculateMessage.textContent = `Your BMI is ${bmi} and you are too skinny 😔`
            skinny.play()
        } else if (bmi < 25) {
            calculateMessage.classList.add("color-green")
            calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy 😃`
            good.play()
        } else if (bmi < 30) {
            calculateMessage.classList.add("color-red")
            calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight 😔`
            fat.play()
        } else {
            calculateMessage.classList.add("color-red")
            calculateMessage.textContent = `Your BMI is ${bmi} and you are obese 😔`
            obese.play()
        }

        
        
        calculateCm.value =""
        calculateKg.value=""

        setTimeout(()=> {
            calculateMessage.textContent =""
        },3200)
    }

}
calculateForm.addEventListener("submit", calculateBmi)

//newsletter

const contactForm = document.getElementById("contact-form"),
        contactMessage = document.getElementById("contact-message"),
        contactUser = document.getElementById("contact-user")

const sendEmail = (e) => {
    e.preventDefault()

    if(contactUser.value === "") {
        contactMessage.classList.remove("color-green")
        contactMessage.classList.add("color-red")

        contactMessage.textContent = "You must enter your email 🧐"

        sound1.play()

        setTimeout(()=> {
            contactMessage.textContent =""
        },3000)

    } else {

        emailjs.sendForm("service_30evrf9", "template_f98g3md", "#contact-form", "7EYOnUOhs8vOe3YYE")
        .then(() => {
            contactMessage.classList.add("color-green")
            contactMessage.textContent = "You registered successfully"
            sound2.play()
            setTimeout(()=> {
                contactMessage.textContent =""
            },3000)
        }, (error) => {
            alert("Opps! SOMETHING HAS FAILED...", error)
            sound1.play()
        })

        contactUser.value = " "
    }
}


contactForm.addEventListener("submit", sendEmail)