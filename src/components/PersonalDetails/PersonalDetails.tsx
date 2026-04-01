import "../../styles/PersonalDetails.css"

export function PersonalDetails() {
    return (
        <form>
            <h2>Personal Details</h2>
            <h3>Full name</h3>
            <input type="text" placeholder="Enter your full name."></input>
            <h3>Email</h3>
            <input type="text" placeholder="example@gmail.com"></input>
            <h3>Phone Number</h3>
            <input type="text" placeholder="+91 89xxxxxxxx"></input>
            <h3>Address</h3>
            <input type="text" placeholder="India"></input>
        </form>
    );
}