import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FeedbackForm() {
    const [form, setForm] = useState({
        name: "",
        movie: "",
        rating: "",
        comment: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
        const updatedReviews = [...existingReviews, form];

        localStorage.setItem("reviews", JSON.stringify(updatedReviews));
        alert("Thank you for your feedback!");
        navigate("/reviews");
    };

    return (
        <form onSubmit={handleSubmit} className="form">
            <label>Name: </label>
            <input type="text" name="name" onChange={handleChange} value={form.name} required />

            <label>Movie: </label>
            <select name="movie" onChange={handleChange} value={form.movie} required>
                <option value="">Select</option>
                <option value="Dragon">Dragon</option>
                <option value="Joe">Joe</option>
                <option value="Love today">Love today</option>
                <option value="DADA">DADA</option>
                <option value="Romeo">Romeo</option>
                <option value="Once more">Once more</option>
            </select>

            <label>Rating:</label>
            <input type="number" onChange={handleChange} min={1} max={5} name="rating" value={form.rating} required />

            <label>Comments:</label>
            <textarea name="comment" onChange={handleChange} value={form.comment} />

            <button type="submit">Submit</button>
        </form>
    );
}

export default FeedbackForm;
