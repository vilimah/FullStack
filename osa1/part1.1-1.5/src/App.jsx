const Header = (props) => {
  
  console.log(props)
  const CourseName = 'name'
  const {course} = props
  return (
    <div>
      <h1>{course[CourseName]}</h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  const {name, exercises} = props
  return (
    <div>
      <p>
        {name} {exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  const {parts} = props
  
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  
  console.log(props)
  const {parts} = props
  const total = parts[0].exercises + parts[1].exercises + parts[2].exercises
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App  