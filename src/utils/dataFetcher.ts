export const fetchData = async () => {
    const data = fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .catch(err => console.log(err));

    return data
}