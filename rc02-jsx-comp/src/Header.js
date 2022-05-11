
const pStyle = {
    fontFamily:"Tohoma",
    color:"yellow",
};

function Header() {
    return ( 
    <div style = {{backgroundColor:"purple", color:"white", textAlign:"center"}}>
        <h1>CLARUSWAY</h1>
        <p style={pStyle}>Reinvent Yourself</p>
    </div>
    )
    
}

export default Header;