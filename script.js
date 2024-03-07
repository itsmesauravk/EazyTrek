








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

