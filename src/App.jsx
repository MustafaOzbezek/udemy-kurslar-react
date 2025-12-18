import Header from "./Header";
import Course from "./Course";
import { courses } from "./data";
import "./css/Course.css";

function App() {
  return (
    <div>
      <Header />

      <div className="course-list">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>

    </div>
  );
}

export default App;
