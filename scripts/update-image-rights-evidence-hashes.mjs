import fs from 'node:fs';
import { hashTextFile } from './image-rights-hashes.mjs';

const auditFiles = [
  'docs/four-person-replacement/image-audit.json',
  'docs/current-image-audit-2026-09-05.json',
];

for (const auditFile of auditFiles) {
  const audit = JSON.parse(fs.readFileSync(auditFile, 'utf8'));
  const records = Array.isArray(audit) ? audit : audit.records;

  for (const record of records) {
    record.sourceEvidenceSha256 = hashTextFile(record.sourceEvidenceFile);
  }

  fs.writeFileSync(auditFile, `${JSON.stringify(audit, null, 2)}\n`, 'utf8');
}

console.log('Updated evidence hashes using LF-normalized text.');
