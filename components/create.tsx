 const user = await User.create({
   name: "Alice",
   age: 30,
   email: "alice@email.com",
 });

 console.log(user);
{
  "_id": "60f1b3b3b3b3b3b3b3b3b3b3",
  "name": "Alice",
  "age": 30,
  "email": "alice@email.com"
}
// Create multiple users
//
const users = await User.create([
  { name: "Alice", age: 30, email: "alice@email.com"},
  { name: "Bob", age: 25, email: "bob@email.com"},
  { name: "Charlie", age: 35, email: "charlie@email.com"},
]);



type UserArray = { name: string; email: string }[];
export async function createMultipleUsers(users: UserArray) {
  await dbConnect();
  const createdUsers = await User.create(users);
  return createdUsers;
}

import { createMultipleUsers } from '@/lib/actions/user.actions';

export default async function Home() {
  const users = [
    { name: 'Alice', email: 'alice@email.com' },
    { name: 'Bob', email: 'bob@email.com' },
  ];

  await createMultipleUsers(users);
}
// Find all the users with the name 'Alice' and age 30
const user = await User.find(
  { name: 'Alice', age: 30 }
  );const user = await User.find(
  { name: 'Alice' }
  );



  import User from '@/lib/models/user';
import dbConnect from '@/lib/db';

export async function findUserByName(name: string) {
  await dbConnect();
 // todo: find user by name
 const user = await User.find({ name });
  return user;

}
const doc = await Post.findById('60f3b3b3b9b3f3b3b3b3b3b3');
const doc = await Post.findById('60f3b3b3b9b3f3b3b3b3b3b3');
// Find the first Post with the title 'Hello World'
const doc = await Post.findOne({ title: 'Hello World' });


{
  _id: '60f3b3b3b9b3f3b3b3b3b3b3',
  title: 'Hello World',
  content: 'This is my first post',
  createdAt: '2024-04-23T12:00:00.000Z',
  updatedAt: '2024-04-23T12:00:00.000Z'
}
$eq: Matches values that are equal to a specified value.

$gt: Matches values that are greater than a specified value.

$gte: Matches values that are greater than or equal to a specified value.

$lt: Matches values that are less than a specified value.

$lte: Matches values that are less than or equal to a specified value.

$in: Matches any of the values specified in an array.
// Find all Posts with a like count greater than 10
const docs = await Post.find({ likes: { $gt: 10 } });



// Find all Posts with a category of 'Technology' or 'Science'
const categoriesToFind = ['Technology', 'Science'];
const docs = await Post.find({ category: { $in: categoriesToFind } });


// Posts with a like count greater than 10 and a category of 'Technology'
const docs = await Post.find(
  {
    $and:
    [
      { likes: { $gt: 10 } },
      { category: 'Technology' }
    ]
  }
);







// Find all Posts with a title that starts with 'Hello'
const docs = await Post.find({ title: /^Hello/ });




Save Method
The save method is used to update a single document directly after having created or retrieved it.

const user = await User.findOne({ name: 'Alice' });
user.age = 30;
await user.save();

Update Method
The update method is used to update multiple documents that match the specified query.

const result = await User.updateMany({ name: 'Alice' }, { age: 30 });



Upserting
Upserting is the process of updating a document if it exists or creating a new document if it doesn't exist.

When you perform an upsert, one of two things can happen:

bullet point
If a document that matches the query exists, it will be updated.

bullet point
If no document matches the query, a new document will be created with the query and update objects.

To perform an upsert, we can use the upsert option in the update method.

const result = await User.updateOne({ name: 'Alice' }, { age: 30 }, { upsert: true });



import User from '@/lib/models/user';
import dbConnect from '@/lib/db';

export const updateUserEmail = async (userId: string, newEmail: string) => {
  await dbConnect();
  const user = await User.updateOne({ _id: userId }, { email: newEmail });
  return user;
};
const result = await User.updateOne(
  { name: "Alice" },
  // instead of passing in a value, we pass in an object with the operator as the key
  { $inc: { age: 1 } }
);$push
Used to add an element to an array.

Existing User
{
  "name": "Alice",
  "hobbies": ["Reading"]
}
copy icon
Push
const result = await User.updateOne(
  { name: "Alice" },
  { $push: { hobbies: "Hiking" } }
);



$addToSet
Used to add an element to an array only if it doesn't already exist.

Existing User
{
  "name": "Alice",
  "hobbies": ["Reading"]
}
copy icon
Add to Set
const result = await User.updateOne(
  { name: "Alice" },
  { $addToSet: { hobbies: "Reading" } }
);



$Each
Used to add multiple elements to an array.

Existing User
{
  "name": "Alice",
  "hobbies": ["Reading"]
}
copy icon
Add Multiple
const result = await User.updateOne(
  { name: "Alice" },
  { $push: { hobbies: { $each: ["Hiking", "Cooking"] } } }
);




Here's an example:

Delete One
const result = await User.deleteOne/many({ name: 'Alice' });
console.log(result);
copy icon
Results
{ deletedCount: 1 }

