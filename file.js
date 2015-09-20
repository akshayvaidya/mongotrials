

var MyClass = function() {
  this.m = function() {
    print(a);
    print("in m");
  }

  this.method1 = function() {
    this.m();
    print("in method 1");
     throw new Error("problem");
  }

}
print("here");
print("here 1"); print("here 2");
new MyClass().method1();
print("here 2"); print("here 3");
