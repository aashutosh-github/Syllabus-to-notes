import fs from "fs";
import path from "path";

export function persistNotes(directory, fileName, content, unitTitle) {
  try {
    if (!fs.existsSync(directory)) {
      fs.mkdirSync(directory, { recursive: true });
    }
    const filePath = path.join(directory, fileName);
    const entry = `\n\n# ${unitTitle}\n\n${content}\n\n---\n`;

    // Automatically creates on first unit, appends for the rest
    fs.appendFileSync(filePath, entry, "utf8");
    console.log(`Saved: ${unitTitle}`);
  } catch (error) {
    throw new Error(`File Error: ${error.message}`);
  }
}
