// class Person {
//     constructor(firstName, lastName) {
//       console.log(this) // Check the output from here
//       this.firstName = firstName
//       this.lastName = lastName
//     }
//   }
  
//   const person = new Person()



//   Static method
//   The static keyword defines a static method for a class. Static methods are not called on instances of the class. Instead, they are called on the class itself. These are often utility functions, such as functions to create or clone objects. An example of static method is Date.now(). The now method is called directly from the class.
  
  class Person {
    constructor(firstName, lastName, age, country, city) {
      this.firstName = firstName
      this.lastName = lastName
      this.age = age
      this.country = country
      this.city = city
      this.score = 0
      this.skills = []
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    get getScore() {
      return this.score
    }
    get getSkills() {
      return this.skills
    }
    set setScore(score) {
      this.score += score
    }
    set setSkill(skill) {
      this.skills.push(skill)
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
  
      let formattedSkills = skills ? `He knows ${skills}` : ''
  
      let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
    static favoriteSkill() {
      const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
      const index = Math.floor(Math.random() * skills.length)
      return skills[index]
    }
    static showDateTime() {
      let now = new Date()
      let year = now.getFullYear()
      let month = now.getMonth() + 1
      let date = now.getDate()
      let hours = now.getHours()
      let minutes = now.getMinutes()
      if (hours < 10) {
        hours = '0' + hours
      }
      if (minutes < 10) {
        minutes = '0' + minutes
      }
  
      let dateMonthYear = date + '.' + month + '.' + year
      let time = hours + ':' + minutes
      let fullTime = dateMonthYear + ' ' + time
      return fullTime
    }
  }
  
  console.log(Person.favoriteSkill())
  console.log(Person.showDateTime())


//INHERITANCE: 

class Student extends Person {
    saySomething() {
      console.log('I am a child of the person class')
    }
  }
  
  const s1 = new Student('Asabeneh', 'Yetayeh', 'Finland', 250, 'Helsinki')
  console.log(s1)
  console.log(s1.saySomething())
  console.log(s1.getFullName())
  console.log(s1.getPersonInfo())

  //Overriding Methods

//   If we want to customize, the methods and if we want to add extra properties, we 
//   need to use the constructor function the child class too.

// Inside the constructor function we call the super() function 
// to access all the properties from the parent class.

// The Person class didn't have gender but now let us give 
// gender property for the child class, Student. 
// If the same method name used in the child class, 
// the parent method will be overridden.

class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
      super(firstName, lastName, age, country, city)
      this.gender = gender
    }
  
    saySomething() {
      console.log('I am a child of the person class')
    }
    getPersonInfo() {
      let fullName = this.getFullName()
      let skills =
        this.skills.length > 0 &&
        this.skills.slice(0, this.skills.length - 1).join(', ') +
          ` and ${this.skills[this.skills.length - 1]}`
  
      let formattedSkills = skills ? `He knows ${skills}` : ''
      let pronoun = this.gender == 'Male' ? 'He' : 'She'
  
      let info = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${formattedSkills}`
      return info
    }
  }
  
  const s1 = new Student(
    'Asabeneh',
    'Yetayeh',
    250,
    'Finland',
    'Helsinki',
    'Male'
  )
  const s2 = new Student('Lidiya', 'Tekle', 28, 'Finland', 'Helsinki', 'Female')
  s1.setScore = 1
  s1.setSkill = 'HTML'
  s1.setSkill = 'CSS'
  s1.setSkill = 'JavaScript'
  
  s2.setScore = 1
  s2.setSkill = 'Planning'
  s2.setSkill = 'Managing'
  s2.setSkill = 'Organizing'
  
  console.log(s1)
  
  console.log(s1.saySomething())
  console.log(s1.getFullName())
  console.log(s1.getPersonInfo())
  
  console.log(s2.saySomething())
  console.log(s2.getFullName())
  console.log(s2.getPersonInfo())