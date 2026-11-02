
const fs = require("fs");

for (let i = 1; i <= 15; i++) {
    const lab = `Lab${i}`;

    // Create Lab folder
    fs.mkdirSync(`${lab}/images`, { recursive: true });

    // Create HTML file
    fs.writeFileSync(
        `${lab}/index.html`,
        `<!DOCTYPE html>
<html>
<head>
    <title>Lab ${i}</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>HTML CSS Practical - Lab ${i}</h1>
</body>
</html>`
    );

    // Create CSS file
    fs.writeFileSync(
        `${lab}/style.css`,
        `body {
    font-family: Arial, sans-serif;
    margin: 20px;
}`
    );

    // Create README
    fs.writeFileSync(
        `${lab}/README.md`,
        `# Lab ${i}\nHTML & CSS Development Lab (BCS554)`
    );
}

console.log("Lab1 to Lab15 folders created successfully!");
