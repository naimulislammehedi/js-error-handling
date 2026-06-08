// JavaScript error handling is mainly done with try...catch...finally and by handling async errors properly

// Basic try...catch 
try {
    let result = riskyFunction(); 
    console.log(result); 
} catch (error) {
    console.log("Something went wrong: ", error.message)
}
