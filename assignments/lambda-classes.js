// CODE here for your Lambda Classes

class Person {
  constructor(attrs){
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
  }

  speak(){
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(attrs){
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  }

  demo(subject){
    console.log(`Today we are learning about ${subject}`)
  }

  grade(student, subject){
    console.log(`${student.name} receives a perfect score on ${subject}`)
  }
}

class Student extends Person {
  constructor(attrs){
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects;
  }

  listsSubjects(){
    this.forEach(function(subject) {
      console.log(subject)
    })
  }

  PRAssignment(subject){
    console.log(`${student.name} has submitted a PR for ${subject}`)
  } 

  sprintChallenge(subject){
    console.log(`${student.name} has begun sprint challenge on ${subject}`)
  }
}

class ProjectManager extends Instructor {
  constructor(attrs){
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  }

  standUp(channel){
    console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`)
  }

  debugsCode(student, subject){
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`)
  }
}