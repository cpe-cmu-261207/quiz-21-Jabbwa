const btnRandom = document.getElementById(`btn-random`);
const imgProflie = document.getElementById(`img-profile`);
const Name = document.getElementById(`p-name`);
const Email = document.getElementById(`p-email`);
const Address = document.getElementById(`p-address`);
const Loading = document.getElementById(`div-loading-card`);
const Gender = document.getElementById(`span-gender-icon`);

async function callApi() {
  const resp = await axios.get("https://randomuser.me/api/");
  // console.log(rest.data);
}

btnRandom.onclick = async () => {
  btnRandom.innerText = "Generate more ..";
  btnRandom.disabled = true;

  console.log(resp.data.result);

  Gender.innerText = resp.result[0].gender;
  imgProflie.src = resp.result[0].picture;
  Name.innerText = resp.result[0].name;
  Email.innerText = resp.result[0].email;
  Address.innerText = resp.result[0].location;
};

Loading.onload = () => {
  Loading.innerText = "Loading Profile..";
  Loading.disabled = false;
};
