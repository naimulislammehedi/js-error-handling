async function getData() {
  try {
    const response = await fetch("https://api.example.com/data");

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    console.log(data);

  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}