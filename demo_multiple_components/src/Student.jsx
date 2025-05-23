// propTypes = a mechanism that ensures that the passed values is of correct datatype
//             age.PropTypes.number

import ProtoTypes from 'prop-types'

function Student(props){
    return <div className="student">
        <p>Name : {props.name}</p>
        <p>Age : {props.age}</p>
        <p>Student:{props.isStudent ? "Yes" : "No"}</p>
    </div>
}
Student.propTypes={
 name : PropTypes.string,
 age: PropTypes.number,
 isStudent : PropTypes.bool,
}
Student.defaultProps = {
    name:"Guest",
    age:0,
    isStudent: false,
}
export default Student