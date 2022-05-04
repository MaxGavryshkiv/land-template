const ulRef = document.getElementById("categories");
const allLiRef = document.querySelectorAll(".item");

console.log(`Number of categories: ${ulRef.childElementCount}`);
allLiRef.forEach((item) => {
  console.log(`Cartegory: ${item.children[0].textContent}
        Elements: ${item.children[1].childElementCount}`);
});
