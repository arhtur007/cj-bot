import { describe, it, expect, beforeEach } from 'vitest';

import { _initTestDatabase, storeChatMetadata } from './db.js';

beforeEach(() => {
  _initTestDatabase();
});

// --- JID ownership patterns ---

describe('JID ownership patterns', () => {
  it('WhatsApp group JID: ends with @g.us', () => {
    const jid = '12345678@g.us';
    expect(jid.endsWith('@g.us')).toBe(true);
  });

  it('WhatsApp DM JID: ends with @s.whatsapp.net', () => {
    const jid = '12345678@s.whatsapp.net';
    expect(jid.endsWith('@s.whatsapp.net')).toBe(true);
  });
});
