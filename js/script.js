    function calcula (e) {
            exame.value = "";
            let notas = Array.from(document.querySelectorAll('input.notas')).map(e => Number(e.value));
            let valorinicial=0;
            let mediavalor= notas.length;
            let media = notas.reduce((inicio, fim) => inicio + fim, valorinicial) / mediavalor;
            let mediamostra = document.querySelector('#media');
            mediamostra.value = media;
            let resultado = 0;
            if (media >= 7) {
                resultado = "Aprovado por média";
            }
            else {
                let notafinal = Math.ceil(((5.0 - ((media) * 0.6)) / 0.4) * 10) / 10.0;
                if (notafinal < 10){
                    resultado = notafinal;
                }
                else{
                    resultado = "Reprovado por média"
                }
            }
            exame.value = resultado;
        };

        let nota = `<div class="row g-3 align-items-center">
        <div class="col-auto">
            <label for="nota$" class="col-form-label">Nota</label>
        </div>
        <div class="col-auto">
            <input type="number" id="nota$" class="form-control notas" aria-describedby="passwordHelpInline" step="0.1" placeholder="Digite sua Nota" onchange="calcula()" value="7">
        </div>
            </div>
            <br>`;

        let form = document.querySelector('form');
        let exame = document.querySelector('#exame');

        document.addEventListener('DOMContentLoaded', function() {
            document.querySelector('select').addEventListener('change', (e) => {
                let mudar = '';
                let notas = Number(e.target.value);
                for (var i = 1; i <= notas; i++) {
                    mudar += nota.replaceAll('$', i);
                }
                form.innerHTML = mudar + `<div class="row g-3 align-items-center">
            <div class="col-auto">
                <label for="media" class="col-form-label">Média</label>
            </div>
            <div class="col-auto">
                <input type="number" id="media" class="form-control"placeholder="Sua Média" readonly>
            </div>
                </div>
                <br>`;
                calcula(e);
            });
        });