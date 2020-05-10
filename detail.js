const {href, search, searchParams} = new URL(location.href);
console.log(href, search, searchParams);
let uid = getId(search);
console.log(uid);
function getId() {
  return search.slice(4,6)
}