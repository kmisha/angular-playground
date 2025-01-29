import { defineConfig } from "vitest/config"
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    test: {
        browser: {
            enabled: true,
            provider: 'playwright',
            headless: true,
            instances: [
                { browser: 'chromium' },
            ],
        },
    }
})
