import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests', // Directorio donde se encuentran las pruebas
    timeout: 30000, // Tiempo de espera para cada prueba
    expect: {
        timeout: 5000, // Tiempo de espera para las expectativas
    },
    reporter: 'html', // Tipo de reportero (puedes cambiarlo si deseas)
});