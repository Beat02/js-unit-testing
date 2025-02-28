const { assert } = require('chai');
const { remote } = require('webdriverio');

/* We want to make sure that when there are no poems in the database, there are no poems rendered on the homepage. This is the application’s empty state
 */
describe('User visits root', () => {
    let browser;

    // Establecer el timeout en el `before` hook
    before(async function () {
        this.timeout(5000); // Establece el timeout a 5 segundos
        // Configurar un navegador en WebdriverIO
        browser = await remote({
            capabilities: { browserName: 'chrome' } // Asegúrate de tener Chrome instalado
        });
    });
// It describes a specific behavior or functionality that you want to test in your application.
    it('starts blank', async () => {
        // Abrir la página en localhost
        await browser.url('http://localhost:3000/');

        // Buscar los mensajes en la página
        const messages = await browser.$$('.message'); // Suponiendo que los mensajes tienen la clase .message

        // Verificar que no haya mensajes
        assert.equal(messages.length, 0, 'Se esperaban 0 mensajes en la página');
    });

    after(async () => {
        if (browser) {
            await browser.deleteSession();
        }
    });
});
