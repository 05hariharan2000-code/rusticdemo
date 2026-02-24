import React from 'react'

const Contact = () => {
    return (
        <div>
            <section class="contact">
                <div class="row">
                    <div class="coloumn1">
                        <h1>Contact</h1>
                        <h3>New Mexico, United States</h3>
                        <p>No. 1002, Dahill Rd Str, Alburquerque, NM, USA</p>
                        <p>(+070) 3689 56 56 56</p>
                        <p>contact@HHstudio.co</p>
                    </div>
                    <div class="coloumn2">
                        <h2>Feedback Form</h2>

                        {/* Name */}
                        <label>Your Name:</label><br />
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                        /><br /><br />

                        {/* Email */}
                        <label>Your Email:</label><br />
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            required
                        /><br /><br />

                        {/* Message */}
                        <label>Your Feedback:</label><br />
                        <textarea
                            name="message"
                            placeholder="Write your feedback"
                            required
                        /><br /><br />

                        <button type="submit">Submit</button>
                    </div>
                </div>

            </section>
        </div>
    )
}

export default Contact
