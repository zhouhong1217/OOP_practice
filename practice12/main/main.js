/**
 * Created by zh on 17-7-14.
 */
class Person{
    constructor(name,age,id){
        this.name = name;
        this.age = age;
        this.id = id;
    }

    introduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
    basicIntroduce(){
        return `My name is ${this.name}. I am ${this.age} years old.`
    }
}

class Student extends Person{
    constructor(name,age,id,klass){
        super(name,age,id);
        this.klass = klass;
    }
    introduce(){
        if(this === this.klass.leader){    //this 指的是Student的一个实例，this.klass,leader指的也是一个Student实例
            return super.introduce() + ` I am a Student. I am Leader of Class ${this.klass.number}.`
        }else {
            return super.introduce() + ` I am a Student. I am at Class ${this.klass.number}.`
        }
    }
}

class Teacher extends Person{
    constructor(name,age,id,klasses){
        super(name,age,id);
        this.klasses = klasses;
        for(let klass of this.klasses){
            klass.teachers.push(this);
        }
    }

    introduce(){
        if(this.klasses === undefined){
            return super.introduce() + ` I am a Teacher. I teach No Class.`;
        }else {
            return super.introduce() + ` I am a Teacher. I teach Class ${this.klasses}.`;
        }
    }


    isTeaching(student){
        if(new Klass(this.klasses).isln(student)){
            return true
        }else {
            return false
        }
    }
    informJoin(klass,student){
        console.log(`I am ${this.name}. I know ${student.name} has joined Class ${klass.number}.`);
        return `I am ${this.name}. I know ${student.name} has joined Class ${klass.number}.`
    }
}

class Worker extends Person{
    constructor(name,age,id){
        super(name,age,id);
    }
    introduce(){
        return super.basicIntroduce() + ` I am a Worker. I have a job.`
    }
}

class Klass{
    constructor(num){
        this.number = num;
        this.teachers = [];
        this.students = [];
    }
    assignLeader(student) {
        if(this.isln(student)){
            return `It is not one of us.`;
        }else {
            this.leader = student;
        }
    }
    appendMember(student){
        student.klass = this;
        this.students.push(student);
        for (let teacher of this.teachers) {
            teacher.informJoin(this, student);
        }
    }
    isln(student){
        return student.klass.number == this.number;
    }
}




