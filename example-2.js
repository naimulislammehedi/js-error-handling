// JSON Data Processing 
const userData = '{"name": "Mehedi", "age": 25}'; 

try {
    const user = JSON.parse(userData); 
    console.log(user.name); 
} catch (error) {
    console.error("Invalid JSON"); 
}