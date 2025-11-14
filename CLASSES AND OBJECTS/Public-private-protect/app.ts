class Person {
  public name: string; // public (can be accessed anywhere)

  constructor(name: string) {
    this.name = name;
  }

  public greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const p = new Person("Soumya");
console.log(p.name);   // ✅ allowed
p.greet();             // ✅ allowed


//         private

// ✔ Accessible only inside the class

// ❌ Not accessible outside the class
// ❌ Not accessible from child classes


class BankAccount {
  private balance: number = 1000;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}

const acc = new BankAccount();
acc.deposit(500);      // ✅ allowed
console.log(acc.getBalance());  // ✅ allowed
console.log(acc.balance);       // ❌ Error: private property


// protected
// ✔ Accessible inside the class

// ✔ Accessible in child (sub) classes
// ❌ NOT accessible outside the class
class Animal {
  protected sound: string = "Some sound";

  protected makeSound() {
    console.log(this.sound);
  }
}

class Dog extends Animal {
  bark() {
    this.sound = "Bark Bark";  // ✅ allowed (protected)
    this.makeSound();          // ✅ allowed
  }
}

const d = new Dog();
d.bark();         // works
d.sound;          // ❌ Error (cannot access outside class)


