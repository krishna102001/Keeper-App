import React from "react";

function Footer(){
    return (
        <footer className="footer">
            <p>copyright &copy; {new Date().getFullYear()}</p>
        </footer>
    );
}

export default Footer;