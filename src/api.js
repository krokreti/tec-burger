const { VUE_APP_URL } = process.env;
const url = 'https://tec-burger-default-rtdb.firebaseio.com/';

// export async function getBurgers() {
//      fetch(url + "hamburguer.json").then((response) => {
//         return response.json();
//     })
// }

export async function getBurgers() {
    const response = await fetch(url + "/hamburguer.json");
    return await response.json();
}