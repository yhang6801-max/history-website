import crypto from 'node:crypto';
import fs from 'node:fs';

export function normalizeText(value) {
  if (typeof value === 'string') {
    return value.replace(/\r\n?/g, '\n');
  }

  if (Array.isArray(value)) {
    return value.map(normalizeText);
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, normalizeText(item)]),
    );
  }

  return value;
}

export function hashText(value) {
  return crypto.createHash('sha256').update(normalizeText(value)).digest('hex');
}

export function hashJson(value) {
  return hashText(JSON.stringify(normalizeText(value)));
}

export function hashTextFile(file) {
  return hashText(fs.readFileSync(file, 'utf8'));
}

export function hashBinaryFile(file) {
  return crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
}
