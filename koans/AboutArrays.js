describe("About Arrays", function() {

  //We shall contemplate truth by testing reality, via spec expectations.
  it("should create arrays", function() {
    var emptyArray = [];
    expect(typeof(emptyArray)).toBe("object"); //A mistake? - http://javascript.crockford.com/remedial.html
    expect(emptyArray.length).toBe(0);

    var multiTypeArray = [0, 1, "two", function () { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toBe(0);
    expect(multiTypeArray[2]).toBe("two");
    expect(multiTypeArray[3]()).toBe(3);
    expect(multiTypeArray[4].value1).toBe(4);
    expect(multiTypeArray[4]["value2"]).toBe(5);
    expect(multiTypeArray[5][0]).toBe(6);
  });

  it("should understand array literals", function () {
    var array = [];
    expect(array).toEqual([]);

    array[0] = 1;
    expect(array).toEqual([1]);

    array[1] = 2;
    expect(array).toEqual([1, 2]);

    array.push(3);
    expect(array).toEqual([1, 2, 3]); 
    //The push() method adds one or more elements to the end of an array and returns the new length of the array.
  });

//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length
  it("should understand array length", function () { https:
    var fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(4);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(6);

    var tenEmptyElementArray = new Array(10);//es como crear el objeto con 10 nulls entre corchetes.
    expect(tenEmptyElementArray.length).toBe(10);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(5);
  });

//The slice() method returns a shallow copy of a portion of an array into a new array object. Deshecha el index inicial?
  it("should slice arrays", function () {
    var array = ["peanut", "butter", "and", "jelly"];

    expect(array.slice(0, 1)).toEqual(["peanut"]);
    expect(array.slice(0, 2)).toEqual(["peanut", "butter"]);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(["and", "jelly"]);
    expect(array.slice(3, 0)).toEqual([]);
    expect(array.slice(3, 100)).toEqual(["jelly"]);
    expect(array.slice(5, 1)).toEqual([]); //If the end value is smaller than the start, slice will not internally swap the values
  });

  it("should know array references", function () { //References = acceder a los arrays
    var array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
        refArray[1] = "changed in function";//Cambia el index 1 de la variable array mediante una función??
    }
    passedByReference(array);
    expect(array[1]).toBe(array[1]);

    var assignedArray = array; //Asigna el valor array a una nueva variable.
    assignedArray[5] = "changed in assignedArray";//Cambia el valor del index 5 del array de la nueva variable.
    expect(array[5]).toBe(array[5]);

    var copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toBe("three");//El slice 3 del array
  });

  it("should push and pop", function () {
    var array = [1, 2];
    array.push(3);//Añade el elemento dado al final del array y devuelve el length del nuevo array.

    expect(array).toEqual([1, 2, 3]);

    var poppedValue = array.pop();//Saca el último elemento del array y devuelve ese elemento.
    expect(poppedValue).toBe(3);
    expect(array).toEqual([1, 2]);
  });

  it("should know about shifting arrays", function () {
    var array = [1, 2];

    array.unshift(3);//Añade el elemento dado al principio del array y devuelve el nuevo length del array.
    expect(array).toEqual([3, 1, 2]);

    var shiftedValue = array.shift();//Saca el primer elemento del array y devuelve ese elemento. 
    expect(shiftedValue).toEqual(3);
    expect(array).toEqual([1, 2]);
  });
});
