// Gallery data - Complete collection of all photos in Airbnb order
const galleryImages = [
    { src: 'images/01787d8a-418f-4e7c-8f29-d5bbea7d5baf.jpg', alt: 'Legacy Farm' },
    { src: 'images/0237ed39-f28d-4337-91b2-9808bc34cda4.avif', alt: 'Legacy Farm' },
    { src: 'images/0ff07b9d-83fd-4190-8fed-7a18ed4ac072.avif', alt: 'Legacy Farm' },
    { src: 'images/1.avif', alt: 'Legacy Farm' },
    { src: 'images/1de84f10-40f1-4ffd-bafb-451d61ba6a87.avif', alt: 'Legacy Farm' },
    { src: 'images/2.avif', alt: 'Legacy Farm' },
    { src: 'images/22c25e2f-d8b4-48f4-99f1-94921587ebfe.avif', alt: 'Legacy Farm' },
    { src: 'images/23814001-a8eb-4ebe-8c9b-e2d6713c17c1.jpg', alt: 'Legacy Farm' },
    { src: 'images/27197447-3a0b-4864-873b-8e6febe08bda.avif', alt: 'Legacy Farm' },
    { src: 'images/28c6c0e6-b055-4d55-bf97-885ab6d68939.avif', alt: 'Legacy Farm' },
    { src: 'images/2c6be594-64bb-4651-8347-eeca789fc54e.avif', alt: 'Legacy Farm' },
    { src: 'images/3.jpg', alt: 'Legacy Farm' },
    { src: 'images/33e7be08-b80a-4309-88de-f927e4c3f0d4.avif', alt: 'Legacy Farm' },
    { src: 'images/3a457bef-dbd1-493b-9ed3-07fb13eb11e4.avif', alt: 'Legacy Farm' },
    { src: 'images/3ba53930-f6b8-4431-b381-c05bf8748d8a.jpg', alt: 'Legacy Farm' },
    { src: 'images/3e45759b-47bf-4e8f-bb2c-5a094561f4bb.jpg', alt: 'Legacy Farm' },
    { src: 'images/4.jpg', alt: 'Legacy Farm' },
    { src: 'images/413637e6-9113-414e-97a0-b9750c097428.avif', alt: 'Legacy Farm' },
    { src: 'images/422d9a46-8f6e-46b4-9ca8-85ee05497b47.avif', alt: 'Legacy Farm' },
    { src: 'images/44b23869-eb83-4d9b-9c25-b1b6415b1cae.jpg', alt: 'Legacy Farm' },
    { src: 'images/4d54112e-7dd0-4b01-8def-4873aa3cd3e6.avif', alt: 'Legacy Farm' },
    { src: 'images/6184011e-a054-4e41-a3fc-d04b314db739.avif', alt: 'Legacy Farm' },
    { src: 'images/63926ac6-6448-4ee2-a10a-13891863d5a2.webp', alt: 'Legacy Farm' },
    { src: 'images/649313b7-1346-4246-94e5-da72d282e6ec.jpg', alt: 'Legacy Farm' },
    { src: 'images/67a7dcf9-19b1-401e-b4af-46fff342ab02.avif', alt: 'Legacy Farm' },
    { src: 'images/6f9d6b4b-daa9-445a-8752-68488295fdf8.avif', alt: 'Legacy Farm' },
    { src: 'images/7bf54de1-3745-4441-a9e6-d4b0bebde8d1.avif', alt: 'Legacy Farm' },
    { src: 'images/7ee22378-b25c-423d-9bfe-fcc9fc5c69d4.avif', alt: 'Legacy Farm' },
    { src: 'images/80f661ae-fae3-48ae-92d8-35d6323f3b67.avif', alt: 'Legacy Farm' },
    { src: 'images/885d4aac-12fe-48db-95ca-3668d3e6df2e.jpg', alt: 'Legacy Farm' },
    { src: 'images/905b4d69-b3fc-4efb-b322-e6c6ee182e92.avif', alt: 'Legacy Farm' },
    { src: 'images/a3edd7a4-0952-4c19-bec5-902508ee42f0.avif', alt: 'Legacy Farm' },
    { src: 'images/a55120da-47c5-4eba-b910-3496e6a72fd3.jpg', alt: 'Legacy Farm' },
    { src: 'images/a5ddba6e-2026-47b9-844d-fb494abaaffc.avif', alt: 'Legacy Farm' },
    { src: 'images/a62cb11d-745d-4fe0-84e0-3b4e077ccacb.jpg', alt: 'Legacy Farm' },
    { src: 'images/a9c2afc3-55ff-4ee8-b8af-cb81a8340f05.avif', alt: 'Legacy Farm' },
    { src: 'images/adbfc474-d0d8-4e57-b4bd-e2e396342577.avif', alt: 'Legacy Farm' },
    { src: 'images/b316aa68-1b73-417c-b7ee-337a17a984bf.jpg', alt: 'Legacy Farm' },
    { src: 'images/b60902f4-7a8e-4004-a0ab-e0abebce5e85.avif', alt: 'Legacy Farm' },
    { src: 'images/b73811c4-e947-46af-b364-9735a55dfbf8.avif', alt: 'Legacy Farm' },
    { src: 'images/bd543da7-5678-4659-8408-bca320e8c85a.jpg', alt: 'Legacy Farm' },
    { src: 'images/c0268bbc-cf88-41be-ae4c-5b70bf0e9806.avif', alt: 'Legacy Farm' },
    { src: 'images/c050afd4-56d8-40f7-ba25-dc00725f1f82.avif', alt: 'Legacy Farm' },
    { src: 'images/c2869c67-0ac5-46df-ac03-178a050428ca.avif', alt: 'Legacy Farm' },
    { src: 'images/c2f19cac-793f-4562-9b34-d8f86474484b.avif', alt: 'Legacy Farm' },
    { src: 'images/c5f9a87d-d21a-4cbd-ab0a-18fd598abf4e.avif', alt: 'Legacy Farm' },
    { src: 'images/c6e741c2-3eb9-4b69-aa0d-748961bc4f85.avif', alt: 'Legacy Farm' },
    { src: 'images/d2bb01b4-cb9f-404b-91bb-933e9d932aae.avif', alt: 'Legacy Farm' },
    { src: 'images/d9d48820-8f87-4102-94c5-44ecdb87a4eb.jpg', alt: 'Legacy Farm' },
    { src: 'images/da875482-ac2d-4081-8644-5d9abddfc3fb.jpg', alt: 'Legacy Farm' },
    { src: 'images/dea73f09-6c1f-4fb3-a2a9-3b32d4deb1c7.avif', alt: 'Legacy Farm' },
    { src: 'images/e50ea59c-0720-4738-a89c-ba03e730684e.avif', alt: 'Legacy Farm' },
    { src: 'images/e52697cd-82db-4c53-88ab-ca8a218a22ce.avif', alt: 'Legacy Farm' },
    { src: 'images/fe766685-137a-4239-b08f-eb8d2de2235c.jpg', alt: 'Legacy Farm' }
];

