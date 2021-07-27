export default async function fetchDataShop(url) {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);


}