








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
  for (let i = 0; i < 4; i++) {
    let product = featuredProducts[i]

    container.innerHTML += `
        <div class="f-card">
          <div class="f-card-image">
            <img src="${product.image}" alt="image" />
          </div>
          <div class="f-card-details">
            <p id="card-name">${product.name}</p>
            <p id="card-description">$${product.description}</p>
          </div>
        </div>`
  }
}
