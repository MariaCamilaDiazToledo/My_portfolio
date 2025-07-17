//Home Bar Styles
//Estilos de barra 
let list = document.querySelectorAll(".navigation li");

function activelink() {
    list.forEach((element) => {
        element.classList.remove("hovered");
    });
    this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activelink));
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
console.log(toggle, navigation, main);

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};



//Function to load the json according to the selection
//Funcion para cargar el json segun lo seleccionado 
document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const languageSelector = document.getElementById('languageSelector');
    let currentLanguage = 'en'; 
    // this (let) determines that by default it is in English unless it is changed
    // esto (let) determina que por predeterminado sea en ingles a menos que se cambie
    async function loadContent(section) {
        try {
            const response = await fetch(`Json/content_${currentLanguage}.json`);
            if (!response.ok) throw new Error('Error al cargar el archivo JSON');
            const data = await response.json();//json loading//carga del json 

            switch (section) {// depending on the case, it generates the section // segun el caso genera la section 
                case 'intro':
                    let introHtml = `
                        <section id="intro">
                            <article id="introText">
                            <p id="greeting">${data.intro.greeting}</p>
                            <div class="whoAmI">
                                <p id="whoAmI">${data.intro.whoAmI}</p>
                                <p id="name">${data.intro.name}</p>
                            </div>
                            
                            <h1 id="dev">${data.intro.title}</h1>
                            <div id="text">
                            <p id="sub">${data.intro.subtitle}</p>
                            </div>
                    `;

                    // Iterate over the `text` array found in the json and add each line
                    // Iterar sobre el array `text` que se encuentra en el json y añade cada línea 
                    data.intro.text.forEach(line => {
                        introHtml += `<p>${line}</p>`;
                    });

                    introHtml += `
                            <button class="button1" id="aM">${data.intro.buttonAboutMe}</button>
                            <button class="button2" id="sS">${data.intro.buttonSomeServices}</button>
                        </article>    
                    `;

                    introHtml += `
                            <article id="introImg">
                                <img src=${data.intro.imgIntro} alt="imgIntro">
                            </article>
                        </section>
                    `;

                    content.innerHTML = introHtml;
                    document.getElementById('aM').addEventListener('click', () => loadContent('aboutMe'));
                    document.getElementById('sS').addEventListener('click', () => loadContent('services'));
    
                    break;

                case 'aboutMe':
                    aboutMeHtml = `
                        <section id="aboutMe">
                            <article class="aboutMeImg"> 
                                <div class="presentation">
                                    <h2>${data.aboutMe.name}</h2>
                                    <h3>${data.aboutMe.occupation}</h3>
                                </div>
                                <div class="img">
                                <img src=${data.aboutMe.imgAboutMe} alt="imgAboutMe">
                                </div>
                            </article>
                            <article class="aboutMeText">
                                <h4>${data.aboutMe.title}</h4>
                                <div>
                                ${data.aboutMe.description1.map(line => `<p>${line}</p>`).join('')}
                                </div>
                                <div>
                                ${data.aboutMe.description2.map(line => `<p>${line}</p>`).join('')}
                                </div>
                                <div>
                                ${data.aboutMe.description3.map(line => `<p>${line}</p>`).join('')}
                                </div>
                                <button class="button3" id="MyWork">${data.aboutMe.buttonWork}</button>
                            </article>
                        </section>
                    `;

                    

                    missionVisionHtml = `
                    <section id="missionVision">
                        <article id="mission">
                        <h4>${data.missionVision.tittle1}</h4>
                        <div>
                        ${data.missionVision.description1.map(line => `<p>${line}</p>`).join('')}
                        </div>
                        <img src=${data.missionVision.imgMisiion} alt="imgMisiion">
                        </article>
                        <article id="vision">
                        <img src=${data.missionVision.imgVision} alt="imgVision">
                        <h4>${data.missionVision.tittle2}</h4>
                        <div>
                        ${data.missionVision.description2.map(line => `<p>${line}</p>`).join('')}
                        </div>
                        </article>
                    </section>
                `;
                    principlesHtml = `
                    <section id="principles">
                        <h4 class="head">${data.principles.tittle1}</h4>
                        <article class="body1">
                        <h5>${data.principles.principle1}</h5>
                        ${data.principles.description1.map(line => `<p>${line}</p>`).join('')}
                        </article>
                        <article class="body2">
                        <h5>${data.principles.principle2}</h5>
                        ${data.principles.description2.map(line => `<p>${line}</p>`).join('')}
                        </article>
                        <article class="body3">
                        <h5>${data.principles.principle3}</h5>
                        ${data.principles.description3.map(line => `<p>${line}</p>`).join('')}
                        </article>
                        <article class="foot1">
                        <h5>${data.principles.principle4}</h5>
                        ${data.principles.description4.map(line => `<p>${line}</p>`).join('')}
                        </article>
                        <article class="foot3">
                        <h5>${data.principles.principle5}</h5>
                        ${data.principles.description5.map(line => `<p>${line}</p>`).join('')}
                        </article>

                    </section>
                `;
                
                    
                    content.innerHTML = aboutMeHtml +missionVisionHtml +principlesHtml;
                    document.getElementById('MyWork').addEventListener('click', () => loadContent('projects'));
    
                    
                    break;
                    
                case 'services':
                    servicesHtml = `
                        <section id="services">
                            
                                <h4>${data.services.tittle1}</h4>
                            
                            

                                <article class="container">
                                    <div class="card__container">
                                        <article class="card__article">
                                        <div class="card__scale-1"></div>
                                        <div class="card__scale-2"></div>

                                        <div class="card__shape-1">
                                            <div class="card__shape-2"></div>
                                            <div class="card__shape-3">
                                                <i class="ri-pages-line card__icon"></i>
                                            </div>
                                        </div>

                                        <div class="card__data">
                                            <h2 class="card__title">${data.services.service1}</h2>

                                            <a href="https://wa.me/qr/XRWHS6DSF5UEF1" class="card__button">
                                                ${data.services.buttonInfo}
                                            </a>
                                        </div>
                                        </article>
                            
                                        <article class="card__article card__orange">
                                        <div class="card__scale-1"></div>
                                        <div class="card__scale-2"></div>

                                        <div class="card__shape-1">
                                            <div class="card__shape-2"></div>
                                            <div class="card__shape-3">
                                                <i class="ri-user-5-line card__icon"></i>
                                            </div>
                                        </div>
                            
                                        <div class="card__data">
                                            <h2 class="card__title">${data.services.service2}</h2>
                                            <a href="https://wa.me/qr/XRWHS6DSF5UEF1" class="card__button">
                                                ${data.services.buttonInfo}
                                            </a>
                                        </div>
                                        </article>
                            
                                        <article class="card__article card__green">
                                        <div class="card__scale-1"></div>
                                        <div class="card__scale-2"></div>

                                        <div class="card__shape-1">
                                            <div class="card__shape-2"></div>
                                            <div class="card__shape-3">
                                                <i class="ri-database-2-line card__icon"></i>
                                                
                                            </div>
                                        </div>
                            
                                        <div class="card__data">
                                            <h2 class="card__title">${data.services.service3}</h2>

                                            <a href="https://wa.me/qr/XRWHS6DSF5UEF1" class="card__button">
                                                ${data.services.buttonInfo}
                                            </a>
                                        </div>
                                        </article>
                                    </div>
                                </article>
                            
                            <button class="button6" id="project">
                                    
                                    ${data.services.buttonProject}
                                    
                            </button>
                        </section>
                    `;
                    content.innerHTML = servicesHtml;
                    document.getElementById('project').addEventListener('click', () => loadContent('projects'));
    
                    break;

                case 'projects':
                    projectsHtml = `
                        <section class="prueba>

                                <article class="prueba">
                                    <div class="containerProjects">

                                        <div class="slide">
                                        
                                            <div class="item item-tittle1"
                                                style="background-image: url();">
                                                <div class="content">
                                                    <div class="name" id="name">${data.projects.tittle1}</div>
                                                    <div class="des tittle-des">
                                                    ${data.projects.text.map(line => `<p>${line}</p>`).join('')}
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="item"
                                                style="background-image: url(${data.projects.imgProject2});">
                                                <div class="content">
                                                    <div class="name">${data.projects.project2}</div>
                                                    <div class="des">${data.projects.description2.map(line => `<p class="text1">${line}</p>`).join('')}
                                                    </div>
                                                    <button>${data.projects.buttonProject}</button>
                                                </div>
                                            </div>
                                            <div class="item"
                                                style="background-image: url(${data.projects.imgProject3});">
                                                <div class="content">
                                                    <div class="name">${data.projects.project3}</div>
                                                    <div class="des">${data.projects.description3.map(line => `<p class="text1">${line}</p>`).join('')}
                                                    </div>
                                                    <button>${data.projects.buttonProject}</button>
                                                </div>
                                            </div>
                                            
                                            <div class="item"
                                                style="background-image: url(${data.projects.imgProject1});">
                                                <div class="content">
                                                    <div class="name">${data.projects.project1}</div>
                                                    <div class="des">${data.projects.description1.map(line => `<p class="text1">${line}</p>`).join('')}</div>
                                                    <button>${data.projects.buttonProject}</button>
                                                </div>
                                            </div>

                                        </div>

                                        <div class="button7">
                                            <button class="prev"><i class="ri-arrow-left-s-line"></i></button>
                                            <button class="next"><i class="ri-arrow-right-s-line"></i></button>
                                                    
                                                    <button id="button4" id="MyProjects">
                                    <a href="https://github.com/CamilaDiazToledo?tab=repositories" target="_blank" style="text-decoration: none; color: inherit;">
                                        ${data.projects.buttonProjects}
                                    </a>
                                </button>
                                        </div>
                                    </div>
                                    
                                </article>
                                




                                
                        </section>
                    `;

                    expertiseHtml = `
                        <section id="expertise">
                            
                                <h4 class="head2">${data.expertise.tittle1}</h4>
                            
                                <div class="body4">
                                    <img src=${data.expertise.imgExpertise1} alt="Python">
                                    <h5>${data.expertise.expertise1}</h5>
                                </div>
                                <div class="body5">
                                    <img src=${data.expertise.imgExpertise2} alt="Html">
                                    <h5>${data.expertise.expertise2}</h5>
                                </div>
                                <div class="body6">
                                    <img src=${data.expertise.imgExpertise3} alt="Css">
                                    <h5>${data.expertise.expertise3}</h5>
                                </div>
                                <div class="body7">
                                    <img src=${data.expertise.imgExpertise4} alt="Javascript">
                                    <h5>${data.expertise.expertise4}</h5>
                                </div>
                                <div class="foot4">
                                    <img src=${data.expertise.imgExpertise5} alt="Java">
                                    <h5>${data.expertise.expertise5}</h5>
                                </div>
                                <div class="foot5">
                                    <img src=${data.expertise.imgExpertise6} alt="MySQL">
                                    <h5>${data.expertise.expertise6}</h5>
                                </div>
                                <div class="foot6">
                                    <img src=${data.expertise.imgExpertise7} alt="React">
                                    <h5>${data.expertise.expertise7}</h5>
                                </div>
                                <div class="foot7">
                                    <img src=${data.expertise.imgExpertise8} alt="Git">
                                    <h5>${data.expertise.expertise8}</h5>
                                </div>
                            
                        </section>
                    `;

                    content.innerHTML = projectsHtml + expertiseHtml;
                    const next = document.querySelector('.next');
                    const prev = document.querySelector('.prev');

                    function updateSlideState() {
                        const firstItem = document.querySelector('.slide .item:first-child');
                        const slide = document.querySelector('.slide');
                        if (!firstItem.classList.contains('item-tittle1')) {
                            slide.classList.add('item-shifted');
                        } else {
                            slide.classList.remove('item-shifted');
                        }
                    }

                    if (next && prev) {
                        next.addEventListener('click', function () {
                            const items = document.querySelectorAll('.item');
                            document.querySelector('.slide').appendChild(items[0]);
                            updateSlideState();
                        });

                        prev.addEventListener('click', function () {
                            const items = document.querySelectorAll('.item');
                            document.querySelector('.slide').prepend(items[items.length - 1]);
                            updateSlideState();
                        });
                    }

                    break;

                case 'contact':
                    content.innerHTML = `
                        <section id="contact">
                            <h2>Contact Me</h2>
                            <form>
                                <label for="name">${data.contact.form.name}:</label>
                                <input type="text" id="name" name="name" required>

                                <label for="email">${data.contact.form.email}:</label>
                                <input type="email" id="email" name="email" required>

                                <label for="message">${data.contact.form.message}:</label>
                                <textarea id="message" name="message" required></textarea>

                                <button type="submit">${data.contact.submitText}</button>
                            </form>
                        </section>
                    `;
                    break;

                default:
                    content.innerHTML = `<p>Section not found.</p>`;
                    break;
            }
        } catch (error) {
            console.error('Error:', error);
            content.innerHTML = `<p>Error loading content.</p>`;
        }
    }

    languageSelector.addEventListener('change', (event) => {
        currentLanguage = event.target.value;
        loadContent('intro');
    });

    document.getElementById('home').addEventListener('click', () => loadContent('intro'));

    document.getElementById('#AboutMe').addEventListener('click', () => loadContent('aboutMe'));
    document.getElementById('#Services').addEventListener('click', () => loadContent('services'));
    
    document.getElementById('#Projects').addEventListener('click', () => loadContent('projects'));
    
    
    
    
    loadContent('intro');
    
});


//Curruculum

document.addEventListener('DOMContentLoaded', () => {
    const content = document.getElementById('content');
    const languageSelector = document.getElementById('languageSelector');
    let currentLanguage = 'en'; // Idioma por defecto
    const data = {
        en: { cv: { doc: 'Cv/Camila_Toledo_Cv_en.pdf' } },
        sp: { cv: { doc: 'Cv/Camila_Toledo_Cv_sp.pdf' } }
    };

    // Escuchar cambios en el selector de idioma
    languageSelector.addEventListener('change', (event) => {
        currentLanguage = event.target.value; // Actualiza el idioma seleccionado
        console.log(`Idioma cambiado a: ${currentLanguage}`);
    });

    const link = document.getElementById('vitae');

    link.addEventListener('click', (event) => {
        event.preventDefault(); // Prevenir la navegación predeterminada
    
        const fileUrl = data[currentLanguage].cv.doc; 
        const a = document.createElement('a');
        a.href = fileUrl;
        a.download = 'Curriculum_Vitae_CamilaTiledo.pdf'; // Nombre con el que se descargará
        a.click();
    });
});