let currentImageIndex = 0;

// UNIFIED LIGHTBOX SYSTEM - Works for both initial 9 and complete gallery
function openLightbox(index) {
    console.log('Opening lightbox with index:', index);
    
    // Validate index
    if (index < 0 || index >= galleryImages.length) {
        console.error('Invalid image index:', index);
        return;
    }
    
    const lightbox = document.getElementById('lightbox');
    if (!lightbox) {
        console.error('Lightbox element not found!');
        return;
    }
    
    // Set current image index
    currentImageIndex = index;
    
    // Update lightbox content
    updateLightboxImage();
    
    // Show lightbox
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    console.log('Lightbox opened successfully with image:', galleryImages[currentImageIndex].src);
}

function openGallery() {
    // Open lightbox with first image (same as clicking first gallery item)
    openLightbox(0);
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
    updateLightboxImage();
    console.log('Next image, current index:', currentImageIndex);
}

function previousImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    updateLightboxImage();
    console.log('Previous image, current index:', currentImageIndex);
}

function updateLightboxImage() {
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxCounter = document.getElementById('lightbox-counter');
    
    if (!lightboxImage || !lightboxTitle || !lightboxCounter) {
        console.error('Lightbox elements not found!');
        return;
    }
    
    const currentImage = galleryImages[currentImageIndex];
    if (!currentImage) {
        console.error('No image found at index:', currentImageIndex);
        return;
    }
    
    lightboxImage.src = currentImage.src;
    lightboxImage.alt = currentImage.alt;
    lightboxTitle.textContent = currentImage.alt;
    lightboxCounter.textContent = `${currentImageIndex + 1} of ${galleryImages.length}`;
}

// Make all functions globally available immediately
window.openLightbox = openLightbox;
window.openGallery = openGallery;
window.closeLightbox = closeLightbox;
window.nextImage = nextImage;
window.previousImage = previousImage;

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll effect to header
    const header = document.querySelector('.header');
    let lastScrollTop = 0;

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });

    // Add intersection observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });

    // Add click tracking for Airbnb button
    const airbnbButton = document.querySelector('.btn-primary');
    if (airbnbButton) {
        airbnbButton.addEventListener('click', function() {
            if (typeof gtag !== 'undefined') {
                gtag('event', 'airbnb_click', {
                    'event_category': 'booking',
                    'event_label': 'airbnb_listing'
                });
            }
        });
    }

    // Event listeners for lightbox interactions
    // Close lightbox when clicking outside the image
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.addEventListener('click', function(e) {
            if (e.target === this) {
                closeLightbox();
            }
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const lightbox = document.getElementById('lightbox');
        if (lightbox && lightbox.style.display === 'flex') {
            switch(e.key) {
                case 'Escape':
                    closeLightbox();
                    break;
                case 'ArrowLeft':
                    previousImage();
                    break;
                case 'ArrowRight':
                    nextImage();
                    break;
            }
        }
    });
    
    // Add event listeners to navigation buttons as backup
    const prevButton = document.querySelector('.lightbox-prev');
    const nextButton = document.querySelector('.lightbox-next');
    const closeButton = document.querySelector('.lightbox-close');
    
    if (prevButton) {
        prevButton.addEventListener('click', previousImage);
    }
    if (nextButton) {
        nextButton.addEventListener('click', nextImage);
    }
    if (closeButton) {
        closeButton.addEventListener('click', closeLightbox);
    }
    
    console.log('Lightbox system initialized successfully');
});