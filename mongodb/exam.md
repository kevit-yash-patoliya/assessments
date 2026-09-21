# Task 1  : insert one document
```
db.students.insertOne({
  name:"yash",
  age:20,
  course:"B.tech"
})
```
### OUTPUT  
```
{
  acknowledged: true,
  insertedId: ObjectId('6a687aa02bfd73604794e7b1')
}
```

# Task 2: querying for students with age above 21
```
db.students.find({
    age:{$gt:21}
})
```
### OUTPUT
```
{
  _id: ObjectId('6a687b972bfd73604794e7b3'),
  name: 'Alice Smith',
  age: 23,
  course: 'MBA'
}
```

# Task 3: update student course to "Data Science"
```
db.students.updateOne({
  name:"John Doe"
},{
  $set:{
    course:"Data Science"
  }
})
```

### OUTPUT
```
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
```

# Task 4: delete student with name "John Smith"
```
db.students.deleteOne({
  name:"John Smith"
})
```
### OUTPUT
```
{
  acknowledged: true,
  deletedCount: 1
}
```

# Task 5 : insert multiple students documents
```
db.students.insertMany([
  {
    name:"Jane Doe",
    age:22,
    course:"M.tech"
  },
  {
    name:"Alice Smith",
    age:23,
    course:"MBA"
  }
])
```

### OUTPUT
```
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('6a687df52bfd73604794e7b4'),
    '1': ObjectId('6a687df52bfd73604794e7b5')
  }
 }
```

# Task 6 : count documents 
```
db.students.find().count()
```
### OUTPUT
```
4
```


## OR (using aggregation)
```
db.students.aggregate([
  {
    $group:{
      _id:null,
      count:{$sum:1}
    }
  },
  {
    $set:{
        _id:"$$REMOVE"
    }
  }
])
```

### OUTPUT
```
{
  count: 4
}
```


# Task 7 : sort by age
```
db.students.find().sort({age:-1})
```

### OUTPUT
```
{
   _id: ObjectId('6a687b972bfd73604794e7b3'),
   name: 'Alice Smith',
   age: 23,
   course: 'MBA'
}
{
   _id: ObjectId('6a687df52bfd73604794e7b5'),
   name: 'Alice Smith',
   age: 23,
   course: 'MBA'
}
{
   _id: ObjectId('6a687df52bfd73604794e7b4'),
   name: 'Jane Doe',
   age: 22,
   course: 'M.tech'
}
{
   _id: ObjectId('6a687aa02bfd73604794e7b1'),
   name: 'yash',
   age: 20,
   course: 'B.tech'
}
``` 

## OR
```
db.students.aggregate([
    {
        $sort:{
            age:-1
        }
    }
])
```
### OUTPUT
```
{
  _id: ObjectId('6a687b972bfd73604794e7b3'),
  name: 'Alice Smith',
  age: 23,
  course: 'MBA'
}
{
  _id: ObjectId('6a687df52bfd73604794e7b5'),
  name: 'Alice Smith',
  age: 23,
  course: 'MBA'
}
{
  _id: ObjectId('6a687df52bfd73604794e7b4'),
  name: 'Jane Doe',
  age: 22,
  course: 'M.tech'
}
{
  _id: ObjectId('6a687aa02bfd73604794e7b1'),
  name: 'yash',
  age: 20,
  course: 'B.tech'
}
```

# Task 8 : group by course
```
db.students.aggregate([
    {
        $group:{
            _id:"$course",
            count:{$sum:1}
        }
    }
])
```

### OUTPUT
```
{
  _id: 'B.tech',
  count: 1
}
{
  _id: 'M.tech',
  count: 1
}
{
  _id: 'MBA',
  count: 2
}
```

# Task 9 : filter and limit
```
db.students.aggregate([

  {$match: {age: {$gt:20}}},
  {$limit: 2}
])
```


### OUTPUT
```
{
  _id: ObjectId('6a687b972bfd73604794e7b3'),
  name: 'Alice Smith',
  age: 23,
  course: 'MBA'
}
{
  _id: ObjectId('6a687df52bfd73604794e7b4'),
  name: 'Jane Doe',
  age: 22,
  course: 'M.tech'
}
```

# Task 10 : project specific fields

```
db.students.aggregate([
  {
    $project: {
      name: 1,
      course: 1,
      _id:0
    }
  }
])
```


### OUTPUT
```
{
  name: 'yash',
  course: 'B.tech'
}
{
  name: 'Alice Smith',
  course: 'MBA'
}
{
  name: 'Jane Doe',
  course: 'M.tech'
}
{
  name: 'Alice Smith',
  course: 'MBA'
}
```
