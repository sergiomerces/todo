console.log('Hello World');

function adicionarTarefa() {
    let entrada = document.getElementById('tarefa');
    let tarefas = [];
    let lista = document.getElementById('lista');

    tarefas.push(entrada);

    for(let i = 0; i < tarefas.length; i++) {
        lista.innerHTML += `<p><input type="checkbox" name="chkTarefa" id="chkTarefa" onclick="tarefaConcluida()"> ${tarefas[i].value}</p>`;
    }
    document.getElementById('tarefa').value = null;
    entrada.focus();
}