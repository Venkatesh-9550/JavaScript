const a1 = document.getElementById("a1");
const blob1 = new Blob(["Hey Venkatesh u got an api"], { type: "text/plain" })
a1.href = URL.createObjectURL(blob1);