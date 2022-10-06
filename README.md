# ASSIGNMENT

## Q1 HTTP Request Handling
### Run locally
Clone the project and run on localhost:4000
```
  git clone https://github.com/fazenecture/nodejs-assignment.git
```

Install dependencies
```
  npm install
```
Start the server
```
  npm run dev
```

### Environment Variables
```
PORT=4000
EPISODE_URL=https://rickandmortyapi.com/api/episode
CHARACTER_URL=https://rickandmortyapi.com/api/character
```

### API Reference

Get all the Episodes with Characters Data
```
GET /api/get-characters
```
QUERY PARAMETER : `page`



## Q2 Counter Function 
[Link to Code - q2.counter.function.ts](./q2.counter-funtion.ts)

```
function Counter(num: number) {
    let counter = 1;
    return [function () { return counter }, function () { counter += 1; return counter }]
};

const [getA, nextA] = Counter(1);

console.log(getA());
console.log(nextA());
console.log(getA());
console.log(nextA());
console.log(getA());

```

## Q3 Services Interaction
### 1) What options do we have to establish such communication?
We can use different methods to establish connection between two services, we can use APIs, SDK, packages.

### 2) For each option describe what are the pros and cons of this solution?
Pros & Cons for API
```
Pros for API : 
- API communication is two-way with confirmations included within the transaction sets.
- The end product offers user-friendly experiences improving internal and external user satisfaction
- API helps in enriching app functionality and thus it helps in improving app's user-experience.
- It also helps reduce expense and time to market.

Cons for API :
- API doesn't give an idea of how user-friendly your application is.
- API load testing does not simulate real users interacting with elements of your webpage.
- 
```

Pros & Cons SDK
```
Pros for SDK : 
- SDK inbuilt functionality allows even new developers to create an application because everything has been measured and arranged to fit the perfect model.
- SDK integration allows even new developers to create application. 
- It allows users and developers to oversee added security function that can prevent security issues.
- SDKs provide easier integration into other applications because of their built-in functionality. 
- SDKs can help you tailor your app and create a truly personalized user experience.
Cons for SDK :
- SDK needs to be written and maintained for each supported web API in every language that needs to be supported.
```

### 3) For each option describe what are the cases the solution fits best?
SDK can be used in cases where we need a complete development kit for software development for building applications for a specified platform, service or language.
API can be used to create a communication between two platforms using HTTP requests, they can be used in use cases where we need to query data or create a backend for a platform.


## Q4 Database Structure
Made Relational database initial migration or dump.
[Link to Code - migrations.sql](./q4-database/migrations.sql);

