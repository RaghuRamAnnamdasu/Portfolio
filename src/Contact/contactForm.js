import { Button } from '@mui/material';
// import emailjs from "emailjs-com";
import emailjs from '@emailjs/browser';
// import { send } from 'emailjs-com';
import { useRef } from 'react';
import "./contact.css";

export function ContactForm({contactRef}) {
    const form = useRef();
    var data = {
        service_id: 'service_uq3ny05',
        template_id: 'template_3lsthzb',
        user_id: 'QR5NtrIC9MyXVVzyc'
    };
    const sendEmail = async (e) => {
        e.preventDefault();
        var data = {
            name: e.target[0].value,
            email: e.target[1].value,
            message: e.target[2].value
        };
        e.target.reset();
        // console.log("stringify", JSON.stringify(data));
        // send(
        //     'service_uq3ny05',
        //     'template_3lsthzb',
        //     data,
        //     'QR5NtrIC9MyXVVzyc'
        // )
        // .then((response) => {
        //     console.log('SUCCESS!', response.status, response.text);
        // })
        // .catch((err) => {
        //     console.log('FAILED...', err);
        // });

        // const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        //     method: "POST",
        //     mode: "cors",
        //     body: JSON.stringify({
        //         service_id: 'service_uq3ny05',
        //         template_id: 'template_3lsthzb',
        //         data,
        //         user_id: 'QR5NtrIC9MyXVVzyc'
        //     }),
        //     headers: {
        //         // Authorization: `Bearer: ${token}`,
        //         "Content-Type": "application/json",
        //         "Access-Control-Allow-Origin": "http://localhost:3000s",
        //         "Access-Control-Allow-Methods": "POST"

        //     },
        //     body: JSON.stringify(data),
        // });
        // console.log("email response", response);



        emailjs.sendForm('service_uq3ny05', 'template_3lsthzb', form.current, 'QR5NtrIC9MyXVVzyc').then(res => {
            console.log("email sent", res);
        });
    };
    return (
        <div ref={contactRef} className="contactFormContainer">
            {/* <div>
                <img src="https://th.bing.com/th/id/R.d79301bb563e48a3b918d22db4772b0b?rik=RVQRBR9zFC%2b09w&riu=http%3a%2f%2fdigitalunite.com%2fsites%2fdefault%2ffiles%2fimages%2fshutterstock_182236523.jpg&ehk=KW8dk3J8md2xTNCCrBSIY408Je3c7iuqj8cEE8hIJbw%3d&risl=&pid=ImgRaw&r=0s" />
            </div> */}
            <form ref = {form} className="contactForm" onSubmit={sendEmail}>
                <div className="name">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Your Name"/>
                </div>
                <div className="email">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Your Email"/>
                </div>
                <div className="message">
                    <label>Message</label>
                    <textarea rows="7" name="message" placeholder="Message"/>
                </div>
                <div>
                    <Button type='submit' variant="contained">Send Message</Button>
                </div>
        </form>
        </div>
    );
}