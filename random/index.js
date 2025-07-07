const studentData = ['kitty', 'krishna','venugopal','appu'];

const findStudent = (data, name) => {
    for (let i=0;i<data.length; i++){
        if(data[i] === name){
            console.log(`found ${name}`);
        }
    }
}

findStudent(studentData, 'krishna');