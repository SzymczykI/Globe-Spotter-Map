export const fetchData = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const data = response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
