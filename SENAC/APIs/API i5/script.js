// seleção de captura de elementos
const caracterId = document.getElementById('caracterId');
const btnGo = document.getElementById('btn-go');
const content = document.getElementById('content');
const img = document.getElementById('img');

const fetchApi = (value) => {
  const result = fetch(`https://rickandmortyapi.com/api/character/${value}`)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    return data;
  });

  return result;

}

btnGo.addEventListener('click', async (event) => {
  event.preventDefault();
  const result = await fetchApi(caracterId.value);
  content.textContent = `${JSON.stringify(result, null, 2)}`;
  img.src = `${result.image}`;
});