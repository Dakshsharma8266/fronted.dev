// Q3.js
const user = {
    name: "Daksh",
    showName: () => {
        console.log(this.name);
    }
};

user.showName();

const userFixed = {
    name: "Daksh",
    showName() {
        console.log(this.name);
    }
};

userFixed.showName();
