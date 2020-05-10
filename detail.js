const {search} = new URL(location.href);
// console.log(href, search, searchParams);
let uid = getId(search);
console.log(uid);
function getId() {
  return search.slice(4)
}