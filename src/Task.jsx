const Task = () => {
    const details = [
        {name :'Hassan', phoneNo : '08123432345', email : 'hassan@gmail.com', id:1},
        {name :'Ahmed', phoneNo : '08196745754', email : 'ahmed@gmail.com', id:2},
        {name :'Islam', phoneNo : '08100050507', email : 'islam@gmail.com', id:3},
        {name :'Bashir', phoneNo : '080877564532', email : 'bash@gmail.com', id:4},
        {name :'Umar', phoneNo : '09044553234', email : 'umar@gmail.com', id:5}
    ]

    return ( 
        <>
            <h1>The Details</h1>
            {details.map(person => (
                <div className="info" key={details.id}>
                    <p> <h3>{person.name}:</h3> {person.phoneNo},  {person.email}</p>
                    {/* <p>{person.phoneNo}</p> */}
                    {/* <p>{person.email}</p> */}
                </div>
            ))}
        </>
     );
}
 
export default Task;