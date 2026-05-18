#!/usr/bin/env node
/**
 * Parse V4.txt and generate TypeScript data files
 */

const fs = require("fs");
const path = require("path");

function parseV4Txt(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const sheets = {};
  let currentSheet = null;
  let headers = [];

  const lines = content.split("\n");

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith("##SHEET:")) {
      currentSheet = trimmedLine.substring(8);
      sheets[currentSheet] = [];
      headers = [];
    } else if (currentSheet && headers.length === 0 && trimmedLine) {
      headers = line.split("|").map((h) => h.trim());
    } else if (currentSheet && trimmedLine) {
      const values = line.split("|").map((v) => v.trim());
      const row = {};
      for (let i = 0; i < headers.length; i++) {
        row[headers[i]] = values[i] || "";
      }
      sheets[currentSheet].push(row);
    }
  }

  return sheets;
}

function toTypeScriptValue(value) {
  if (value === "" || value === null || value === undefined) {
    return "null";
  }
  // Try number
  if (!isNaN(value) && value !== "") {
    return String(value);
  }
  // Quote strings
  return JSON.stringify(value);
}

function generateTsFile(sheetName, data) {
  // Create interface name from sheet name
  let interfaceName = sheetName
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
  let exportName = sheetName;

  // Handle special cases
  const nameMap = {
    attacking_map: { interface: "AttackingNode", export: "attackingMap" },
    node_concepts: { interface: "NodeConcept", export: "nodeConcepts" },
    node_reactions: { interface: "NodeReaction", export: "nodeReactions" },
    node_grips: { interface: "NodeGrip", export: "nodeGrips" },
    training_log: { interface: "TrainingLogEntry", export: "trainingLog" },
    mermaid_export: { interface: "MermaidExport", export: "mermaidExport" },
  };

  if (nameMap[sheetName]) {
    interfaceName = nameMap[sheetName].interface;
    exportName = nameMap[sheetName].export;
  }

  const lines = [
    `export interface ${interfaceName} { [k: string]: any }`,
    "",
    `export const ${exportName}: ${interfaceName}[] = [`,
  ];

  for (const row of data) {
    lines.push("  {");
    const entries = Object.entries(row);
    for (let i = 0; i < entries.length; i++) {
      const [key, value] = entries[i];
      const tsValue = toTypeScriptValue(value);
      const comma = i < entries.length - 1 ? "," : "";
      lines.push(`    "${key}": ${tsValue}${comma}`);
    }
    lines.push("  },");
  }

  if (data.length > 0) {
    // Remove trailing comma from last object
    lines[lines.length - 1] = lines[lines.length - 1].slice(0, -1);
  }

  lines.push("];");
  lines.push("");

  return lines.join("\n");
}

function main() {
  const v4Path = path.join(__dirname, "V4.txt");

  if (!fs.existsSync(v4Path)) {
    console.error(`Error: V4.txt not found at ${v4Path}`);
    process.exit(1);
  }

  console.log("Parsing V4.txt...");
  const sheets = parseV4Txt(v4Path);

  const sheetToFile = {
    attacking_map: "attackingMap.ts",
    edges: "edges.ts",
    actions: "actions.ts",
    positions: "positions.ts",
    reactions: "reactions.ts",
    grips: "grips.ts",
    concepts: "concepts.ts",
    glossary: "glossary.ts",
    node_concepts: "nodeConcepts.ts",
    node_reactions: "nodeReactions.ts",
    node_grips: "nodeGrips.ts",
    mermaid_export: "mermaidExport.ts",
    training_log: "trainingLog.ts",
  };

  console.log("\nGenerating TypeScript files...\n");

  for (const [sheetName, fileName] of Object.entries(sheetToFile)) {
    if (sheets[sheetName]) {
      const tsContent = generateTsFile(sheetName, sheets[sheetName]);
      const outputPath = path.join(__dirname, fileName);
      fs.writeFileSync(outputPath, tsContent, "utf-8");
      console.log(`✓ Generated ${fileName} (${sheets[sheetName].length} rows)`);
    } else {
      console.log(`✗ Sheet "${sheetName}" not found in V4.txt`);
    }
  }

  console.log("\nDone!");
}

main();
