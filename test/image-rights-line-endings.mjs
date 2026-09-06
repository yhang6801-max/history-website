import assert from 'node:assert/strict';
import fs from 'node:fs';
import { hashBinaryFile, hashText, normalizeText } from '../scripts/image-rights-hashes.mjs';

const auditFiles = [
  'docs/four-person-replacement/image-audit.json',
  'docs/current-image-audit-2026-09-05.json',
];

for (const auditFile of auditFiles) {
  const audit = JSON.parse(fs.readFileSync(auditFile, 'utf8'));
  const records = Array.isArray(audit) ? audit : audit.records;
  const checksCurrentImages = !Array.isArray(audit);

  for (const record of records) {
    const lf = normalizeText(fs.readFileSync(record.sourceEvidenceFile, 'utf8'));
    assert.equal(hashText(lf), record.sourceEvidenceSha256);
    assert.equal(hashText(lf.replace(/\n/g, '\r\n')), record.sourceEvidenceSha256);
    assert.equal(hashText(lf.replace(/\n/g, '\r')), record.sourceEvidenceSha256);
    if (checksCurrentImages) {
      assert.equal(hashBinaryFile(record.localFile), record.localSha256);
    }
  }
}

console.log('PASS LF, CRLF, and CR text hashes match; images match raw-byte hashes.');
