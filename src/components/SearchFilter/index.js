import iconList from "../../services/iconList.json";

console.log(iconList);

export default function searchFilter(searchText, maxResults) {
  return iconList
    // .filter(icon => {
    //   if (icon.name.toLowerCase().includes(searchText.toLowerCase())) {
    //     return true;
    //   }
    //   return false;
    // })
    // .slice(0, maxResults);
}
