#!/usr/bin/env python3
"""Parse V4.txt and generate TypeScript data files."""

import json
import re
from pathlib import Path
from typing import Dict, List, Any

def parse_v4_txt(file_path: str) -> Dict[str, List[Dict[str, Any]]]:
    """Parse the V4.txt file into structured data."""
    sheets = {}
    current_sheet = None
    headers = []
    
    with open(file_path, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.rstrip('\n')
            
            if line.startswith('##SHEET:'):
                # Start of a new sheet
                current_sheet = line[8:]  # Remove '##SHEET:' prefix
                sheets[current_sheet] = []
                headers = []
            elif current_sheet and headers == []:
                # Header row (first non-empty line after ##SHEET)
                if line.strip():
                    headers = line.split('|')
            elif current_sheet and line.strip():
                # Data row
                values = line.split('|')
                row = {}
                for i, header in enumerate(headers):
                    row[header] = values[i] if i < len(values) else ''
                sheets[current_sheet].append(row)
    
    return sheets

def to_typescript_value(value: str) -> str:
    """Convert a value to TypeScript representation."""
    if value == '':
        return 'null'
    # Try to parse as number
    try:
        int(value)
        return value
    except ValueError:
        pass
    try:
        float(value)
        return value
    except ValueError:
        pass
    # Quote strings
    return json.dumps(value)

def generate_ts_file(sheet_name: str, data: List[Dict[str, Any]]) -> str:
    """Generate TypeScript file content for a sheet."""
    # Create interface name from sheet name
    interface_name = ''.join(word.capitalize() for word in sheet_name.split('_'))
    interface_name = interface_name[0].upper() + interface_name[1:] if len(interface_name) > 0 else 'Data'
    
    # Handle special cases
    if sheet_name == 'attacking_map':
        interface_name = 'AttackingNode'
        export_name = 'attackingMap'
    elif sheet_name == 'node_concepts':
        interface_name = 'NodeConcept'
        export_name = 'nodeConcepts'
    elif sheet_name == 'node_reactions':
        interface_name = 'NodeReaction'
        export_name = 'nodeReactions'
    elif sheet_name == 'node_grips':
        interface_name = 'NodeGrip'
        export_name = 'nodeGrips'
    elif sheet_name == 'training_log':
        interface_name = 'TrainingLogEntry'
        export_name = 'trainingLog'
    elif sheet_name == 'mermaid_export':
        interface_name = 'MermaidExport'
        export_name = 'mermaidExport'
    else:
        export_name = sheet_name
    
    # Build content
    lines = [
        f'export interface {interface_name} {{ [k: string]: any }}',
        '',
        f'export const {export_name}: {interface_name}[] = ['
    ]
    
    # Add data rows
    for row in data:
        lines.append('  {')
        for key, value in row.items():
            ts_value = to_typescript_value(value)
            lines.append(f'    "{key}": {ts_value},')
        lines[-1] = lines[-1].rstrip(',')  # Remove trailing comma from last field
        lines.append('  },')
    
    if data:
        lines[-1] = lines[-1].rstrip(',')  # Remove trailing comma from last object
    
    lines.append('];')
    
    return '\n'.join(lines)

def main():
    v4_path = Path('V4.txt')
    sheets = parse_v4_txt(str(v4_path))
    
    # Map of sheet names to output file names
    sheet_to_file = {
        'attacking_map': 'attackingMap.ts',
        'edges': 'edges.ts',
        'actions': 'actions.ts',
        'positions': 'positions.ts',
        'reactions': 'reactions.ts',
        'grips': 'grips.ts',
        'concepts': 'concepts.ts',
        'glossary': 'glossary.ts',
        'node_concepts': 'nodeConcepts.ts',
        'node_reactions': 'nodeReactions.ts',
        'node_grips': 'nodeGrips.ts',
        'mermaid_export': 'mermaidExport.ts',
        'training_log': 'trainingLog.ts',
    }
    
    for sheet_name, file_name in sheet_to_file.items():
        if sheet_name in sheets:
            ts_content = generate_ts_file(sheet_name, sheets[sheet_name])
            output_path = Path(file_name)
            output_path.write_text(ts_content, encoding='utf-8')
            print(f'✓ Generated {file_name} ({len(sheets[sheet_name])} rows)')
        else:
            print(f'✗ Sheet "{sheet_name}" not found in V4.txt')

if __name__ == '__main__':
    main()
