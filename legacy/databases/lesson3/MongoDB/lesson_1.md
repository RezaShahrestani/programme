# Lesson 1

## Collection is a Table

In this example we create a database called "school"

```text
use school
```

Now we create a class in the school

```text
db.classes.insert({"name": "class 12", "students":[], "teachers": []})
```

See the created class

```text
db.classes.find()

{ "_id" : ObjectId("5e31778441832c965c0d270c"), "name" : "class 12", "students" : [ ], "teachers" : [ ] }
```

In the above example the "**classes**" is a **collection** and the inserted object is a "**document**"

Another way to create a collection is:

```text
db.createCollection("classes")
```

### Multiple insert

```text
db.classes.insert([
    {"name": "class 10", "students":[], "teachers": []},
    {"name": "class 11", "students":[], "teachers": []},
    {"name": "class 12", "students":[], "teachers": []},
    {"name": "class 13", "students":[], "teachers": []},
])
```

### Controlling the \_id manually

```text
db.classes.insert({_id:1, "name": "class 12", "students":[], "teachers": []})
```

Duplicate \_id would result in write error

Alternative syntax for insertion

```text
db.classes.insert({_id:11, name: "class 12", students:[], teachers: []})
```

### Querying the Collection

```text
db.classes.find() //returns all the documents
```

#### Querying with filter

```text
db.classes.find({name: "class 12"})
```

##### Filter with AND condition

```text
db.classes.find({name: "class 12", _id:10})
//returns
{"_id" : 10, "name" : "class 12", "students" : [ ], "teachers" : [ ]}
```

##### Filter with OR condition

```text
db.classes.find({$or:[{name: "class 12"}, {name: "class 13"}]}).pretty()
//returns
{
    "_id" : ObjectId("5e31778441832c965c0d270c"),
    "name" : "class 12",
    "students" : [ ],
    "teachers" : [ ]
}
{
    "_id" : 10,
    "name" : "class 12",
    "students" : [ ],
    "teachers" : [ ]
}
```

#### Updating a Document

```text
db.classes.update(
    {_id:10},
    {$set:{
        teachers:[
            {name:"Marta", age:20},
            {name:"Kalpana", age:25},
            {name:"Dan", age:30},
            {name:"Babak", age:50}
        ]
        }
        }
)

db.classes.update(
    {_id:11},
    {$set:{
        teachers:[
            {name:"Sokrates", age:2500},
            {name:"Platon", age:2495},
            {name:"Aristotle", age:2400}
            ]
        }
    }
)
```

#### Querying a Nested Document

```text
db.classes.find({teachers: {name:"Marta", age:25}}).pretty()
```

In the above case the condition `teachers` must match both in the **number** of attribute names and the **order** of the attributes

##### Querying a Nested document based on the value of a single attribute

```text
db.classes.find({'teachers.name': "Marta"}).pretty()
```

##### Querying a Nested document based on the value of a single attribute using operators

```text
db.classes.find({'teachers.age': {$lt:30}}).pretty() //less than
db.classes.find({'teachers.age': {$gt:1000}}).pretty() //greater than
db.classes.find({'teachers.age': {$lte:30}}).pretty() //less than or equal to
db.classes.find({'teachers.age': {$gte:30}}).pretty() //greater than or equal to
db.classes.find({'teachers.age': 30}).pretty() //equal to
db.classes.find({'teachers.age': {$lt: 30, $gt: 20}}).pretty() //Interval
```

##### Querying a Nested document based on the values of multiple attributes

```text
db.classes.find({'teachers.age': 30, 'students.age': 20}}).pretty()
```

#### Manually Traversing the Documents in a Collection

```text
var myCursor = db.classes.find()
while(myCursor.hasNext()) {
    print(tojson(myCursor.next()))
}
//or
var myCursor = db.classes.find()
while(myCursor.hasNext()) {
    printjson(myCursor.next())
}
//or
var myCursor =  db.classes.find();
myCursor.forEach(printjson);
```

#### Query for Null or Missing Fields

```text
db.classes.insert({"name": null})
```

`{$type: 10}` is BSON equivalent of binary null which is used in the queries

```text
// Finding documents with attributes equal null
db.classes.find({name: {$type: 10}})

// Finding documents with missing attributes
db.classes.find({teachers: {$exists: false}})
```
