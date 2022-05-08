
import Card, {carta} from "./components/Card";
function App() {
  let persona = {
      "foto": "https://ichef.bbci.co.uk/news/226/amz/worldservice/live/assets/images/2010/10/22/101022124134_hatsune_miku_226x170_nocredit.jpg",
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    };
  
  return (
    <div>
    
      <Card naming = {persona}/>
      
    </div>
  );
}
  

export default App;