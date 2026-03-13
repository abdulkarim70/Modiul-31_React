
export default function Singer({test}){
    // console.log(test)
    return (
        <div className="singer">
            <h3>Name:{test.name}</h3>
            <p>age:{test.age}</p>
        </div>
    )
}