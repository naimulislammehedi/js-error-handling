// finally - Runs whether an error happens or not.
try {
    console.log("Running..."); 
} catch (err) {
    console.log(err); 
} finally {
    console.log("Cleanup code"); 
}

// Common use:
// closing files
// stopping loaders
// cleaning resources