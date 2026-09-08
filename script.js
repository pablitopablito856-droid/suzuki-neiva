document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Lógica del Popup Modal ---
    const modal = document.getElementById('promoModal');
    const closeBtn = document.querySelector('.close-btn');

    setTimeout(() => {
        modal.style.display = 'flex';
    }, 1500);

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

    // --- Base de Datos de Motos ---
    const bikesDB = {
        address: {
            name: "Address NM",
            price: "$ 8.190.000",
            colors: [
                { name: "Negra", img: "assets/images/address-negra.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Automáticas y Semiautomáticas",
            cc: "113 cc",
            power: "8.7 HP @ 7500 rpm",
            torque: "8.6 Nm @ 6500 rpm",
            weight: "97 kg"
        },
        avenis: {
            name: "Avenis",
            price: "$ 9.699.000",
            colors: [
                { name: "Amarilla", img: "assets/images/avenis-amarilla.png" },
                { name: "Dorado", img: "assets/images/avenis-dorado.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Automáticas y Semiautomáticas",
            cc: "124 cc",
            power: "8.5 HP @ 6750 rpm",
            torque: "10.0 Nm @ 5500 rpm",
            weight: "107 kg"
        },
        ax4abs: {
            name: "AX4 ABS",
            price: "$ 6.050.000",
            colors: [
                { name: "Azul", img: "assets/images/ax4-abs-azul.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Sport",
            cc: "113 cc",
            power: "8.5 HP @ 7500 rpm",
            torque: "8.8 Nm @ 4500 rpm",
            weight: "98 kg"
        },
        burgman15: {
            name: "Burgman 15",
            price: "$ 15.550.000",
            colors: [
                { name: "Blanca", img: "assets/images/burgman-15-blanca.png" },
                { name: "Negra", img: "assets/images/burgman-15-negra.png" },
                { name: "Plateada", img: "assets/images/burgman-15-plateada.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Automáticas y Semiautomáticas",
            cc: "150 cc",
            power: "8.5 HP @ 7000 rpm",
            torque: "10.0 Nm @ 5500 rpm",
            weight: "118 kg"
        },
        burgmanfit: {
            name: "Burgman Fit",
            price: "$ 10.450.000",
            colors: [
                { name: "Dorada", img: "assets/images/burgman-fit-dorada.png" },
                { name: "Gris", img: "assets/images/burgman-fit-gris.png" },
                { name: "Negra", img: "assets/images/burgman-fit-negra.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Automáticas y Semiautomáticas",
            cc: "125 cc",
            power: "8.5 HP @ 6750 rpm",
            torque: "10.0 Nm @ 5500 rpm",
            weight: "110 kg"
        },
        dr150: {
            name: "DR 150 ABS",
            price: "$ 10.590.000",
            colors: [
                { name: "Blanca", img: "assets/images/dr-150-blanca.png" },
                { name: "Gris", img: "assets/images/dr-150-gris.png" },
                { name: "Negra", img: "assets/images/dr-150-negra.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Enduro",
            cc: "149 cc",
            power: "12.2 HP @ 8000 rpm",
            torque: "12.7 Nm @ 6000 rpm",
            weight: "139 kg"
        },
        dr160: {
            name: "DR 160 X",
            price: "$ 12.599.000",
            colors: [
                { name: "Azul", img: "assets/images/dr-160-azul.png" },
                { name: "Negra", img: "assets/images/dr-160-negra.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Enduro",
            cc: "162 cc",
            power: "15.0 HP @ 8000 rpm",
            torque: "14.0 Nm @ 6500 rpm",
            weight: "148 kg"
        },
        drz4s: {
            name: "DR-Z4S",
            price: "$ 50.000.000",
            colors: [
                { name: "Amarilla", img: "assets/images/dr-z4s-amarilla.png" },
                { name: "Gris", img: "assets/images/dr-z4s-gris.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Enduro",
            cc: "398 cc",
            power: "38.0 HP @ 7500 rpm",
            torque: "37.0 Nm @ 6500 rpm",
            weight: "151 kg"
        },
        drz4sm: {
            name: "DR-Z4SM",
            price: "$ 50.000.000",
            colors: [
                { name: "Azul", img: "assets/images/dr-z4sm-azul.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Alto Cilindraje",
            cc: "398 cc",
            power: "38.0 HP @ 7500 rpm",
            torque: "37.0 Nm @ 6500 rpm",
            weight: "154 kg"
        },
        gixxer150: {
            name: "Gixxer FI 150 ABS",
            price: "$ 10.990.000",
            colors: [
                { name: "Azul", img: "assets/images/gixxer-150-azul.png" },
                { name: "Negra", img: "assets/images/gixxer-150-negra.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Sport",
            cc: "155 cc",
            power: "13.4 HP @ 8000 rpm",
            torque: "13.8 Nm @ 6000 rpm",
            weight: "141 kg"
        },
        gixxer250: {
            name: "Gixxer 250",
            price: "$ 14.490.000",
            colors: [
                { name: "Azul", img: "assets/images/gixxer-250-azul.png" },
                { name: "Negra", img: "assets/images/gixxer-250-negra.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Sport",
            cc: "249 cc",
            power: "26.1 HP @ 9300 rpm",
            torque: "22.2 Nm @ 7300 rpm",
            weight: "156 kg"
        },
        gixxersf150: {
            name: "Gixxer SF FI 150 ABS",
            price: "$ 12.590.000",
            colors: [
                { name: "Gris", img: "assets/images/gixxer-sf-150-gris.png" },
                { name: "Negra", img: "assets/images/gixxer-sf-150-negra.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Sport",
            cc: "155 cc",
            power: "13.4 HP @ 8000 rpm",
            torque: "13.8 Nm @ 6000 rpm",
            weight: "148 kg"
        },
        gixxersf250: {
            name: "Gixxer SF 250",
            price: "$ 15.590.000",
            colors: [
                { name: "Blanca", img: "assets/images/gixxer-sf-250-blanca.png" },
                { name: "Negra", img: "assets/images/gixxer-sf-250-negra.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Sport",
            cc: "249 cc",
            power: "26.1 HP @ 9300 rpm",
            torque: "22.2 Nm @ 7300 rpm",
            weight: "161 kg"
        },
        gn125: {
            name: "GN 125",
            price: "$ 7.019.000",
            colors: [
                { name: "Azul", img: "assets/images/gn125-azul.png" },
                { name: "Naranja", img: "assets/images/gn125-naranja.png" },
                { name: "Negra", img: "assets/images/gn125-negra.png" },
                { name: "Roja", img: "assets/images/gn125-roja.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Sport",
            cc: "124 cc",
            power: "10.5 HP @ 9000 rpm",
            torque: "9.2 Nm @ 7000 rpm",
            weight: "113 kg"
        },
        gn160: {
            name: "GN 160",
            price: "$ 10.130.000",
            colors: [
                { name: "Negra", img: "assets/images/gn160-negra.png" },
                { name: "Roja", img: "assets/images/gn160-roja.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Sport",
            cc: "154 cc",
            power: "13.0 HP @ 8000 rpm",
            torque: "12.5 Nm @ 6000 rpm",
            weight: "123 kg"
        },
        gsx8r: {
            name: "GSX-8R",
            price: "$ 57.690.000",
            colors: [
                { name: "Blanca", img: "assets/images/gsx-8r-blanca.png" },
                { name: "Negra", img: "assets/images/gsx-8r-negra.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Alto Cilindraje",
            cc: "776 cc",
            power: "82.9 HP @ 8500 rpm",
            torque: "78.0 Nm @ 6800 rpm",
            weight: "205 kg"
        },
        gsx8s: {
            name: "GSX-8S",
            price: "$ 55.320.000",
            colors: [
                { name: "Azul", img: "assets/images/gsx-8s-azul.png" },
                { name: "Negra", img: "assets/images/gsx-8s-negra.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Alto Cilindraje",
            cc: "776 cc",
            power: "82.9 HP @ 8500 rpm",
            torque: "78.0 Nm @ 6800 rpm",
            weight: "202 kg"
        },
        gsx8t: {
            name: "GSX-8T",
            price: "$ 63.300.000",
            colors: [
                { name: "Naranja", img: "assets/images/gsx-8t-naranja.png" },
                { name: "Verde", img: "assets/images/gsx-8t-verde.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Alto Cilindraje",
            cc: "776 cc",
            power: "82.9 HP @ 8500 rpm",
            torque: "78.0 Nm @ 6800 rpm",
            weight: "208 kg"
        },
        gsxr150: {
            name: "GSX-R150 ABS",
            price: "$ 14.590.000",
            colors: [
                { name: "Negra", img: "assets/images/gsx-r150-negra.png" },
                { name: "Roja", img: "assets/images/gsx-r150-roja.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Sport",
            cc: "147 cc",
            power: "18.9 HP @ 10500 rpm",
            torque: "14.0 Nm @ 9000 rpm",
            weight: "133 kg"
        },
        gsxr1000r: {
            name: "GSX-R 1000R",
            price: "$ 85.450.000",
            colors: [
                { name: "Azul", img: "assets/images/gsx-r1000r-azul.png" },
                { name: "Roja", img: "assets/images/gsx-r1000r-roja.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Alto Cilindraje",
            cc: "999 cc",
            power: "199.0 HP @ 13200 rpm",
            torque: "117.6 Nm @ 10800 rpm",
            weight: "203 kg"
        },
        gsxs1000: {
            name: "GSX-S1000",
            price: "$ 77.990.000",
            colors: [
                { name: "Azul", img: "assets/images/gsx-s1000-azul.png" },
                { name: "Roja", img: "assets/images/gsx-s1000-roja.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Alto Cilindraje",
            cc: "999 cc",
            power: "150.0 HP @ 11000 rpm",
            torque: "106.0 Nm @ 9250 rpm",
            weight: "214 kg"
        },
        gsxs150: {
            name: "GSX-S150 ABS",
            price: "$ 12.590.000",
            colors: [
                { name: "Azul", img: "assets/images/gsx-s150-azul.png" },
                { name: "Negra", img: "assets/images/gsx-s150-negra.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Sport",
            cc: "147 cc",
            power: "18.9 HP @ 10500 rpm",
            torque: "14.0 Nm @ 9000 rpm",
            weight: "130 kg"
        },
        hayabusa: {
            name: "Hayabusa",
            price: "$ 103.500.000",
            colors: [
                { name: "Azul", img: "assets/images/hayabusa-azul.png" },
                { name: "Negra", img: "assets/images/hayabusa-negra.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Alto Cilindraje",
            cc: "1340 cc",
            power: "187.0 HP @ 9700 rpm",
            torque: "150.0 Nm @ 7000 rpm",
            weight: "264 kg"
        },
        sv650: {
            name: "SV650A",
            price: "$ 44.650.000",
            colors: [
                { name: "Verde", img: "assets/images/sv650-verde.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Alto Cilindraje",
            cc: "645 cc",
            power: "72.0 HP @ 8500 rpm",
            torque: "64.0 Nm @ 8100 rpm",
            weight: "198 kg"
        },
        vivar: {
            name: "Viva FI ABS",
            price: "$ 9.399.000",
            colors: [
                { name: "Azul", img: "assets/images/viva-r-azul.png" },
                { name: "Negra", img: "assets/images/viva-r-negra.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "Automáticas y Semiautomáticas",
            cc: "113 cc",
            power: "9.0 HP @ 8000 rpm",
            torque: "9.1 Nm @ 6000 rpm",
            weight: "102 kg"
        },
        vstrom1050de: {
            name: "V-Strom 1050 DE",
            price: "$ 81.990.000",
            colors: [
                { name: "Amarilla", img: "assets/images/vstrom-1050de-amarilla.png" },
                { name: "Negra", img: "assets/images/vstrom-1050de-negra.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "V-Strom",
            cc: "1037 cc",
            power: "105.7 HP @ 8500 rpm",
            torque: "100.0 Nm @ 6000 rpm",
            weight: "252 kg"
        },
        vstrom160: {
            name: "V-Strom 160",
            price: "$ 13.090.000",
            colors: [
                { name: "Amarilla", img: "assets/images/vstrom-160-amarilla.png" },
                { name: "Negra", img: "assets/images/vstrom-160-negra.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "V-Strom",
            cc: "155 cc",
            power: "15.0 HP @ 8000 rpm",
            torque: "13.8 Nm @ 6000 rpm",
            weight: "150 kg"
        },
        vstrom250: {
            name: "V-Strom 250 SX",
            price: "$ 20.590.000",
            colors: [
                { name: "Amarilla", img: "assets/images/vstrom-250sx-amarilla.png" },
                { name: "Azul", img: "assets/images/vstrom-250sx-azul.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "V-Strom",
            cc: "249 cc",
            power: "26.1 HP @ 9300 rpm",
            torque: "22.2 Nm @ 7300 rpm",
            weight: "167 kg"
        },
        vstrom800de: {
            name: "V-Strom 800 DE",
            price: "$ 69.390.000",
            colors: [
                { name: "Amarilla", img: "assets/images/vstrom-800de-amarilla.png" },
                { name: "Negra", img: "assets/images/vstrom-800de-negra.png" }
            ],
            description: "Moto oficial Suzuki. Precio y especificaciones sujetos a cambios. Cotiza con nosotros para más información.",
            category: "V-Strom",
            cc: "776 cc",
            power: "83.1 HP @ 8500 rpm",
            torque: "78.0 Nm @ 6800 rpm",
            weight: "230 kg"
        }
    };

    // --- Lógica del Modal Ficha Técnica ---
    const techModal = document.getElementById('techSpecModal');
    const closeSpecBtn = document.querySelector('.close-spec-btn');
    const interactiveBikes = document.querySelectorAll('.bike-card.interactive');
    const colorsContainer = document.getElementById('ts-colors');

    interactiveBikes.forEach(card => {
        card.addEventListener('click', () => {
            const bikeId = card.getAttribute('data-bike');
            const bike = bikesDB[bikeId];
            
            if (bike) {
                const mainImage = document.getElementById('ts-image');
                mainImage.src = bike.colors[0].img;
                
                document.getElementById('ts-name').textContent = bike.name;
                document.getElementById('ts-price').textContent = bike.price;
                document.getElementById('ts-description').textContent = bike.description;
                document.getElementById('ts-category').textContent = bike.category;
                document.getElementById('ts-cc').textContent = bike.cc;
                document.getElementById('ts-power').textContent = bike.power;
                document.getElementById('ts-torque').textContent = bike.torque;
                document.getElementById('ts-weight').textContent = bike.weight;
                
                colorsContainer.innerHTML = '';
                bike.colors.forEach((color, index) => {
                    const thumb = document.createElement('img');
                    thumb.src = color.img;
                    thumb.alt = color.name;
                    thumb.title = color.name;
                    thumb.classList.add('color-thumb');
                    if(index === 0) thumb.classList.add('active');
                    
                    thumb.addEventListener('click', () => {
                        mainImage.src = color.img;
                        document.querySelectorAll('.color-thumb').forEach(t => t.classList.remove('active'));
                        thumb.classList.add('active');
                    });
                    
                    colorsContainer.appendChild(thumb);
                });
                
                techModal.style.display = 'flex';
            }
        });
    });

    closeSpecBtn.addEventListener('click', () => {
        techModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target === techModal) {
            techModal.style.display = 'none';
        }
    });

    // --- Categorías Clicables y Filtrado ---
    const categories = document.querySelectorAll('.category-card');
    const allBikeCards = document.querySelectorAll('.bike-card');
    const viewAllBtn = document.querySelector('.center-btn a');
    
    function filterBikes(categoryName) {
        allBikeCards.forEach(card => {
            if(categoryName === 'Todas' || card.getAttribute('data-bike-cat') === categoryName) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    }

    categories.forEach(cat => {
        cat.addEventListener('click', (e) => {
            const catName = cat.getAttribute('data-category');
            filterBikes(catName);
        });
    });
    
    if(viewAllBtn) {
        viewAllBtn.addEventListener('click', (e) => {
            e.preventDefault();
            filterBikes('Todas');
        });
    }

    // --- Lógica del Acordeón FAQ ---
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion-header');
        
        header.addEventListener('click', () => {
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
            item.classList.toggle('active');
        });
    });

    // --- Smooth Scrolling ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // --- Hamburger Menu ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

});