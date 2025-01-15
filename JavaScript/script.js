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
                            <article>
                            <p >${data.intro.greeting}</p>
                            <p >${data.intro.whoAmI}</p>
                            <h1>${data.intro.title}</h1>
                            <p>${data.intro.subtitle}</p>
                    `;

                    // Iterate over the `text` array found in the json and add each line
                    // Iterar sobre el array `text` que se encuentra en el json y añade cada línea 
                    data.intro.text.forEach(line => {
                        introHtml += `<p>${line}</p>`;
                    });

                    introHtml += `
                            <button>${data.intro.buttonAboutMe}</button>
                            <button>${data.intro.buttonSomeServices}</button>
                        </article>    
                    `;

                    introHtml += `
                            <article>
                                <img src=${data.intro.imgIntro} alt="imgIntro">
                            </article>
                        </section>
                    `;

                    content.innerHTML = introHtml;
                    break;

                case 'aboutMe':
                    aboutMeHtml = `
                        <section id="aboutMe">
                            <article> 
                                <h2>${data.aboutMe.name}</h2>
                                <h3>${data.aboutMe.occupation}</h3>
                                <img src=${data.aboutMe.imgAboutMe} alt="imgAboutMe">
                            </article>
                            <article>
                                <h4>${data.aboutMe.title}</h4>
                                ${data.aboutMe.description1.map(line => `<p>${line}</p>`).join('')}
                                ${data.aboutMe.description2.map(line => `<p>${line}</p>`).join('')}
                                ${data.aboutMe.description3.map(line => `<p>${line}</p>`).join('')}
                                <button>${data.aboutMe.buttonWork}</button>
                            </article>
                        </section>
                    `;

                    missionVisionHtml = `
                    <section id="missionVision">
                        <article>
                        <h4>${data.missionVision.tittle1}</h4>
                        ${data.missionVision.description1.map(line => `<p>${line}</p>`).join('')}
                        <img src=${data.missionVision.imgMisiion} alt="imgMisiion">
                        </article>
                        <article>
                        <img src=${data.missionVision.imgVision} alt="imgVision">
                        <h4>${data.missionVision.tittle2}</h4>
                        ${data.missionVision.description2.map(line => `<p>${line}</p>`).join('')}
                        </article>
                    </section>
                `;
                    principlesHtml = `
                    <section id="principles">
                        <h4>${data.principles.tittle1}</h4>
                        <article>
                        <h5>${data.principles.principle1}</h5>
                        ${data.principles.description1.map(line => `<p>${line}</p>`).join('')}
                        </article>
                        <article>
                        <h5>${data.principles.principle2}</h5>
                        ${data.principles.description2.map(line => `<p>${line}</p>`).join('')}
                        </article>
                        <article>
                        <h5>${data.principles.principle3}</h5>
                        ${data.principles.description3.map(line => `<p>${line}</p>`).join('')}
                        </article>
                        <article>
                        <h5>${data.principles.principle4}</h5>
                        ${data.principles.description4.map(line => `<p>${line}</p>`).join('')}
                        </article>
                        <article>
                        <h5>${data.principles.principle5}</h5>
                        ${data.principles.description5.map(line => `<p>${line}</p>`).join('')}
                        </article>

                    </section>
                `;
                
                    
                    content.innerHTML = aboutMeHtml + missionVisionHtml + principlesHtml;
                    break;
                    
                case 'services':
                    servicesHtml = `
                        <section id="services">
                            <article>
                                <h4>${data.services.tittle1}</h4>
                            </article>
                            <article>
                                <div>
                                    <img src=${data.services.imgService1} alt="imgService1">
                                    <h3>${data.services.service1}</h3>
                                    ${data.services.description1.map(line => `<p>${line}</p>`).join('')}
                                </div>
                                <div>
                                    <img src=${data.services.imgService2} alt="imgService1">
                                    <h3>${data.services.service2}</h3>
                                    ${data.services.description2.map(line => `<p>${line}</p>`).join('')}
                                </div>
                                <div>
                                    <img src=${data.services.imgService3} alt="imgService1">
                                    <h3>${data.services.service3}</h3>
                                    ${data.services.description3.map(line => `<p>${line}</p>`).join('')}
                                </div>
                            </article>
                        </section>
                    `;
                    content.innerHTML = servicesHtml;
                    break;

                case 'projects':
                    projectsHtml = `
                        <section id="projects">
                            <article> 
                                <h3>${data.projects.tittle1}</h3>
                                ${data.projects.text.map(line => `<p>${line}</p>`).join('')}
                            </article>
                            <article>
                                <div>
                                    <img src=${data.projects.imgProject1} alt="imgProject1">
                                    <h4>${data.projects.project1}</h4>
                                    ${data.projects.description1.map(line => `<p>${line}</p>`).join('')}
                                </div>
                                <div>
                                    <img src=${data.projects.imgProject2} alt="imgProject1">
                                    <h4>${data.projects.project2}</h4>
                                    ${data.projects.description2.map(line => `<p>${line}</p>`).join('')}
                                </div>
                                <div>
                                    <img src=${data.projects.imgProject3} alt="imgProject1">
                                    <h4>${data.projects.project3}</h4>
                                    ${data.projects.description3.map(line => `<p>${line}</p>`).join('')}
                                </div>
                            </article>
                        </section>
                    `;

                    expertiseHtml = `
                        <section id="expertise">
                            <article>
                                <h4>${data.expertise.tittle1}</h4>
                            </article>
                            <article>
                                <div>
                                    <img src=${data.expertise.imgExpertise1} alt="Python">
                                    <h4>${data.expertise.expertise1}</h4>
                                </div>
                                <div>
                                    <img src=${data.expertise.imgExpertise2} alt="Html">
                                    <h4>${data.expertise.expertise2}</h4>
                                </div>
                                <div>
                                    <img src=${data.expertise.imgExpertise3} alt="Css">
                                    <h4>${data.expertise.expertise3}</h4>
                                </div>
                                <div>
                                    <img src=${data.expertise.imgExpertise4} alt="Javascript">
                                    <h4>${data.expertise.expertise4}</h4>
                                </div>
                                <div>
                                    <img src=${data.expertise.imgExpertise5} alt="Java">
                                    <h4>${data.expertise.expertise5}</h4>
                                </div>
                                <div>
                                    <img src=${data.expertise.imgExpertise6} alt="MySQL">
                                    <h4>${data.expertise.expertise6}</h4>
                                </div>
                                <div>
                                    <img src=${data.expertise.imgExpertise7} alt="React">
                                    <h4>${data.expertise.expertise7}</h4>
                                </div>
                                <div>
                                    <img src=${data.expertise.imgExpertise8} alt="Git">
                                    <h4>${data.expertise.expertise8}</h4>
                                </div>
                            </article>
                        </section>
                    `;

                    content.innerHTML = projectsHtml + expertiseHtml  ;
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

    document.getElementById('#AboutMe').addEventListener('click', () => loadContent('aboutMe'));
    document.getElementById('#Services').addEventListener('click', () => loadContent('services'));
    document.getElementById('#Projects').addEventListener('click', () => loadContent('projects'));
    loadContent('intro');
});





