const title = document.getElementById('title');

const h0 = document.getElementById('h0');
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');

const nav0 = document.getElementById('nav0');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');

const s0 = document.getElementById('s0');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');
const s3 = document.getElementById('s3');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('s5');
const s6 = document.getElementById('s6');
const s7 = document.getElementById('s7');
const s8 = document.getElementById('s8');
const s9 = document.getElementById('s9');
const s10 = document.getElementById('s10');
const s11 = document.getElementById('s11');
const s12 = document.getElementById('s12');

const a0 = document.getElementById('a0');               
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2'); 

const c0 = document.getElementById('c0');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
const c7 = document.getElementById('c7');
const c8 = document.getElementById('c8');
const c9 = document.getElementById('c9');

const b0 = document.getElementById('b0');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');

const cl0 = document.getElementById('cl0');
const cl1 = document.getElementById('cl1');
const cl2 = document.getElementById('cl2');
const cl3 = document.getElementById('cl3');
const cl4 = document.getElementById('cl4');
const cl5 = document.getElementById('cl5');
const cl6 = document.getElementById('cl6');
const cl7 = document.getElementById('cl7');
const cl8 = document.getElementById('cl8');
const cl9 = document.getElementById('cl9');

const f0 = document.getElementById('f0');
const f1 = document.getElementById('f1');


const g0 = document.getElementById('header');
const g1 = document.getElementById('nav');
const g2 = document.getElementById('slide');
const g3 = document.getElementById('about');
const g4 = document.getElementById('class');
const g5 = document.getElementById('blog');
const g6 = document.getElementById('client');
const g7 = document.getElementById('info');
const g8 = document.getElementById('contact');
const g9 = document.getElementById('footer');

const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');
const img9 = document.getElementById('img9');
const img10 = document.getElementById('img10');
const img11 = document.getElementById('img11');
const img12 = document.getElementById('img12');
const img13 = document.getElementById('img13');


// Function to update content for a specific element
function updateContent(element, newValue) {
    // Update content for the element
    element.textContent = newValue;
  }
  
  // Function to update content for an <a> tag
  function updateLinkContent(linkElement, newValue) {
    // Update content for the <a> tag
    linkElement.innerText = newValue;
  }

  function updateImageSrc(imageElement, newSrc) {
    // Update the src attribute of the image element
    imageElement.src = newSrc;
}

