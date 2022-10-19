const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileNav = document.querySelector('.mobile-menu-js');
const closeMobileNav = document.querySelector('.mobile-menu-js');
const speakersContainer = document.querySelector('.speakers-container');

hamburgerMenu.addEventListener('click', () => {
  mobileNav.classList.remove('hide');
});

closeMobileNav.addEventListener('click', () => {
  mobileNav.classList.add('hide');
});

const speakerDetails = [
  {
    speakerImg: './img/speaker-1.png',
    speakerName: 'Prof. Dieter Bimberg',
    position: 'Bimberg Chinese-German Center for Green Photonics" CIOMP of CAS, China and Center for NanoPhotonics TU Berlin, Germany H-index-113',
    bio: 'Dieter Bimberg received the Ph.D. magna cum laude from Goethe University, Frankfurt, Germany.',
  },
  {
    speakerImg: './img/speaker-2.png',
    speakerName: 'Prof. Arben Merkoçi',
    position: 'Catalan Institute of Nanoscience and Nanotechnology, Spain H-index-86',
    bio: 'Arben Merkoçi is ICREA Research Professor and leader of the ICN2 Nanobioelectronics and Biosensors Group. Prof.Merkoçi obtained his PhD at the University of Tirana (Albania) in ion selective electrodes',
  },
  {
    speakerImg: './img/speaker-3.png',
    speakerName: 'Prof. Sandra Pinelas',
    position: 'Department of Exact Sciences and Engineering, Military schoolPortugal',
    bio: 'Sandra Pinelas Education and academic qualifications Ph.D., in 2007, in Mathematical Analysis at the Azores University MSc, in 1997, in Mathematic at the Évora University Graduation, in 1995, in Mathematical Analysis at the Évora University',
  },
  {
    speakerImg: './img/speaker1.png',
    speakerName: 'Prof. Dumitru Baleanu',
    position: 'Magurele-Bucharest Romania',
    bio: 'Dumitru Baleanu is a Professor at the Institute of Space Sciences, Magurele-Bucharest, Romania and a visiting staff member at the Department of Mathematics,Cankaya University, Ankara, Turkey.',
  },
  {
    speakerImg: './img/speaker2.png',
    speakerName: 'Prof. Xiaohui Frank Zhang',
    position: 'University of Massachusetts Amherst USA',
    bio: 'Prof. Xiaohui “Frank” Zhang received his doctorate in Physiology and Biophysics from the University of Miami School of Medicine, and completed his postdoctoral training in biophysics at Harvard Medical School.'
  },
  {
    speakerImg: './img/speaker3.jpg',
    speakerName: 'Prof. Ilaria Cacciotti',
    position: 'University of Niccolò Cusano Italy',
    bio: 'Prof. Dr. Ilaria Cacciotti is Full Professor of Biomaterials & Tissue Engineering and Materials Science and Technology at University of Rome "Niccolò Cusano", with consolidated expertise in the synthesis.'
  },
];

function createSpeaker (data){
  const speaker = document.createElement('div');
  speaker.className = 'speaker';
  speaker.innerHTML = 
  `<div class="image">
        <img class="speaker-img" src="${data.speakerImg}" alt="">
        </div>
        <div class="speaker-details">
            <h3>${data.speakerName}</h3>
            <em>${data.position}</em>
            <hr>
            <p class="speakers-p">${data.bio}</p>
        </div>
  `;
  speakersContainer.appendChild(speaker);
}

speakerDetails.forEach((data) => {
  createSpeaker(data);
});