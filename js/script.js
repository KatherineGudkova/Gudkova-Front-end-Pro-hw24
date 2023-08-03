class Student {
    constructor(name, surname, birthYear) {
        this.name = name;
        this.surname = surname;
        this.birthYear = birthYear;
        this.grades = [];
        this.attendance = new Array(25).fill(undefined);
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }

    calculateAverageGrade() {
        if (this.grades.length === 0) {
        return 0;
        }
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return Math.round(sum / this.grades.length * 100) / 100;
    }

    present() {
        if (!this.isAttendanceFull()) {
        const emptySlotIndex = this.attendance.indexOf(undefined);
        this.attendance[emptySlotIndex] = true;
        } else {
        console.log("Масив відвідуваності заповнений.");
        }
    }

    absent() {
        if (!this.isAttendanceFull()) {
        const emptySlotIndex = this.attendance.indexOf(undefined);
        this.attendance[emptySlotIndex] = false;
        } else {
        console.log("Масив відвідуваності заповнений.");
        }
    }

    isAttendanceFull() {
        return this.attendance.every(item => item !== undefined);
    }

    calculateAverageAttendance() {
        const classesAttended = this.attendance.filter(item => item !== undefined && item !== false).length;
        const totalClasses = this.attendance.filter(item => item !== undefined).length;
        return classesAttended / totalClasses;
    }

    summary() {
        const averageGrade = this.calculateAverageGrade();
        const averageAttendance = this.calculateAverageAttendance();

        if (averageGrade > 90 && averageAttendance > 0.9) {
        return "Молодець!";
        } else if (averageGrade > 90 || averageAttendance > 0.9) {
        return "Добре, але можна краще!";
        } else {
        return "Редиска!";
        }
    }

    printStudent() {
        console.log(`\nСтудент: ${this.name} ${this.surname}`);
        console.log(`Вік студента: ${this.getAge()}`);
        console.log(`Середній бал студента: ${this.calculateAverageGrade()}`);
        console.log(`Середнє відвідування студента: ${this.calculateAverageAttendance()}`);
        console.log(`Висновок: ${this.summary()}`);
    }
}


const studentOne = new Student("Студент", "Перший", 2001);

studentOne.addGrade(100);
studentOne.addGrade(100);
studentOne.addGrade(80);
studentOne.addGrade(100);

studentOne.present();
studentOne.present();
studentOne.present();
studentOne.absent();

studentOne.printStudent();

const studentTwo = new Student("Студент", "Другий", 1996);

studentTwo.addGrade(10);
studentTwo.addGrade(90);
studentTwo.addGrade(45);
studentTwo.addGrade(60);

studentTwo.present();
studentTwo.absent();
studentTwo.absent();
studentTwo.absent();

studentTwo.printStudent();

const studentThree = new Student("Студент", "Третій", 1989);

for (let i = 0; i < 25; i++){
    studentThree.addGrade(100);
    studentThree.present();
}
studentThree.printStudent();