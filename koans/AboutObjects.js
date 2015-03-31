describe("About Objects", function () {

  describe("Properties", function () {
    var megalomaniac;

    beforeEach(function () {
       megalomaniac = {  mastermind: "Joker", henchwoman: "Harley" };
    });

    it("should confirm objects are collections of properties", function () {
      expect(megalomaniac.mastermind).toBe("Joker");//Accedemos a la propiedad de la clave mastermind del objeto
    });

    it("should confirm that properties are case sensitive", function () {
      expect(megalomaniac.henchwoman).toBe("Harley");//Accedemos a la propiedad de la clave henchwoman
      expect(megalomaniac.henchWoman).toBe(undefined);//No accedemos porque la clave está escrita con Woman en mayúscula y así no está definida.
    });
  });


  it("should know properties that are functions act like methods", function () {
    var megalomaniac = {
      mastermind : "Brain",
      henchman: "Pinky",
      battleCry: function (noOfBrains) {
        return "They are " + this.henchman + " and the" +
          Array(noOfBrains + 1).join(" " + this.mastermind);//The join() method joins the elements of an array into a string, and returns the string.
      }
    };

    var battleCry = megalomaniac.battleCry(4);//une 4 veces el texto que tiene como argumento (" " + this.mastermind)
    var expected = "They are Pinky and the Brain Brain Brain Brain"
    /*La propiedad-función battleCry del objeto mastermind, accede a la la propiedad del objeto
    con .this, entre strings, crea un array (4 + 1) que une con join a la propiedad mastermind y juega con los espacios(hacky).*/
    expect(expected).toMatch(battleCry);
  });

  it("should confirm that when a function is attached to an object, 'this' refers to the object", function () {
    var currentDate = new Date();
    var currentYear = (currentDate.getFullYear());
    var megalomaniac = {
      mastermind: "James Wood",
      henchman: "Adam West",
      birthYear: 1970,
      calculateAge: function () {
        return currentYear - this.birthYear;
      }
    };

    expect(currentYear).toBe(2015);//le da argumento a currentYear para luego
    expect(megalomaniac.calculateAge()).toBe(45);//hacer el cálculo de la función/método calculateYear que tiene el .this
  });

  describe("'in' keyword", function () {
    var megalomaniac;
    beforeEach(function () {
      megalomaniac = {
        mastermind: "The Monarch",
        henchwoman: "Dr Girlfriend",
        theBomb: true
      };
    });

    it("should have the bomb", function () {

      var hasBomb = "theBomb" in megalomaniac;//The in operator returns true if the specified property is in the specified object.

      expect(hasBomb).toBe(true);
    });

    it("should not have the detonator however", function () {

      var hasDetonator = "theDetonator" in megalomaniac;

      expect(hasDetonator).toBe(false);
    });
  });

  it("should know that properties can be added and deleted", function () {
    var megalomaniac = { mastermind : "Agent Smith", henchman: "Agent Smith" };

    expect("secretary" in megalomaniac).toBe(false);

    megalomaniac.secretary = "Agent Smith";
    expect("secretary" in megalomaniac).toBe(true);

    delete megalomaniac.henchman;
    expect("henchman" in megalomaniac).toBe(false);//If you delete a property with the delete operator, the in operator returns false for that property.
  });


  it("should use prototype to add to all objects", function () {//prototype añade ese método a todos los objetos de esa clase
      function Circle(radius)//es clase cuando la creo con function. Si no hay clase, new Object coje la clase objeto por defecto en js
      {
        this.radius = radius;
      }

      var simpleCircle = new Circle(10);
      var colouredCircle = new Circle(5);
      colouredCircle.colour = "red";

      expect(simpleCircle.colour).toBe(undefined);//porque SimpleCircle no tiene esa propiedad
      expect(colouredCircle.colour).toBe("red");

      Circle.prototype.describe = function () {
        return "This circle has a radius of: " + this.radius;
      };

      expect(simpleCircle.describe()).toBe("This circle has a radius of: 10");
      expect(colouredCircle.describe()).toBe("This circle has a radius of: 5");
  });
});
