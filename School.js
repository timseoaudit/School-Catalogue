/// Super Class
class School { // create School (super) class
    constructor(name, level, numberOfStudents){ // constructor method
        this._name = name; // name properties
        this._level = level;// level properties
        this._numberOfStudents = numberOfStudents; // numberOfStudents properties
    }
    get name() { // getter method for name
        return this._name;
    }
    get level() { // getter method for level
        return this._level;
    }
    get numberOfStudents() { // getter method for numberOfStudents
        return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents) { // setter method for numberOfStudents
        if (typeof newNumberOfStudents === 'number') { // if statement to check if newNumberOfStudents is a number
            this._numberOfStudents = newNumberOfStudents; // if true, set newNumberOfStudents to numberOfStudents
        } else {
            return 'Invalid input: numberOfStudents must be set to a Number' // else statement to return error message
        }
    };
    quickFacts () { // method to log school facts
     console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`); // log dynamic school facts
    }
    static pickSubstituteTeacher(substituteTeachers) { // static method to pick a random substitute teacher
        let randInt = Math.floor(Math.random() * substituteTeachers.length) // create random number between 0 and length of substituteTeachers array
       console.log(substituteTeachers[randInt]); // log random substitute teacher from array
    }
};

// primary Class
class PrimarySchool extends School { // create PrimarySchool (sub) class
    constructor(name, numberOfStudents, pickupPolicy) { // constructor method
        super(name,'primary', numberOfStudents); // call super class constructor method
            this._pickupPolicy = pickupPolicy; // pickupPolicy properties
        }
        get pickupPolicy() { // getter method for pickupPolicy
            return this._pickupPolicy;
        }
    };
//Middle Class
class MiddleSchool extends School { // create MiddleSchool (sub) class
    constructor(name, numberOfStudents) { // constructor method
        super(name, 'middle', numberOfStudents); // call super class constructor method
    }
};

//Highschool Class
class HighSchool extends School { // create HighSchool (sub) class
    constructor(name, numberOfStudents, sportsTeams) { // constructor method
        super(name, 'high', numberOfStudents); // call super class constructor method
            this._sportsTeams = sportsTeams; // sportsTeams properties
    }
    get sportsTeams() { // getter method for sportsTeams
        return this._sportsTeams;
    }
};

const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian or a family member over the age of 13') // create new instance of PrimarySchool
//console.log(lorraineHansbury.quickFacts())

School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']); // call static method

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Trac and Field']) // create new instance of HighSchool

console.log(alSmith.sportsTeams) // log sportsTeams property