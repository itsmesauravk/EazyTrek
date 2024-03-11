








//  popular packages -----------------------------------------------------------
const popularPlaces = document.querySelector(".popular-places-show-place")

const fetchData = async () => {
  try {
    const packages = await fetch("./json/popularPackages.json")
    if (!packages) {
      throw new Error("Somthing error occured")
    }
    const allPackages = await packages.json()
    const popularPackages = allPackages.trekkingPackages
    console.log(popularPackages)
    popularPlaces.innerHTML = ""
    for (let i = 0; i < popularPackages.length; i++) {
      let packageData = popularPackages[i]
      popularPlaces.innerHTML += `
        <div class="package-card">
          <div class="p-image-div">
            <img src="${packageData.image}" alt="" />
          </div>
          <div class="p-extra">
            <div class="p-name">${packageData.name}</div>
            <div class="p-short-details">${packageData.description}</div>
            </div>
        </div>
        `
    }
  } catch (error) {
    console.log(error)
  }
}
fetchData()


// featured products js -------------------------------------------------------------------------
const container = document.querySelector(".feature-products-cards")

const featuredItems = async () => {
  try {
    const response = await fetch("./json/featuredProduct.json")
    if (!response.ok) {
      throw new Error("Network is not responding correctly")
    }
    const products = await response.json()
    const featuredProducts = products.featuredProducts
    showDataInCard(featuredProducts)
  } catch (error) {
    console.error("Error fetching or parsing data:", error)
  }
}

featuredItems()

// show data in card
function showDataInCard(featuredProducts) {
  container.innerHTML = ""
  for (let i = 0; i < 6; i++) {
    let product = featuredProducts[i]

    container.innerHTML += `
        <div class="f-card">
          <div class="f-card-image">
            <img src="${product.image}" alt="image" />
          </div>
          <div class="f-card-details">
            <p id="card-name">${product.name}</p>
            <p id="card-description">${product.description}</p>
          </div>
        </div>`
  }
}


// blogs ------------------------------------------------------------------------------------
const blogContainer = document.querySelector(".user-blogs")

const getAllBlogs = async () => {
  const allBlogs = await fetch("./json/blogs.json")
  const getBlogs = await allBlogs.json()
  const displayBlogs = getBlogs.blogs
  showBlogs(displayBlogs)
}
getAllBlogs()

function showBlogs(displayBlogs) {
  blogContainer.innerHTML = ""
  for (let i = 0; i < 3; i++) {
    const blog = displayBlogs[i]
    blogContainer.innerHTML += `
        <div class="blog-card">
          <div class="image-box">
            <img
              src="${blog.image}"
              alt="image"
            />
          </div>
          <div class="blog-details">
            <div class="blog-username">
              ${blog.writer}
            </div>
            <div class="blog-date-post">
              ${blog.date}              
            </div>
            <div class="extra-details">
              ${blog.highlight}
            </div> 
          </div>
        </div>
        `
  }
}



// clientReview-----------------------------------------------------------------------------------

// const displayReviews = async () => {
//   const reviews = await fetch("./json/reviews.json")
//   const allReviews = await reviews.json()
//   const clientReviews = allReviews.clientReviews
//   const swiperWrapper = document.querySelector(".user-reviews-swiper")
//   swiperWrapper.innerHTML = ""
//   console.log(clientReviews)


//   for (let i = 0; i < clientReviews.length; i++) {
//     const review = clientReviews[i]
//     const backgroundColor = i % 2 === 0 ? "#ADC4CE" : "#C4DFDF"

//     swiperWrapper.innerHTML += `
//         <div class="swiper-slide"> 
//           <div class="cr-card">
//             <div class="cr-review" style="background-color: ${backgroundColor};">
//               <p>${review.comment}</p>
//             </div>
//             <div class="cr-details">
//               <div class="cr-userImage">
//                 <img src="${review.image}" alt="cat" />
//               </div>
//               <div class="cr-userDetails">
//                 <h2>${review.name}</h2>
//                 <h3>${review.job}</h3>
//               </div>
//             </div>
//             <div class="cr-arrow-div" style="background-color: ${backgroundColor}"></div>
//           </div>
//         </div>
//       `
//   }


//  // Initialize Swiper after adding all review cards
//  const swiperReview = new Swiper(".reviews-swiper", {
//   slidesPerView: 3,
//   loop: true,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   autoplay: {
//     delay: 3000,
//     disableOnInteraction: false,
//     pauseOnMouseEnter: true,
//   },
// })
// }
// // Call displayReviews to load reviews and initialize Swiper
// displayReviews()


const displayReviews = async () => {
  const reviews = await fetch("./json/reviews.json");
  const allReviews = await reviews.json();
  const clientReviews = allReviews.clientReviews;
  const swiperWrapper = document.querySelector(".user-reviews-swiper");
  swiperWrapper.innerHTML = "";

  for (let i = 0; i < clientReviews.length; i++) {
    const review = clientReviews[i];
    const backgroundColor = i % 2 === 0 ? "#ADC4CE" : "#C4DFDF";

    swiperWrapper.innerHTML += `
        <div class="swiper-slide"> 
          <div class="cr-card">
            <div class="cr-review" style="background-color: ${backgroundColor};">
              <p>${review.comment}</p>
            </div>
            <div class="cr-details">
              <div class="cr-userImage">
                <img src="${review.image}" alt="user" />
              </div>
              <div class="cr-userDetails">
                <h2>${review.name}</h2>
                <h3>${review.job}</h3>
              </div>
            </div>
            <div class="cr-arrow-div" style="background-color: ${backgroundColor}"></div>
          </div>
        </div>
      `;
  }

  const swiperReview = new Swiper(".reviews-swiper", {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    on: {
      init: function () {
        const circleImages = document.querySelectorAll(".circle-image");

        circleImages.forEach((circle, index) => {
          circle.addEventListener("click", () => {
            swiperReview.slideTo(index);
          });
        });
      },
    },
  });
};

displayReviews();

