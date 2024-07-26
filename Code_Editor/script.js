const htmlEditor = CodeMirror.fromTextArea(document.getElementById('html-code'), {
    mode: 'htmlmixed',
    theme: 'dracula',
    lineNumbers: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    extraKeys: {
        "Ctrl-Space": "autocomplete"
    }
});

const cssEditor = CodeMirror.fromTextArea(document.getElementById('css-code'), {
    mode: 'css',
    theme: 'dracula',
    lineNumbers: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    extraKeys: {
        "Ctrl-Space": "autocomplete"
    }
});

const jsEditor = CodeMirror.fromTextArea(document.getElementById('js-code'), {
    mode: 'javascript',
    theme: 'dracula',
    lineNumbers: true,
    autoCloseBrackets: true,
    matchBrackets: true,
    extraKeys: {
        "Ctrl-Space": "autocomplete"
    }
});

document.getElementById('run-code').addEventListener('click', () => {
    let htmlCode = htmlEditor.getValue();
    let cssCode = `<style>${cssEditor.getValue()}</style>`;
    let jsCode = jsEditor.getValue();

    let outputFrame = document.getElementById('output');
    let outputDoc = outputFrame.contentDocument || outputFrame.contentWindow.document;

    outputDoc.open();
    outputDoc.write(htmlCode + cssCode + `<script>${jsCode}<\/script>`);
    outputDoc.close();
});