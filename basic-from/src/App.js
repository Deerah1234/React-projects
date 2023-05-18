import "./App.css";
import { useState } from "react";

function App() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        emailAddress: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const [valid, setValid] = useState(false);

    const handleChange = (event) => {
        const { value, name } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.firstName && formData.lastName && formData.emailAddress) {
            setValid((prevState) => !prevState);
        }
        setIsSubmitted(true);
        console.info(
            `First name: ${formData.firstName}
            Last name: ${formData.lastName}
            Email address: ${formData.emailAddress}
            `
        );
    };

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                {isSubmitted && valid && (
                    <div className="success-message">
                        Success! Thank you for registering
                    </div>
                )}
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    placeholder="First Name"
                    onChange={handleChange}
                />
                {isSubmitted && !formData.firstName && (
                    <span>Please enter a first name</span>
                )}
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    placeholder="Last Name"
                    onChange={handleChange}
                />
                {isSubmitted && !formData.lastName && (
                    <span>Please enter a last name</span>
                )}
                <input
                    type="email"
                    name="emailAddress"
                    value={formData.emailAddress}
                    placeholder="Email"
                    onChange={handleChange}
                />
                {isSubmitted && !formData.emailAddress && (
                    <span>Please enter a email address</span>
                )}
                <button>Register</button>
            </form>
        </div>
    );
}

export default App;
