import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',           // foldernya "tests"
  testMatch: /.*\.spec\.ts/,    // opsional, biar jelas
  use: {
    headless: true, // set true kalau gak mau buka browser
    baseURL: 'https://mifx.com',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});

  
