
export default function carta(props){
    let {name, username, foto} = props.naming;
console.log(props.persona)
    return(
        <>
        <div className="card bg-danger" style={{width: "18rem"}}>
        <img class="card-img-top" src={foto}/>
        <div className="card-body w-10">
          <h4 className="card-title">{name}</h4>
          <h5 className="card-title">{username}</h5>
          <p className="Text"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <a className="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </>
      
    );
}