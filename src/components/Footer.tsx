export default function Footer(){
    return(
        <>
        <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>About</li>
            <li>Contact Me</li>
        </ul>

        {/* tuka logoa so linkoj od linkedin github*/}

        <ul>
            <li>Linkedin</li>
            <li>Github</li>
        </ul>


        <p>© {new Date().getFullYear()} David Jordanoski. All rights reserved.</p>
        </>
    );
};