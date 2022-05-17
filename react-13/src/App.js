import Course from './Components/Course';
import './App.css';

const App = () => {
    const courses = [
        {
            id: 1,
            name: 'Half Stack application development',
            parts: [
                {
                    id: 1,
                    name: 'Fundamentals of React',
                    exercises: 10
                },
                
                {
                    id: 2,
                    name: 'Using props to post data',
                    exercises: 7
                },

                {
                    id: 3,
                    name: 'State pf a component',
                    exercises: 14
                },

                {
                    id: 4,
                    name: 'New part',
                    exercises: 10
                }
            ]
        },

        {
            id: 2,
            name: 'Node.js',
            parts: [
                {
                    id: 1,
                    name: 'Routing',
                    exercises: 3
                },

                {
                    id: 2,
                    name: 'Middlewares',
                    exercises: 7
                }
            ]
        }
    ];

    return (
        <div className="App">
            <h1 class="otsikko">React App selaimessa</h1>

            {courses.map(course =>
                <Course course={course} />
            )}
        </div>
    );
};

export default App;
