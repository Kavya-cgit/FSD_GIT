import React from 'react';
import Sem from './Sem';


const DisplayMarks = () => {
    const students = [
        {m1: 78 , m2: 89 , m3: 98},
        {m1: 45 , m2: 65 , m3: 73},
        {m1: 80 , m2: 90 , m3: 83},
        {m1: 67 , m2: 56 , m3: 72},
    ];
    return (
      <>
        {students.map((student,index) => (
            <Sem key={index} m1={student.m1} m2={student.m2} m3={student.m3}/>
        ))}
     </>
    );
}

export default DisplayMarks