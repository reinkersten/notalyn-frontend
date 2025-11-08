const fs = require("fs");
const path = require("path");

const files = [
  "src/App.tsx",
  "src/api/client.ts",
  "src/pages/Dashboard.tsx",
  "src/pages/Flows.tsx",
  "src/pages/Learner.tsx",
  "src/pages/Onboarding.tsx",
];

files.forEach((file) => {
  const p = path.join(process.cwd(), file);
  let content = fs.readFileSync(p);
  // remove BOM if present
  if (content[0] === 0xef && content[1] === 0xbb && content[2] === 0xbf) {
    content = content.slice(3);
    fs.writeFileSync(p, content);
    console.log(`Stripped BOM from ${file}`);
  } else {
    console.log(`No BOM in ${file}`);
  }
});
