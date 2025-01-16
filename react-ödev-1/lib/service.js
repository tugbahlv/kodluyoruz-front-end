 import axios from "axios";
 
 
async function getData(usersId) {
  const { data: id} = await axios("https://jsonplaceholder.typicode.com/users/" + usersId);
  const { data: post1} = await axios("https://jsonplaceholder.typicode.com/posts/" + usersId);
  
  console.log("users", id)
  console.log("post", post1)
};
export default getData;

