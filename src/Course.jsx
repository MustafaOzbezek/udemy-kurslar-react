

import "./css/Course.css";

function Course({ course }) {
    const { title, description, price, image, link } = course;

    return (
        <div className="course">
            <img src={image} alt={title} />
            <h3 className="course-title">{title}</h3>
            <p className="course-desc">{description}</p>
            <h4 className="course-price">{price}$</h4>
            <div className='course-link'><a style={{ textDecoration: 'none' }} href={link}>Satın almak için</a></div>
        </div>
    );
}

export default Course;
