








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

const displayReviews = async (index) => {
  const reviews = await fetch("./json/reviews.json")
  const allReviews = await reviews.json()
  const displayReviews = allReviews.clientReviews
  const reviewCards = document.querySelector(".user-review")
  console.log(displayReviews)
  reviewCards.innerHTML = ""



  reviewCards.innerHTML += `
      <div class="user-review-comments">
        <div class="review-card-first review-card">
            <div class="review-desc">
                ${displayReviews[index].comment}
            </div>
            <div class="review-user">
                ${displayReviews[index].name}
            </div>
            <div class="review-role">
                ${displayReviews[index].job}
            </div>
        </div>
        <div class="review-card-second review-card">
            <div class="review-desc">
                ${displayReviews[index + 1].comment}
            </div>
            <div class="review-user">
                ${displayReviews[index + 1].name}
            </div>
            <div class="review-role">
                ${displayReviews[index + 1].job}
            </div>
        </div>
        <div class="review-card-third review-card">
            <div class="review-desc">
                ${displayReviews[index + 2].comment}
            </div>
            <div class="review-user">
                ${displayReviews[index + 2].name}
            </div>
            <div class="review-role">
                ${displayReviews[index + 2].job}
            </div>
        </div>
      </div>

      <div class="review-card-img">
        <div class="review-img-first review-img">
            <img src="${displayReviews[index].image}" alt="image" />
        </div>
        <div class="review-img-second review-img">
            <img src="${displayReviews[index + 1].image}" alt="image" />
        </div>
        <div class="review-img-third review-img">
            <img src="${displayReviews[index + 2].image}" alt="image" />
        </div>
    </div>
      `
  }


let currentIndex = 0;

const intervalId = setInterval(() => {
    displayReviews(currentIndex);
    
    currentIndex = (currentIndex + 1) % reviews.length;
}, 3000);

intervalId();


// clientReview-----------------------------------------------------------------------------------
 