function updateBackgroundColor(element, newColor) {
  // Update the background color for the element
  element.style.backgroundColor = newColor;
}

  
  // Fetch JSON data from the text file
  function updatePageContent(pageName) {
    console.log('Updating content for page:', pageName);
    const fetchJson1 = fetch('t.txt')
    .then(response => response.json());

// Fetch the second JSON file
const fetchJson2 = fetch('image.txt')
    .then(response => response.json());

// Wait for both fetch operations to complete
Promise.all([fetchJson1, fetchJson2])
    .then(jsonDataArray => {
        // Merge the data from both JSON files
        const mergedData = Object.assign({}, ...jsonDataArray);
            
           
           
            // Extract the filename from the path
            const fileName = pageName.split('/').pop();

            if (fileName === 'index.html' || fileName === '') {

                updateContent(title, mergedData.title.title);

                updateContent(h0, mergedData.header.h0);
                updateContent(h1, mergedData.header.h1);
                updateContent(h2, mergedData.header.h2);

                updateLinkContent(nav0, mergedData.nav.nav0);
                updateLinkContent(nav1, mergedData.nav.nav1);
                updateLinkContent(nav2, mergedData.nav.nav2);
                updateLinkContent(nav3, mergedData.nav.nav3);
               

                
                updateContent(s0, mergedData.slide.s0);
                updateContent(s1, mergedData.slide.s1);
                updateContent(s2, mergedData.slide.s2);
                updateContent(s3, mergedData.slide.s3);
                updateContent(s4, mergedData.slide.s4);
                updateContent(s5, mergedData.slide.s5);
                updateContent(s6, mergedData.slide.s6);
                updateContent(s7, mergedData.slide.s7);
                updateContent(s8, mergedData.slide.s8);
                updateContent(s9, mergedData.slide.s9);
                updateContent(s10, mergedData.slide.s10);
                updateContent(s11, mergedData.slide.s11);
                updateContent(s12, mergedData.slide.s12);

                
                updateContent(a0, mergedData.about.a0);
                updateContent(a1, mergedData.about.a1);
                updateContent(a2, mergedData.about.a2);
               
                
                updateContent(c1, mergedData.class.c1);
                updateContent(c2, mergedData.class.c2);
                updateContent(c3, mergedData.class.c3);
                updateContent(c4, mergedData.class.c4);
                updateContent(c5, mergedData.class.c5);
                updateContent(c6, mergedData.class.c6);
                updateContent(c7, mergedData.class.c7);
                updateContent(c8, mergedData.class.c8);
                updateContent(c9, mergedData.class.c9);

                updateContent(b1, mergedData.blog.b1);
                updateContent(b2, mergedData.blog.b2);
                updateContent(b3, mergedData.blog.b3);
                updateContent(b4, mergedData.blog.b4);
                updateContent(b5, mergedData.blog.b5);
                updateContent(b6, mergedData.blog.b6);
                updateContent(b7, mergedData.blog.b7);
                updateContent(b8, mergedData.blog.b8);
                updateContent(b9, mergedData.blog.b9);

                updateContent(cl1, mergedData.client.cl1);
                updateContent(cl2, mergedData.client.cl2);
                updateContent(cl3, mergedData.client.cl3);
                updateContent(cl4, mergedData.client.cl4);
                updateContent(cl5, mergedData.client.cl5);
                updateContent(cl6, mergedData.client.cl6);
                updateContent(cl7, mergedData.client.cl7);
                updateContent(cl8, mergedData.client.cl8);
                updateContent(cl9, mergedData.client.cl9);

                updateContent(f0, mergedData.footer.f0);
                updateContent(f1, mergedData.footer.f1);

    
                updateBackgroundColor(g0, mergedData.color.header);
                updateBackgroundColor(g1, mergedData.color.nav);
                updateBackgroundColor(g2, mergedData.color.slide);
                updateBackgroundColor(g3, mergedData.color.about);
                updateBackgroundColor(g4, mergedData.color.class);
                updateBackgroundColor(g5, mergedData.color.blog);
                updateBackgroundColor(g6, mergedData.color.client);
                updateBackgroundColor(g7, mergedData.color.info);
                updateBackgroundColor(g8, mergedData.color.contact);
                updateBackgroundColor(g9, mergedData.color.footer);
             
                updateImageSrc(img1, mergedData.images.img1);
                updateImageSrc(img2, mergedData.images.img2);
                updateImageSrc(img3, mergedData.images.img3);
                updateImageSrc(img4, mergedData.images.img4);
                updateImageSrc(img5, mergedData.images.img5);
                updateImageSrc(img6, mergedData.images.img6);
                updateImageSrc(img7, mergedData.images.img7);
                updateImageSrc(img8, mergedData.images.img8);
                updateImageSrc(img9, mergedData.images.img9);
                updateImageSrc(img10, mergedData.images.img10);
                updateImageSrc(img11, mergedData.images.img11);
                updateImageSrc(img12, mergedData.images.img12);
                updateImageSrc(img13, mergedData.images.img13);
              
        

            }   else if (fileName === 'about.html') {
                updateContent(h0, mergedData.header.h0);
                updateContent(h1, mergedData.header.h1);
                updateContent(h2, mergedData.header.h2);

                updateLinkContent(nav0, mergedData.nav.nav0);
                updateLinkContent(nav1, mergedData.nav.nav1);
                updateLinkContent(nav2, mergedData.nav.nav2);
                updateLinkContent(nav3, mergedData.nav.nav3);

                updateContent(a0, mergedData.about.a0);
                updateContent(a1, mergedData.about.a1);
                updateContent(a2, mergedData.about.a2);

                updateContent(f0, mergedData.footer.f0);
                updateContent(f1, mergedData.footer.f1);
                updateBackgroundColor(g0, mergedData.color.header);
                updateBackgroundColor(g1, mergedData.color.nav);
                updateBackgroundColor(g3, mergedData.color.about);
                updateBackgroundColor(g9, mergedData.color.footer);
                updateImageSrc(img1, mergedData.images.img1);
                updateImageSrc(img2, mergedData.images.img2);
                updateImageSrc(img13, mergedData.images.img13);

            } else if (fileName === 'blog.html') {
                updateContent(h0, mergedData.header.h0);
                updateContent(h1, mergedData.header.h1);
                updateContent(h2, mergedData.header.h2);

                updateLinkContent(nav0, mergedData.nav.nav0);
                updateLinkContent(nav1, mergedData.nav.nav1);
                updateLinkContent(nav2, mergedData.nav.nav2);
                updateLinkContent(nav3, mergedData.nav.nav3);

                updateContent(b1, mergedData.blog.b1);
                updateContent(b2, mergedData.blog.b2);
                updateContent(b3, mergedData.blog.b3);
                updateContent(b4, mergedData.blog.b4);
                updateContent(b5, mergedData.blog.b5);
                updateContent(b6, mergedData.blog.b6);
                updateContent(b7, mergedData.blog.b7);
                updateContent(b8, mergedData.blog.b8);
                updateContent(b9, mergedData.blog.b9);


                updateContent(f0, mergedData.footer.f0);
                updateContent(f1, mergedData.footer.f1);
                updateBackgroundColor(g0, mergedData.color.header);
                updateBackgroundColor(g1, mergedData.color.nav);
                updateBackgroundColor(g5, mergedData.color.blog);
                updateBackgroundColor(g9, mergedData.color.footer);
                updateImageSrc(img1, mergedData.images.img1);
                updateImageSrc(img2, mergedData.images.img2);
                updateImageSrc(img13, mergedData.images.img13);
                updateImageSrc(img7, mergedData.images.img7);
                updateImageSrc(img8, mergedData.images.img8);
            } else if (fileName === 'class.html') {
                updateContent(h0, mergedData.header.h0);
                updateContent(h1, mergedData.header.h1);
                updateContent(h2, mergedData.header.h2);

                updateLinkContent(nav0, mergedData.nav.nav0);
                updateLinkContent(nav1, mergedData.nav.nav1);
                updateLinkContent(nav2, mergedData.nav.nav2);
                updateLinkContent(nav3, mergedData.nav.nav3);

                updateContent(c1, mergedData.class.c1);
                updateContent(c2, mergedData.class.c2);
                updateContent(c3, mergedData.class.c3);
                updateContent(c4, mergedData.class.c4);
                updateContent(c5, mergedData.class.c5);
                updateContent(c6, mergedData.class.c6);
                updateContent(c7, mergedData.class.c7);
                updateContent(c8, mergedData.class.c8);
                updateContent(c9, mergedData.class.c9);

                
                updateContent(f0, mergedData.footer.f0);
                updateContent(f1, mergedData.footer.f1);
                updateBackgroundColor(g0, mergedData.color.header);
                updateBackgroundColor(g1, mergedData.color.nav);
                updateBackgroundColor(g4, mergedData.color.class);
                updateBackgroundColor(g9, mergedData.color.footer);
                updateImageSrc(img1, mergedData.images.img1);
                updateImageSrc(img2, mergedData.images.img2);
                updateImageSrc(img13, mergedData.images.img13);
                updateImageSrc(img3, mergedData.images.img3);
                updateImageSrc(img4, mergedData.images.img4);
                updateImageSrc(img5, mergedData.images.img5);
                updateImageSrc(img6, mergedData.images.img6);
            } 
        })
        .catch(error => console.error('Error fetching or parsing JSON:', error));
}

// Call the function to update content when the page loads
window.addEventListener('load', function () {
    console.log('page loaded');
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Update content based on the current page
    updatePageContent(currentPage);
});