# validator

## Author: Alistair Blake

* Using a class instead of module methods. This is essentially going to be a refactor. You will have a codebase from which to start, with the goal being to keep the functionality the same, while improving the implementation.

* Write an object validation module that exports a "validate" class that can, based on the inputs, validate whether or not an entity is satisfactory.

* Things we want to be able to validate

1. Is the entity itself the right type (array, object, function etc)
2. All "required" properties present and do they have values?
3. For any property that specifies a type, does the value match that type?

* i.e. an array of only numbers
Question: Do you want to export the class and have to make a new instance after you import it, or do you want to export an instance of that class (we call this a singleton). What are the pros and cons to each choice?

Testing
Validation Module

Test each method for proper/improper use (required params)
Validate that validation is reliable
Validate proper error conditions/returns