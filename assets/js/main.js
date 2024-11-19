/**
* Template Name: EstateAgency - v4.8.0
* Template URL: https://bootstrapmade.com/real-estate-agency-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function () {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Toggle .navbar-reduce
   */
  let selectHNavbar = select('.navbar-default')
  if (selectHNavbar) {
    onscroll(document, () => {
      if (window.scrollY > 100) {
        selectHNavbar.classList.add('navbar-reduce')
        selectHNavbar.classList.remove('navbar-trans')
      } else {
        selectHNavbar.classList.remove('navbar-reduce')
        selectHNavbar.classList.add('navbar-trans')
      }
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Search window open/close
   */
  let body = select('body');
  on('click', '.navbar-toggle-box', function (e) {
    e.preventDefault()
    body.classList.add('box-collapse-open')
    body.classList.remove('box-collapse-closed')
  })

  on('click', '.close-box-collapse', function (e) {
    e.preventDefault()
    body.classList.remove('box-collapse-open')
    body.classList.add('box-collapse-closed')
  })

  /**
   * Intro Carousel
   */
  new Swiper('.intro-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Property carousel
   */
  new Swiper('#property-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.propery-carousel-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * News carousel
   */
  new Swiper('#news-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.news-carousel-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Testimonial carousel
   */
  new Swiper('#testimonial-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.testimonial-carousel-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Property Single carousel
   */
  new Swiper('#property-single-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.property-single-carousel-pagination',
      type: 'bullets',
      clickable: true
    }
  });

})()


let latitude, longitude;
const apiKey = "80a7d8348ad98411c007756283a97677"; // Your OpenWeatherMap API Key

$(document).ready(function () {
  // API Key and URL definitions

  const propiedadesUrl = "https://si0sgs.github.io/EstateAgency/datos/propiedades.json";

  // Load property data
  $.getJSON(propiedadesUrl, function (data) {
    if (data && data.propiedades && data.propiedades.length > 0) {
      data.propiedades.forEach(function (propiedad) {
        let propiedadHTML = `
          <div class="col-md-4">
            <div class="card-box-a card-shadow">
              <div class="img-box-a">
                <img src="${propiedad.imagen}" alt="${propiedad.clasificacion}" class="img-a img-fluid">
              </div>
              <div class="card-overlay">
                <div class="card-overlay-a-content">
                  <div class="card-header-a">
                    <h2 class="card-title-a"><a href="#">${propiedad.clasificacion}</a></h2>
                    <p class="link-a">${propiedad.descripcion}</p>
                  </div>
                  <div class="card-body-a">
                    <div class="price-box d-flex">
                      <span class="price-a">${propiedad.tipo} | $${propiedad.precio.toFixed(2)}</span>
                    </div>
                  </div>
                  <div class="card-footer-a">
                    <ul class="card-info d-flex justify-content-around">
                      <li><h4 class="card-info-title">Area</h4><span>${propiedad.detalle.area}m<sup>2</sup></span></li>
                      <li><h4 class="card-info-title">Rooms</h4><span>${propiedad.detalle.rooms}</span></li>
                      <li><h4 class="card-info-title">Floors</h4><span>${propiedad.detalle.floors}</span></li>
                      <li><h4 class="card-info-title">Garages</h4><span>${propiedad.detalle.garages}</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>`;
        $("#datosPropiedades").append(propiedadHTML);
      });
    } else {
      $("#datosPropiedades").append("<p>No hay propiedades disponibles.</p>");
    }
  }).fail(function () {
    $("#datosPropiedades").append("<p>Error al cargar los datos de propiedades.</p>");
  });

  // Obtener geolocalización
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        position => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;
            fetchWeatherData(latitude, longitude); // Llama a la función para obtener el clima
        },
        error => {
            switch(error.code) {
                case error.PERMISSION_DENIED:
                    alert("El usuario denegó la solicitud de geolocalización.");
                    break;
                case error.POSITION_UNAVAILABLE:
                    alert("La información de ubicación no está disponible.");
                    break;
                case error.TIMEOUT:
                    alert("La solicitud de ubicación ha caducado.");
                    break;
                case error.UNKNOWN_ERROR:
                    alert("Se ha producido un error desconocido.");
                    break;
            }
        }
    );
} else {
    alert("La geolocalización no es soportada por este navegador.");
}

// Función para consumir el API de OpenWeatherMap
function fetchWeatherData(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error en la respuesta del servidor");
            }
            return response.json();
        })
        .then(data => {
            displayWeatherData(data); // Muestra la información del clima
        })
        .catch(error => console.error("Error al obtener los datos:", error));
}

// Función para mostrar los datos en la tabla HTML
function displayWeatherData(data) {
    document.getElementById("lug").textContent = data.name;
    document.getElementById("tem").textContent = data.main.temp + " °C";
    document.getElementById("hum").textContent = data.main.humidity + " %";
    document.getElementById("vie").textContent = data.wind.speed + " m/s";
    document.getElementById("tiempoIcon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

// Recargar datos de clima al hacer clic en la tabla
document.getElementById("climaTabla").addEventListener("click", () => {
    fetchWeatherData(latitude, longitude); // Usa las variables públicas latitude y longitude
});
});